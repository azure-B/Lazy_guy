# Feature: Safe Git sync and reliable preview helper

- Status: done
- Date: 2026-10-20

## Goal

Replace unconditional `git pull origin main` with a state-aware, non-destructive pre-work sync, and make `scripts/dev-up.mjs` report readiness and failures accurately.

## Users

- Agents implementing features while GitHub MCP may change the remote
- Beginners running local preview without needing Git sync

## UI

- Screen: N/A (docs + script)
- Stitch / publish: none

## API

| Method | Path | Notes |
|--------|------|-------|
| GET | /api/health | Used as Back readiness probe (`service: lazy-guy-api`) |

## Data (Supabase)

No schema changes.

## Out of Scope

- Commits, pushes, remote MCP writes
- Automatic stash/rebase/merge conflict resolution
- Killing unknown processes on ports
- Large dependency upgrades

## Acceptance

- `.AI/docs/01-git.md` is the SSOT for sync; AGENTS/CLAUDE/other docs align
- `dev-up.mjs` exits non-zero on requested-service failure; logs useful; recognizes Lazy Guy services
- README/QUICKSTART match helper behavior without a full marketing rewrite
