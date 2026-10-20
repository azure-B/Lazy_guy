# Prompt H — Show the result (run React + Node)

## Human instruction (edit brackets, then send)

Show me the result in the browser. I am a beginner.

- Page route if any: [/ or /health or …]
- I need API too: [yes / no]

## AI: read these files first (mandatory)

- `AGENTS.md`
- `QUICKSTART.md`
- `.AI/docs/12-run-preview.md`
- `scripts/dev-up.mjs`
- `Folder.md`

## AI: do this (in order)

1. Run `node scripts/dev-up.mjs` (or `--front` / `--back` as needed). Do **not** block on Git sync for preview-only.
2. Trust the helper’s READY / FAILED summary (it checks Lazy Guy identity, not only open ports).
3. Tell me only verified URLs, e.g. `Open http://localhost:5173/health`
4. If the page was just edited, still ensure servers are ready and give the link again.
5. If start fails (non-zero exit / FAILED line), use `.AI/prompts/G-fix.md` and give me a paste-ready fix prompt. Check `.dev-up-logs/` when present.

## Rules

- Prefer showing the live app over long code explanations.
- Short easy English.
