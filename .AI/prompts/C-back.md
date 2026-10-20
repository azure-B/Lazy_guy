# Prompt C — Back: new API

## Human instruction (edit the brackets, then send)

Please build this Back API for me (dev-only, no hand-written spec):

- APIs:
  - [example: GET /api/products — list]
  - [example: GET /api/products/:id — detail]
- Extra notes: [optional]

## AI: read these files first (mandatory)

- `AGENTS.md`
- `QUICKSTART.md`
- `.AI/docs/02-back.md`
- `.AI/docs/05-netlify-supabase.md`
- `.AI/docs/07-ai-md-workflow.md`
- `.AI/docs/08-roles.md`
- `.AI/docs/09-mcp-setup.md`
- `.AI/docs/10-db-erd-supabase.md`
- `.AI/md/db/erd.md`
- `.AI/md/API/README.md`
- `back/routes/`, `back/controller/`, `back/models/`
- `back/middleware/security.js`
- `Folder.md`

## AI: do this (in order)

1. Auto-create/update `.AI/md/specs/<feature>.md`.
2. Implement `routes/` → `controller/` → `models/` only (no layer skip).
3. Pass security checklist (CORS allowlist, validation, no string-built SQL).
4. If schema should change, improve `.AI/md/db/erd.md`; ask before write SQL if not already permitted.
5. Use GitHub / Supabase / Netlify / Render MCP when available.
6. Update `.AI/md/API/README.md` and `.AI/md/jobs/back/`.
7. Update `Folder.md` if structure changed.

## Rules

- English for all `.AI/md/**`.
- Prefer failing closed on security.
- Explain the result in short, easy words.
