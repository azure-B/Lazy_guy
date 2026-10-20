# Prompt B — Front: HTML → React

## Human instruction (edit the brackets, then send)

Please build this Front page for me (dev-only, no hand-written spec):

- HTML file: `front/publish/[your-page].html`
- What the page should do: [one short sentence]

## AI: read these files first (mandatory)

- `AGENTS.md`
- `QUICKSTART.md`
- `.AI/docs/03-front.md`
- `.AI/docs/07-ai-md-workflow.md`
- `.AI/docs/08-roles.md`
- The HTML path the human named under `front/publish/`
- `front/src/services/api.js`
- `front/src/App.jsx`
- `Folder.md`

## AI: do this (in order)

1. Auto-create/update `.AI/md/specs/<feature>.md` from the request + HTML.
2. Convert the HTML into React under `front/src/pages/`.
3. Put reusable UI in `front/src/components/common/`.
4. Use `front/src/components/layout/` for header/footer chrome.
5. Call APIs only via `front/src/services/api.js`.
6. Wire the route in `App.jsx` if needed.
7. Write `.AI/md/jobs/front/` and update `Folder.md` if structure changed.
8. Do **not** edit `.AI/md/API/README.md` on front-only work.
9. **Show the page:** follow `.AI/docs/12-run-preview.md` — run `node scripts/dev-up.mjs` (skips if already up) and give the localhost URL. Do not start duplicate servers.

## Rules

- English for all `.AI/md/**`.
- Dev-only is OK; you still must auto-create the spec.
- Explain the result in short, easy words.
- After page changes, open/show the running app link (not code-only).
