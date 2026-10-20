# 13 — AI coding app setup (Cursor / Codex / Claude Code / Antigravity)

Human hub: [`README.md`](../../README.md) · short path: [`QUICKSTART.md`](../../QUICKSTART.md)

You need **one** app only. Same project folder. Same prompts under `.AI/prompts/`.

Setup steps below are **guidance**. End-to-end behavior is not verified for every tool, OS, and version. Detailed check records (when needed): [`.AI/md/guides/verification-notes.md`](../md/guides/verification-notes.md).

---

## Cursor

1. Install [Cursor](https://cursor.com/).
2. **File → Open Folder…** → this project (`lazy_guy`).
3. Open **Chat** (or Agent chat).
4. Type `@` → choose a file under `.AI/prompts/` → write your request → Send.

Cursor reads `AGENTS.md` and `.cursor/rules/` automatically.

---

## Codex

1. Open this project folder in Codex.
2. Start a chat / agent (`AGENTS.md` is the shared entry).
3. Prefer `@.AI/prompts/….md` if `@` works.
4. Otherwise type: `Read .AI/prompts/….md and follow it. I am a beginner.`
5. Send your request in simple words.

---

## Claude Code

1. Open a terminal in this project folder, or open the folder and start Claude Code there.
2. Claude Code reads [`CLAUDE.md`](../../CLAUDE.md) (must stay identical to `AGENTS.md`).
3. Type: `Read .AI/prompts/….md and follow it. I am a beginner.`
4. Or use `@` / file attach if your UI supports it.

Helper note: [`.claude/README.md`](../../.claude/README.md).

---

## Antigravity

1. Open / link this project folder.
2. In Rules / Instructions, point to `AGENTS.md` and/or `.AI/docs/`.
3. Chat → `@.AI/prompts/….md` **or** `Read .AI/prompts/….md and follow it.`
4. Send your request.

If asked for project instructions, paste:  
`Follow AGENTS.md. For each task, read the matching file under .AI/prompts/ (A–H).`

---

## Attaching a prompt without `@`

```text
Read .AI/prompts/B-front.md and follow it. I am a beginner.
```

Same idea as `@` — typed as words.
