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

1. Run `node scripts/dev-up.mjs` (or `--front` / `--back` as needed).
2. **Do not** start a second server if the port is already open (the script skips duplicates).
3. Tell me the exact URL in easy words, e.g. `Open http://localhost:5173/health`
4. If the page was just edited, still ensure servers are up and give the link again.
5. If start fails, use `.AI/prompts/G-fix.md` rules and give me a paste-ready fix prompt.

## Rules

- Prefer showing the live app over long code explanations.
- Short easy English.
