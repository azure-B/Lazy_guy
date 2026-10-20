# Prompt E — Python only

## Human instruction (edit the brackets, then send)

Please do Python work only (dev-only, no hand-written spec):

- Goal: [example: clean JSON under python/api]
- Files to touch if known: [optional path]

## AI: read these files first (mandatory)

- `AGENTS.md`
- `QUICKSTART.md`
- `.AI/docs/00-overview.md`
- `.AI/docs/07-ai-md-workflow.md`
- `.AI/docs/08-roles.md`
- `python/`
- `Folder.md`

## AI: do this (in order)

1. Auto-create/update `.AI/md/specs/<feature>.md`.
2. Edit only `python/` unless the human asked otherwise.
3. Do not change `front/` or `back/` unless asked.
4. Update `Folder.md` if structure changed.

## Rules

- English for all `.AI/md/**`.
- Explain in short, easy words.
