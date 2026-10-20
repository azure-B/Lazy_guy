# 01 — Git Rules

## Commit Message Format (Required)

```
[YYYY.MM.DD] - work summary
```

- Date: dot (`.`) separated — e.g. `[2026.09.02]`
- After `-`: one-line summary in **English**
- Forbidden: `feat:`, `fix:`, `Merge origin/main`, conventional-commit prefixes

### Examples

```
[2026.09.02] - Remove playground files used for testing
[2026.09.01] - Convert Stitch design to JSX and apply to front screens
[2026.09.01] - Implement login API and update documentation
```

## When Committing

- Run `git commit` only when the user **explicitly** asks
- Use today's date unless the user specifies another
- Before commit: `git status` and `git diff`

## pull

- Before work: `git pull origin main` (see `docs/00-overview.md`)
- Prefer **fast-forward**
- If local and remote diverged, confirm with the user before rebase/cleanup
