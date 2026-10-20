# Job — Safe Git sync and reliable preview helper

- Date: 2026-10-20
- Spec: `.AI/md/specs/git-sync-and-dev-up.md`

## Changes

- Rewrote `.AI/docs/01-git.md` as SSOT for state-aware pre-work sync + MCP/local coordination.
- Aligned `AGENTS.md` / `CLAUDE.md`, Cursor rules, `00` / `06` / `07` docs.
- Rewrote `scripts/dev-up.mjs` (readiness probes, logs under `.dev-up-logs/`, non-zero exit on failure).
- Updated `.AI/docs/12-run-preview.md`, `H-preview.md`, README/QUICKSTART preview + Node 18+ notes.
- Softened G-fix / `11-error-fix.md` “fix everything” wording.
- `.gitignore`: `.dev-up-logs/`

## Notes

- Did not pull remote during this task (dirty / in-progress local edits; per new sync rules).
- No commit / push / remote MCP writes.
