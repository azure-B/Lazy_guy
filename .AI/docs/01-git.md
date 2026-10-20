# 01 — Git Rules

**Authoritative** for commits **and** pre-work remote synchronization.  
Other docs summarize this file; do not invent a second sync policy.

## Why sync before implementation

GitHub MCP (or other remote edits) can change the **remote** repository while the **local** checkout stays stale.  
Safe sync reduces editing on an outdated base. It does **not** guarantee zero conflicts later, and it does **not** mean MCP writes appear locally by themselves.

---

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

## When Committing / Pushing (beginner-friendly)

After a coherent task (or meaningful checkpoint) is finished and reviewed:

1. Identify the repository, current branch, remote, and intended upload branch.
2. List only the files that belong to **this task** (do not blanket-stage unrelated user changes).
3. Prepare a concise English commit message: `[YYYY.MM.DD] - work summary`.
4. Check for existing **unpushed** commits; if any exist, say that an upload would include them and get approval for that scope.
5. Offer a short choice (do not ask the user to type Git commands):

   **Save and upload these changes to GitHub?**  
   1. Save and upload  
   2. Save locally only  
   3. Not now  

   - **Save** = create a local Git commit  
   - **Upload** = push commits to the reviewed remote/branch  

6. Act **only** within the selected scope. Ambiguous answers → ask a short clarification.

Do **not** interrupt every tiny file edit with this question.  
**Synchronization does not authorize commit or push.**  
Never force-push, rewrite history, auto-stash/discard, or push to an unexpected branch.

Use today's date in the message unless the user specifies another.  
Before commit: `git status` and `git diff` on the staged set.

---

## Pre-work synchronization (state-aware)

Replace unconditional `git pull origin main` with the steps below.

### When to run

| Task type | Sync? |
|-----------|--------|
| Implementation / code or tracked-doc edits | Yes — follow this section first |
| Preview-only / read-only help / docs inspection | No — do not block on sync; do not modify the tree just to open the app |
| User said skip sync / work offline | Skip network sync; say remote freshness was **not** checked |

### A. Inspect locally (read-only first)

Determine:

1. Is this folder a Git working tree? (`git rev-parse --is-inside-work-tree`)
2. Current branch (or detached HEAD)
3. Staged / unstaged / untracked changes (`git status --porcelain`)
4. Configured **upstream** for the current branch (if any)
5. Remotes (`git remote -v`) — for context only

**ZIP / no Git:** skip sync entirely. Continue local preview or local-only work.  
Do **not** run `git init` or add a remote automatically.

Do **not** assume the branch is always `main` or the remote is always `origin`.

### B. Protect local changes

If porcelain status is **not empty** (staged, unstaged, or untracked):

- Do **not** automatically pull, merge, rebase, stash, reset, clean, or commit
- Do **not** discard or overwrite user changes
- You may `git fetch` for **metadata only** when useful — fetching is **not** updating the working tree
- Explain the dirty state briefly; if sync is needed for the task, ask how to proceed
- If the user allows continuing without sync: continue, preserve changes, note the limitation

Never ask the user to paste secrets or private file contents.

### C. Clean tree + normal branch + configured upstream

1. `git fetch` the upstream’s remote (failure → see **Failures** below; do not claim success)
2. Compare `HEAD` to `@{upstream}`:
   - **Equal** → continue (no pull)
   - **ahead only** → continue; do **not** auto-push
   - **behind only** → update with **fast-forward only**, e.g. `git pull --ff-only` against the configured upstream (or equivalent). Prefer the inspected upstream, not a hard-coded `origin/main`
   - **diverged** → **stop** sync; ask the user. Do **not** auto-merge or rebase

Do not create merge commits as a side effect of pre-work sync.

### D. Ambiguous Git state

If upstream is missing, HEAD is detached, or the intended branch/remote is unclear:

- Explain the situation
- Ask a specific question when sync is required for implementation
- Do **not** guess a branch, set upstream, or switch branches automatically

### E. Failures

If fetch/ff-only fails (auth, network, non-ff):

- Stop further automatic sync
- Report the current state
- Do not blindly retry or run destructive recovery
- Say whether the **local** task can still proceed (only with user awareness)

### Forbidden during sync

- `git reset --hard`
- `git clean -fd` / `git clean -fdx`
- Automatic stash / rebase / force-push
- Discarding user changes
- Automatic conflict resolution

---

## GitHub MCP writes ↔ local work

Remote MCP file edits **do not** update the local working tree by themselves.

Guidance:

1. Prefer **one write location at a time** for the same feature (remote MCP **or** local agent — not both in parallel on the same files).
2. Before switching from remote writes to local implementation: inspect local state and run this safe sync.
3. Before remote MCP writes: confirm the intended repository and branch; resolve approvals per MCP/setup rules.
4. If local work already exists: do not overwrite it or assume a pull will reconcile it safely.
5. Sync **reduces** stale-base risk and surfaces divergence early; it cannot prevent every future conflict.
6. Sync ≠ permission to commit, push, or perform remote MCP writes.

Do not perform remote MCP writes, commits, or pushes unless the user explicitly asks and applicable rules allow it.
