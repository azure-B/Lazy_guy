#!/usr/bin/env node
/**
 * Start Front (5173) and/or Back (3001) only if not already listening.
 * Usage:
 *   node scripts/dev-up.mjs
 *   node scripts/dev-up.mjs --front
 *   node scripts/dev-up.mjs --back
 */
import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const wantFront = args.has('--front') || (!args.has('--front') && !args.has('--back'));
const wantBack = args.has('--back') || (!args.has('--front') && !args.has('--back'));

const FRONT_PORT = 5173;
const BACK_PORT = 3001;

function portOpen(port) {
  return new Promise((resolve) => {
    const socket = net.connect({ port, host: '127.0.0.1' }, () => {
      socket.end();
      resolve(true);
    });
    socket.on('error', () => resolve(false));
  });
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
    child.on('exit', (c) => resolve(c ?? 1));
  });
  if (code !== 0) {
    console.error(`[dev-up] npm install failed: ${cwd}`);
    process.exit(1);
  }
}

async function startDev(cwd, label) {
  await npmInstall(cwd);
  const isWin = process.platform === 'win32';
  const child = spawn(isWin ? 'npm.cmd' : 'npm', ['run', 'dev'], {
    cwd,
    stdio: 'ignore',
    shell: isWin,
    detached: true,
    env: process.env,
  });
  child.unref();
  console.log(`[dev-up] started ${label} (pid ${child.pid}) in background`);
}

async function waitForPort(port, label, ms = 20000) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    if (await portOpen(port)) {
      console.log(`[dev-up] ${label} is up on :${port}`);
      return true;
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  console.warn(`[dev-up] timeout waiting for ${label} on :${port}`);
  return false;
}

async function ensure(label, port, dir, wanted) {
  if (!wanted) return;
  if (await portOpen(port)) {
    console.log(`[dev-up] ${label} already running on http://localhost:${port} — skip start`);
    return;
  }
  console.log(`[dev-up] ${label} not detected on :${port} — starting…`);
  await startDev(dir, label);
  await waitForPort(port, label);
}

await ensure('Front (React/Vite)', FRONT_PORT, path.join(root, 'front'), wantFront);
await ensure('Back (Node/Express)', BACK_PORT, path.join(root, 'back'), wantBack);

console.log('[dev-up] done');
if (wantFront) console.log('  Front → http://localhost:5173');
if (wantBack) console.log('  Back  → http://localhost:3001');
