# Lazy Guy — Agent Entry (All IDEs)

This file is the **shared entry** for Cursor, Codex, and Antigravity.  
`CLAUDE.md` must stay a **verbatim copy** of this file (Claude Code requires that name).

**Full rules SSOT:** `.AI/docs/` — do not invent parallel conventions.  
**Live tree:** root `Folder.md` (update whenever files move).

## Boot (Required)

1. `git pull origin main` unless the user already pulled or said to skip
2. Read, in order:
   - `.AI/docs/00-overview.md`
   - `.AI/docs/06-uniformity.md`
   - `.AI/docs/07-ai-md-workflow.md`
   - Role: `.AI/docs/08-roles.md`
   - Area: `.AI/docs/02-back.md` | `.AI/docs/03-front.md` | `.AI/docs/04-md-documentation.md` | `.AI/docs/01-git.md`
   - Deploy/env/MCP: `.AI/docs/05-netlify-supabase.md` + `.AI/docs/09-mcp-setup.md` + root `env_example`
   - DB/ERD: `.AI/docs/10-db-erd-supabase.md` + `.AI/md/db/erd.md` when data is involved
   - Feature: `.AI/md/specs/<feature>.md`
   - UI from Stitch: matching `front/publish/` HTML

## Mandatory Invariants

1. **English only** for all `.AI/md/**` and commit summaries.
2. **Auto-spec:** humans may request **dev only**; the agent always creates/updates `.AI/md/specs/<feature>.md` from the request before implementing (`.AI/docs/07-ai-md-workflow.md`).
3. **back** = Express `routes/` → `controller/` → `models/` only.
4. **front** = React pages/components; HTTP only via `front/src/services/api.js`.
5. **After back:** update `.AI/md/API/README.md` + `.AI/md/jobs/back/` (+ **`Folder.md`** if structure changed).
6. **After front:** update `.AI/md/jobs/front/` with APIs used + filenames (+ **`Folder.md`** if needed).
7. **Git:** pull before work; commit only when asked; message `[YYYY.MM.DD] - work summary`.
8. **Host/data:** follow `.AI/docs/05-netlify-supabase.md` and root `env_example` (Render + Netlify + Supabase).
9. **Stitch UI:** HTML from View code goes in `front/publish/`; shared UI → `front/src/components/common/` (`.AI/docs/03-front.md`).
10. **Security:** Express CORS allowlists, no SQL/string injection, validation, safe errors (`.AI/docs/02-back.md`).
11. **Folder.md:** always refresh the root live tree after add/remove/move.
12. **MCP tokens:** only via temporary root `MCPkeys.json`; register with `node scripts/register-mcp.mjs`; file is deleted after success (`.AI/docs/09-mcp-setup.md`).
13. **DB/ERD:** keep `.AI/md/db/erd.md` current; AI may adapt the ERD for best results; Supabase MCP SQL write/DDL only after user permission (`.AI/docs/10-db-erd-supabase.md`).

## Rules Index

| Topic | Doc |
|-------|-----|
| Overview | `.AI/docs/00-overview.md` |
| Git | `.AI/docs/01-git.md` |
| back + security | `.AI/docs/02-back.md` |
| front + Stitch | `.AI/docs/03-front.md` |
| md writing | `.AI/docs/04-md-documentation.md` |
| Render / Netlify / Supabase | `.AI/docs/05-netlify-supabase.md` |
| Uniformity | `.AI/docs/06-uniformity.md` |
| AI + MD workflow | `.AI/docs/07-ai-md-workflow.md` |
| Roles + context | `.AI/docs/08-roles.md` |
| MCP setup | `.AI/docs/09-mcp-setup.md` |
| DB / ERD / SQL test | `.AI/docs/10-db-erd-supabase.md` |

## Install / How to Dev? / MCP

See `README.md`.
