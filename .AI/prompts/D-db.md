# Prompt D — DB / ERD + Supabase SQL (with permission)

## Human instruction (edit the brackets, then send)

I allow database work for this request.

Permission granted:

- Run Supabase MCP SQL (read + write + schema changes).
- Improve the ERD if a better design exists.
- Keep `.AI/md/db/erd.md` updated after tests.

Data I want:

- [example: save memos per user and show a list]

## AI: read these files first (mandatory)

- `AGENTS.md`
- `QUICKSTART.md`
- `.AI/docs/10-db-erd-supabase.md`
- `.AI/docs/02-back.md`
- `.AI/docs/09-mcp-setup.md`
- `.AI/md/db/erd.md`
- `.AI/md/API/README.md`
- `back/models/`
- `Folder.md`

## AI: do this (in order)

1. Auto-create/update `.AI/md/specs/<feature>.md`.
2. Review and improve ERD; write changes to `.AI/md/db/erd.md`.
3. Use Supabase MCP to apply/test SQL.
4. Wire `back/models/` to the tested schema.
5. Update API/jobs/`Folder.md` as needed.
6. Ask again before DROP / TRUNCATE on real data.

## Rules

- English for all `.AI/md/**`.
- No secrets in front / Netlify.
- Explain in short, easy words.
