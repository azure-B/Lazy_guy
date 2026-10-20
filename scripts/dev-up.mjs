#!/usr/bin/env node
/**
 * Start Front (5173) and/or Back (3001) when this project's services are not ready.
 * Usage:
 *   node scripts/dev-up.mjs
 *   node scripts/dev-up.mjs --front
 *   node scripts/dev-up.mjs --back
 *
 * Exit 0 only if every requested service is verified ready.
 * An open port alone is not enough — Front/Back must look like Lazy Guy.
 */
import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const wantFront = args.has('--front') || (!args.has('--front') && !args.has('--back'));
const wantBack = args.has('--back') || (!args.has('--front') && !args.has('--back'));

const FRONT_PORT = 5173;
const BACK_PORT = 3001;
const READY_MS = 25000;
const LOG_DIR = path.join(root, '.dev-up-logs');

const BACK_SERVICE_ID = 'lazy-guy-api';

/** Lightweight Front family check: dedicated meta in front/index.html (not a security boundary). */
function hasLazyGuyFrontMeta(html) {
  const metas = String(html || '').match(/<meta\b[^>]*>/gi) || [];
  return metas.some((tag) => {
    const hasName = /\bname\s*=\s*(['"])lazy-guy-app\1/i.test(tag);
    const hasContent = /\bcontent\s*=\s*(['"])frontend\1/i.test(tag);
    return hasName && hasContent;
  });
}

function ensureLogDir() {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function logPath(name) {
  return path.join(LOG_DIR, `${name}.log`);
}

function tailFile(file, maxChars = 1200) {
  try {
    if (!fs.existsSync(file)) return '(no log file)';
    const text = fs.readFileSync(file, 'utf8');
    if (text.length <= maxChars) return text || '(empty log)';
    return text.slice(-maxChars);
  } catch (err) {
    return `(could not read log: ${err.message})`;
  }
}

function portOpenOnHost(port, host) {
  return new Promise((resolve) => {
    const socket = net.connect({ port, host }, () => {
      socket.end();
      resolve(true);
    });
    socket.on('error', () => resolve(false));
  });
}

async function portOpen(port) {
  for (const host of ['127.0.0.1', '::1']) {
    if (await portOpenOnHost(port, host)) return true;
  }
  return false;
}

function httpGetOnce(url, timeoutMs = 2500) {
  return new Promise((resolve) => {
    const req = http.get(url, { timeout: timeoutMs }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        resolve({
          ok: true,
          status: res.statusCode || 0,
          body: Buffer.concat(chunks).toString('utf8'),
        });
      });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ ok: false, status: 0, body: '' });
    });
    req.on('error', () => resolve({ ok: false, status: 0, body: '' }));
  });
}

/** Try IPv4 then localhost (IPv6-friendly on Windows). */
async function httpGet(pathAndQuery, port, timeoutMs = 2500) {
  const urls = [
    `http://127.0.0.1:${port}${pathAndQuery}`,
    `http://localhost:${port}${pathAndQuery}`,
  ];
  for (const url of urls) {
    const res = await httpGetOnce(url, timeoutMs);
    if (res.ok) return res;
  }
  return { ok: false, status: 0, body: '' };
}

async function probeBack() {
  if (!(await portOpen(BACK_PORT))) return { state: 'down' };
  const res = await httpGet('/api/health', BACK_PORT);
  if (!res.ok) {
    // Port open but not answering yet (startup) — keep waiting
    return { state: 'pending', detail: `port ${BACK_PORT} open; waiting for /api/health` };
  }
  if (res.status !== 200) {
    return {
      state: 'unknown',
      detail: `port ${BACK_PORT} returned HTTP ${res.status} for /api/health`,
    };
  }
  try {
    const json = JSON.parse(res.body);
    if (json && json.ok === true && json.service === BACK_SERVICE_ID) {
      return { state: 'ours', detail: 'health OK' };
    }
  } catch {
    /* fall through */
  }
  return { state: 'unknown', detail: `port ${BACK_PORT} open but response is not ${BACK_SERVICE_ID}` };
}

async function probeFront() {
  if (!(await portOpen(FRONT_PORT))) return { state: 'down' };
  const res = await httpGet('/', FRONT_PORT);
  if (!res.ok) {
    return { state: 'pending', detail: `port ${FRONT_PORT} open; waiting for HTTP` };
  }
  if (res.status !== 200) {
    return {
      state: 'unknown',
      detail: `port ${FRONT_PORT} returned HTTP ${res.status} (need 200 + lazy-guy-app meta)`,
    };
  }
  if (hasLazyGuyFrontMeta(res.body)) {
    return { state: 'ours', detail: 'lazy-guy-app frontend meta found' };
  }
  return {
    state: 'unknown',
    detail: `port ${FRONT_PORT} occupied by a response that does not look like this project's Front`,
  };
}

async function npmInstall(cwd) {
  const nm = path.join(cwd, 'node_modules');
  if (fs.existsSync(nm)) return;
  console.log(`[dev-up] npm install in ${path.relative(root, cwd)} …`);
  const code = await new Promise((resolve) => {
    const isWin = process.platform === 'win32';
    const child = spawn(isWin ? 'npm.cmd' : 'npm', ['install'], {
      cwd,
      stdio: 'inherit',
      shell: isWin,
    });
    child.on('error', (err) => {
      console.error(`[dev-up] npm install spawn error: ${err.message}`);
      resolve(1);
    });
    child.on('exit', (c) => resolve(c ?? 1));
  });
  if (code !== 0) {
    throw new Error(`npm install failed in ${path.relative(root, cwd)} (exit ${code})`);
  }
}

function resolveDevCommand(cwd) {
  const pkgPath = path.join(cwd, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const script = (pkg.scripts && pkg.scripts.dev) || '';
  // Prefer invoking Node entrypoints directly (avoids Windows npm.cmd + detached EINVAL)
  if (cwd.endsWith(`${path.sep}front`) || path.basename(cwd) === 'front') {
    const viteJs = path.join(cwd, 'node_modules', 'vite', 'bin', 'vite.js');
    if (fs.existsSync(viteJs)) return { cmd: process.execPath, args: [viteJs] };
  }
  if (cwd.endsWith(`${path.sep}back`) || path.basename(cwd) === 'back') {
    // package.json "dev": "node --watch app.js"
    if (script.includes('app.js')) {
      return { cmd: process.execPath, args: ['--watch', 'app.js'] };
    }
  }
  const isWin = process.platform === 'win32';
  return { cmd: isWin ? 'npm.cmd' : 'npm', args: ['run', 'dev'], shell: isWin };
}

function startDev(cwd, label, logFile) {
  const out = fs.openSync(logFile, 'a');
  const { cmd, args, shell } = resolveDevCommand(cwd);
  const child = spawn(cmd, args, {
    cwd,
    stdio: ['ignore', out, out],
    detached: true,
    windowsHide: true,
    shell: Boolean(shell),
    env: process.env,
  });
  child.on('error', (spawnErr) => {
    try {
      fs.writeFileSync(logFile, `\n[dev-up] spawn error: ${spawnErr.message}\n`, { flag: 'a' });
    } catch {
      /* ignore */
    }
  });
  child.unref();
  console.log(
    `[dev-up] started ${label} (pid ${child.pid}) via ${path.basename(cmd)} — log: ${path.relative(root, logFile)}`,
  );
  return child;
}

async function waitUntil(probe, label, ms = READY_MS) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    const result = await probe();
    if (result.state === 'ours') return result;
    if (result.state === 'unknown') return result;
    // down | pending → keep waiting
    await new Promise((r) => setTimeout(r, 500));
  }
  return { state: 'timeout', detail: `timeout waiting for ${label}` };
}

/**
 * @returns {'ready'|'failed'}
 */
async function ensure(label, probe, dir, logName) {
  let existing = await probe();
  if (existing.state === 'ours') {
    console.log(`[dev-up] ${label} already ready — skip start`);
    return 'ready';
  }
  if (existing.state === 'unknown') {
    console.error(`[dev-up] ${label} FAILED: ${existing.detail}`);
    console.error(`[dev-up] Stop the other process on that port, or free the port, then retry.`);
    return 'failed';
  }
  if (existing.state === 'pending') {
    console.log(`[dev-up] ${label}: port busy, waiting to see if it becomes Lazy Guy…`);
    existing = await waitUntil(probe, label, 8000);
    if (existing.state === 'ours') {
      console.log(`[dev-up] ${label} already ready — skip start`);
      return 'ready';
    }
    if (existing.state === 'unknown') {
      console.error(`[dev-up] ${label} FAILED: ${existing.detail}`);
      console.error(`[dev-up] Stop the other process on that port, or free the port, then retry.`);
      return 'failed';
    }
    console.error(
      `[dev-up] ${label} FAILED: port is occupied but did not identify as Lazy Guy (${existing.detail || existing.state}).`,
    );
    console.error(`[dev-up] Free the port, then retry. Logs (if any): .dev-up-logs/`);
    return 'failed';
  }

  console.log(`[dev-up] ${label} not ready — starting…`);
  ensureLogDir();
  const logFile = logPath(logName);
  try {
    fs.writeFileSync(logFile, `[dev-up] ${new Date().toISOString()} starting ${label}\n`);
    await npmInstall(dir);
    startDev(dir, label, logFile);
  } catch (err) {
    console.error(`[dev-up] ${label} FAILED: ${err.message}`);
    console.error(`[dev-up] Log: ${path.relative(root, logFile)}`);
    console.error(tailFile(logFile));
    return 'failed';
  }

  const after = await waitUntil(probe, label);
  if (after.state === 'ours') {
    console.log(`[dev-up] ${label} is ready`);
    return 'ready';
  }

  console.error(`[dev-up] ${label} FAILED: ${after.detail || after.state}`);
  console.error(`[dev-up] Log: ${path.relative(root, logFile)}`);
  console.error('--- log excerpt ---');
  console.error(tailFile(logFile));
  console.error('--- end excerpt ---');
  console.error(`[dev-up] Next: open the log, fix the error, then re-run this command.`);
  return 'failed';
}

const results = [];

if (wantFront) {
  results.push({
    name: 'Front',
    url: `http://localhost:${FRONT_PORT}`,
    status: await ensure(
      'Front (React/Vite)',
      probeFront,
      path.join(root, 'front'),
      'front',
    ),
  });
}

if (wantBack) {
  results.push({
    name: 'Back',
    url: `http://localhost:${BACK_PORT}`,
    status: await ensure(
      'Back (Node/Express)',
      probeBack,
      path.join(root, 'back'),
      'back',
    ),
  });
}

const failed = results.filter((r) => r.status !== 'ready');
const ready = results.filter((r) => r.status === 'ready');

console.log('[dev-up] summary');
for (const r of ready) {
  console.log(`  READY  ${r.name} → ${r.url}`);
}
for (const r of failed) {
  console.log(`  FAILED ${r.name}`);
}

if (failed.length === 0) {
  console.log('[dev-up] done — all requested services ready');
  process.exit(0);
}

if (ready.length > 0) {
  console.log('[dev-up] partial success — some requested services failed');
} else {
  console.log('[dev-up] failed — no requested service became ready');
}
process.exit(1);
