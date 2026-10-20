# Feature: README first-visit clarity

- Status: done
- Date: 2026-10-20

## Goal

Help first-time visitors quickly understand who Lazy Guy is for, what it adds on top of a normal AI coding tool, and what to do first (Quick try vs Full setup).

## Users

- Beginners opening this repository for the first time
- People who already use Cursor, Codex, Claude Code, or Antigravity and need a clear workflow

## UI

- Screen: N/A (documentation)
- Stitch / publish: none
- Fields: none
- Actions: read README → follow QUICKSTART Quick try or Full setup
- Common components to extract: none

## API

| Method | Path | Request | Response |
|--------|------|---------|----------|
| — | — | — | No API changes in this task |

## Data (Supabase)

| Table | Columns | Notes |
|-------|---------|-------|
| — | — | No database changes |

- Living ERD: `.AI/md/db/erd.md` (unchanged)
- SQL testing: not applicable

## Out of Scope

- Commits, pushes, deploys
- New AI models, CLIs, or packages
- Claiming unverified tool support or BU_Team build history
- Inventing license, screenshots, or demo video files
- Large refactors of Front/Back code

## Acceptance

- README answers: who it is for, what it adds, what to do first
- QUICKSTART splits Quick try vs Full setup
- App-specific install details remain reachable without crowding the first screen
- Spec + job log updated; Folder.md matches new paths
