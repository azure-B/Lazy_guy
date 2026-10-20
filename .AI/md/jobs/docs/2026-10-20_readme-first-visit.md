# Job — README first-visit clarity

- Date: 2026-10-20
- Spec: `.AI/md/specs/readme-first-visit.md`
- Area: documentation (no Front/Back API code changes)

## What changed

- Rewrote `README.md` as a first-visit hub (value, example, Quick try / Full setup, prompts, limits).
- Rewrote `QUICKSTART.md` with **A. Quick try** and **B. Full setup**, linking app details to `.AI/docs/13-ide-setup.md`.
- Added `.AI/docs/13-ide-setup.md` (Cursor / Codex / Claude Code / Antigravity).
- Added `.AI/md/guides/verification-notes.md` (maintainer check records) and `assets/bu-team-home.png`.
- Updated `Folder.md`, `AGENTS.md` / `CLAUDE.md` rules index for doc `13`.

## Cleanup

- Removed `.AI/md/guides/demo-filming-notes.md`; short filming outline kept under verification-notes.

## Verification run locally

- `node scripts/dev-up.mjs --front` → Front served `http://localhost:5173` (HTTP 200).
- `node scripts/dev-up.mjs --back` → `GET /api/health` → `{"ok":true,...}` without Supabase tokens.
- BU_Team public site + GitHub structure checked; mobile screenshot embedded in README (sample data on screen).

## Not done

- Commit / push / deploy  
- LICENSE choice  
- End-to-end run tests of Codex / Claude Code / Antigravity  
