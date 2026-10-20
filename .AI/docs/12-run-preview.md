# 12 — Show the result (run React + Node, no duplicate servers)

When the user asks to **see the result**, **open the page**, or after a **page/API change**, the agent must run the apps and point to the live URL — not only describe code.

**Preview-only requests do not require Git synchronization** (see `.AI/docs/01-git.md`).

## Defaults

| App | Folder | Command | URL / port |
|-----|--------|---------|------------|
| Front (React / Vite) | `front/` | `npm run dev` | http://localhost:5173 |
| Back (Express / Node) | `back/` | `npm run dev` | http://localhost:3001 |

Prefer the helper:

```bash
node scripts/dev-up.mjs
```

Optional path only:

```bash
node scripts/dev-up.mjs --front
node scripts/dev-up.mjs --back
```

## Helper behavior (`scripts/dev-up.mjs`)

- Starts only services that are **not** already verified as this project.
- **Back ready** = `GET /api/health` returns JSON with `ok: true` and `service: "lazy-guy-api"`.
- **Front ready** = HTTP response on `:5173` looks like this app (e.g. title / Vite entry markers).
- An open port with an **unrecognized** response → that service **fails** (exit non-zero). Do not claim “already running.”
- Startup logs go under **`.dev-up-logs/`** (gitignored). On failure, the script prints the log path and a short excerpt.
- Exit **0** only if every **requested** service is ready.
- Partial success (one ready, one failed) → exit **1**; do not stop a service that already succeeded.

## Supported Node.js

Vite 6 / this stack expect **Node.js 18+** (Node 20 LTS or newer recommended).  
Check with `node -v`.

## When to run

| User intent | Agent action |
|-------------|--------------|
| “Show me the result / open the page” | Ensure Front (+ Back if API needed) is ready → give the URL |
| After Front page edit | Ensure Front is ready → give `http://localhost:5173/[route]` |
| After Back API edit | Ensure Back is ready → give `http://localhost:3001/api/...` tip |
| Full-stack change | Ensure **both** are ready |

## No duplicate Lazy Guy servers

1. Run `dev-up` (it probes before starting).
2. If this project’s Front/Back is already ready → reuse; do not start another copy.
3. If the port is taken by something else → report failure; do not kill unknown processes; do not silently change ports.
4. `npm install` runs when `node_modules` is missing; if start still fails, use the log excerpt (missing/broken deps are possible even when the folder exists).

## After start

- Tell the human only **verified** URLs from a successful `dev-up` (or an already-ready probe).
- Example: `Open this in your browser: http://localhost:5173/health`
- If `dev-up` exits non-zero, do not pretend the failed service is up — diagnose (logs / G-fix).

## Related

- Beginner prompt: `.AI/prompts/H-preview.md`
- QUICKSTART preview section
