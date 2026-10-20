# Prompt F — Front + Back together

## Human instruction (edit the brackets, then send)

Please build screen + API together (dev-only, no hand-written spec):

- Feature: [example: public notice list screen + list API]
- HTML if any: `front/publish/[your-page].html`
- DB write permission: [yes / no / ask me first]

## AI: read these files first (mandatory)

- `AGENTS.md`
- `QUICKSTART.md`
- `.AI/docs/07-ai-md-workflow.md`
- `.AI/docs/08-roles.md`
- `.AI/docs/03-front.md`
- `.AI/docs/02-back.md`
- `.AI/docs/10-db-erd-supabase.md`
- `.AI/md/db/erd.md`
- publish HTML if named
- `front/src/services/api.js`
- `back/routes/`, `back/controller/`, `back/models/`
- `Folder.md`

## AI: do this (in order — do not skip)

1. Auto-create the spec under `.AI/md/specs/`.
2. Improve ERD if needed (ask first if DB write not clearly granted).
3. Back: routes → controller → models + security.
4. Front: convert publish HTML if present; shared UI → `components/common/`.
5. Front HTTP only via `services/api.js`.
6. Update `.AI/md/API`, `.AI/md/jobs/front/`, `.AI/md/jobs/back/`, `Folder.md`.
7. **Show the result:** `node scripts/dev-up.mjs` per `.AI/docs/12-run-preview.md` (no duplicate servers) and give Front + Back URLs.

## Rules

- Finish the whole feature in one go when possible.
- English for all `.AI/md/**`.
- Explain in short, easy words.
- Prefer showing the live page over describing it only.
