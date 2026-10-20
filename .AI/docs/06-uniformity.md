# 06 ??Cross-IDE Uniformity

Same user request ??same folders, same MD updates, same commit style on Cursor, Codex, Claude Code, and Antigravity.

## Boot Sequence (Identical on Every IDE)

```
1. Load entry file (AGENTS.md or CLAUDE.md ??same text)
2. git pull origin main (unless skipped)
3. Read docs/00-overview.md
4. Read docs/06-uniformity.md (this file)
5. Read docs/07-ai-md-workflow.md
6. Read area doc(s) + .AI/md/specs if implementing
7. Edit code
8. Update .AI/md/API, .AI/md/jobs, md/folder as required
```

If an IDE did not auto-open `docs/`, the agent **must open them** before editing.

## Mandatory Invariants

These eight lines are copied **verbatim** into `AGENTS.md`, `CLAUDE.md`, and Cursor always-apply rules. Do not weaken them.

1. **English only** for all `.AI/md/**` and commit summaries.
2. **Feature work starts from** `.AI/md/specs/<feature>.md` (create it first if missing).
3. **back** = Express `routes/` ??`controller/` ??`models/` only.
4. **front** = React pages/components; HTTP only via `front/src/services/api.js`.
5. **After back:** update `.AI/md/API/README.md` + `.AI/md/jobs/back/` (+ `Folder.md` if structure changed).
6. **After front:** update `.AI/md/jobs/front/` with APIs used + filenames (+ `Folder.md` if needed).
7. **Git:** pull before work; commit only when asked; message `[YYYY.MM.DD] - work summary`.
8. **Host/data:** follow `docs/05-netlify-supabase.md` and root `env_example` (Render + Netlify + Supabase).
9. **Stitch UI:** HTML from View code goes in `front/publish/`; React conversion extracts shared UI into `front/src/components/common/` (`docs/03-front.md`).
10. **Security:** Express must enforce CORS allowlists, no SQL/string injection, input validation, safe errors (`docs/02-back.md`).

## Single SSOT

| Concern | Only location |
|---------|----------------|
| Agent behavior | `docs/*.md` |
| Project tree | `Folder.md` |
| Feature intent | `.AI/md/specs/` |
| API catalog | `.AI/md/API/README.md` |
| Env URL map | `env_example` |

IDE files are **short pointers + invariants**. No second full copy of `docs/02`??05` or `07`.

## IDE File Duties

| File | Allowed content |
|------|-----------------|
| `AGENTS.md` | Invariants + mandatory read + pointer to `docs/` |
| `CLAUDE.md` | **Same body as `AGENTS.md`** (Claude Code entry name only) |
| `.cursor/rules/*.mdc` | One-line pointer to the matching `docs/0X-*.md` + invariants in always-apply |
| `README.md` | Install only ??not runtime agent rules |

When changing invariants, update `docs/06-uniformity.md` first, then sync `AGENTS.md` and `CLAUDE.md` to match.

## Output Contract

| Artifact | When |
|----------|------|
| `.AI/md/specs/<name>.md` | Always for feature work |
| `back/routes\|controller\|models/...` | If API/Data in spec |
| `front/src/pages\|components\|services/...` | If UI in spec |
| `.AI/md/API/README.md` | If API changed |
| `.AI/md/jobs/back/` or `.AI/md/jobs/front/` | After any code change |
| `Folder.md` | If paths added/moved/removed |

## Acceptance Check

- [ ] Boot sequence followed (docs actually read)
- [ ] Spec status updated
- [ ] No layer skip (no Supabase in routes; no raw `fetch` in pages)
- [ ] Stitch HTML used from `front/publish/`; shared UI in `components/common/`
- [ ] Express security checklist passed (`docs/02-back.md`)
- [ ] Jobs log has files (+ APIs for front)
- [ ] `Folder.md` matches the tree
- [ ] `AGENTS.md` and `CLAUDE.md` still match each other
