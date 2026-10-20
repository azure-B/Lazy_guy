# Verification notes (maintainer / agent reference)

Human-facing summary stays in [`README.md`](../../../README.md).  
This file holds **detailed records** that should not crowd the project introduction.

## Local preview (Lazy Guy starter)

| Check | Result | When |
|-------|--------|------|
| `node scripts/dev-up.mjs --front` | Front served at `http://localhost:5173` (HTTP 200) | 2026-10-20 |
| `node scripts/dev-up.mjs --back` | `GET /api/health` returned `{"ok":true,...}` without Supabase env | 2026-10-20 |
| MCP / cloud tokens required for that preview? | No | 2026-10-20 |

Other machines may still need a first `npm install` (the helper runs it when `node_modules` is missing). Port wait timing can vary.

## AI coding tools

| Tool | Setup guidance in repo | End-to-end run verified here? |
|------|------------------------|-------------------------------|
| Cursor | Yes | No full product QA pass (docs were edited in Cursor) |
| Codex | Yes | No |
| Claude Code | Yes | No |
| Antigravity | Yes | No |

Presence of instruction files is **not** the same as verified behavior on every OS or version.

## BU_Team example (public checks)

| Check | Result | When |
|-------|--------|------|
| Live site reachable | Yes — [bu-team.netlify.app](https://bu-team.netlify.app/) | 2026-10-20 |
| Public homepage text (WebFetch) | Korean recommendation-card style message visible | 2026-10-20 |
| GitHub repo structure | React + Vite front, Express MVC back, markdown docs, `AGENTS.md` | 2026-10-20 |
| Screenshot for README | Mobile viewport (`390×844`) via headless Chrome → `.AI/md/guides/assets/bu-team-home.png`. Maintainer confirmed on-screen name/ID are sample data; embedded in README. | 2026-10-20 |

Maintainer note: BU_Team was developed collaboratively with people using the Lazy Guy workflow as the shared basis for the whole project/site.

## Screenshot / demo

- README asset: [`assets/bu-team-home.png`](assets/bu-team-home.png) (phone-sized capture of the public home screen).
- Demo video: optional later. Suggested outline if filmed: pick one prompt → ask for a small change → preview with `H-preview` → recover with `G-fix` → optional open BU_Team live as an example. Do not invent productivity claims on camera.
- Do not invent image paths or placeholder screenshots.

## package-lock.json (2026-10-20 install)

| File | App folder | Registry hosts seen | Match `package.json` root deps? |
|------|------------|---------------------|----------------------------------|
| `front/package-lock.json` | `front/` (`lazy-guy-front`) | `registry.npmjs.org` only | Yes |
| `back/package-lock.json` | `back/` (`lazy-guy-back`) | `registry.npmjs.org` only | Yes |

No private registry URLs or embedded credentials found in those lockfiles.  
They support reproducible installs for the real Front/Back apps (not temp folders). Include them in a future commit when the maintainer is ready.

## Pending maintainer decisions (not README content)

- Choose and add a license when ready (do not invent one).
- Optional: commit `front/package-lock.json` and `back/package-lock.json`.
