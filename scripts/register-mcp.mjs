#!/usr/bin/env node
/**
 * Fill tokens in MCPkeys.json → writes .cursor/mcp.json → deletes MCPkeys.json.
 * Flow: paste tokens once → MCP registered for Cursor.
 * See .AI/docs/09-mcp-setup.md and README.md §1.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const keysPath = path.join(root, 'MCPkeys.json');
const cursorDir = path.join(root, '.cursor');
const mcpPath = path.join(cursorDir, 'mcp.json');

const PLACEHOLDERS = new Set([
  'ghp_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',
  'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',
  'YOUR_PROJECT_REF',
  'YOUR_NETLIFY_AUTH_TOKEN',
  'YOUR_RENDER_API_KEY',
  '',
]);

function fail(message) {
  console.error(`[register-mcp] ${message}`);
  process.exit(1);
}

function usable(value) {
  const v = (value || '').trim();
  return v.length > 0 && !PLACEHOLDERS.has(v);
}

if (!fs.existsSync(keysPath)) {
  fail(
    'MCPkeys.json not found.\n  1) cp MCPkeys.json.example MCPkeys.json\n  2) paste real tokens\n  3) node scripts/register-mcp.mjs',
  );
}

let config;
try {
  config = JSON.parse(fs.readFileSync(keysPath, 'utf8'));
} catch (err) {
  fail(`Invalid MCPkeys.json: ${err.message}`);
}

const servers = {};

const githubToken =
  (config.github?.token || config.github_token || config.GITHUB_TOKEN || '').trim();
if (usable(githubToken)) {
  servers.github = {
    url: 'https://api.githubcopilot.com/mcp/',
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  };
}

const supabase = config.supabase || {};
const projectRef = (supabase.project_ref || '').trim();
if (usable(projectRef)) {
  const params = new URLSearchParams();
  params.set('project_ref', projectRef);
  if (supabase.read_only !== false) {
    params.set('read_only', 'true');
  }
  servers.supabase = {
    url: `https://mcp.supabase.com/mcp?${params.toString()}`,
  };
}

const netlifyToken = (config.netlify?.auth_token || '').trim();
if (usable(netlifyToken)) {
  servers.netlify = {
    command: 'npx',
    args: ['-y', '@netlify/mcp'],
    env: {
      NETLIFY_AUTH_TOKEN: netlifyToken,
    },
  };
}

const renderKey = (config.render?.api_key || '').trim();
if (usable(renderKey)) {
  servers.render = {
    url: 'https://mcp.render.com/mcp',
    headers: {
      Authorization: `Bearer ${renderKey}`,
    },
  };
}

if (Object.keys(servers).length === 0) {
  fail(
    'No usable tokens in MCPkeys.json.\n' +
      '  At minimum set github.token (GitHub PAT).\n' +
      '  Optional for Back: supabase.project_ref, netlify.auth_token, render.api_key',
  );
}

fs.mkdirSync(cursorDir, { recursive: true });

let existing = { mcpServers: {} };
if (fs.existsSync(mcpPath)) {
  try {
    existing = JSON.parse(fs.readFileSync(mcpPath, 'utf8'));
    if (!existing.mcpServers || typeof existing.mcpServers !== 'object') {
      existing.mcpServers = {};
    }
  } catch {
    existing = { mcpServers: {} };
  }
}

existing.mcpServers = {
  ...existing.mcpServers,
  ...servers,
};

fs.writeFileSync(mcpPath, `${JSON.stringify(existing, null, 2)}\n`, 'utf8');
console.log(`[register-mcp] Updated ${path.relative(root, mcpPath)}`);
console.log(`[register-mcp] Registered MCP: ${Object.keys(servers).join(', ')}`);

try {
  fs.unlinkSync(keysPath);
  console.log('[register-mcp] Deleted MCPkeys.json (tokens cleared from workspace).');
} catch (err) {
  fail(
    `Wrote mcp.json but failed to delete MCPkeys.json: ${err.message}. Delete MCPkeys.json manually.`,
  );
}

console.log(
  '[register-mcp] Done. Reload MCP in Cursor (or restart). Token-based servers are ready; Supabase may still ask for browser OAuth once.',
);
