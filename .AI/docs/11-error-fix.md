# 11 — Errors: Fix in One Pass + Give the User a Prompt

When something fails (build error, red screen, API 500, MCP fail, wrong UI), the agent must **fix it thoroughly in one response** when possible — and always **teach the human the exact next prompt** so even AI beginners can continue.

Related: `QUICKSTART.md` · `.AI/prompts/G-fix.md`

## Goals

| Goal | Behavior |
|------|----------|
| One-pass fix | Find root cause → change all needed files → re-check docs (jobs/API/Folder/ERD) |
| Beginner-safe | End with a **copy-paste** message the user can send if the problem remains |
| No endless ping-pong | Do not ask the user to “try random things” without a ready prompt |

## When an error appears

1. Read the error text (and logs / terminal / browser message if provided).
2. Open the relevant area docs (`02` / `03` / `05` / `09` / `10`) and the broken files.
3. Fix **all** related places in the same turn (code + docs).
4. Explain in **short easy English**: what broke → what you changed → how to verify.
5. **Always** append a block titled **If it still fails, paste this:** containing a ready prompt for `@.AI/prompts/G-fix.md`.

## Required closing template (every error / fix reply)

End your message like this:

```text
---
If it still fails, do this:

1. Attach: @.AI/prompts/G-fix.md
2. Paste the box below (keep your error text):

--- paste below ---
@.AI/prompts/G-fix.md

Fix everything in one pass. I am a beginner.

Error / what I see:
[PASTE THE FULL ERROR HERE]

What I was trying to do:
[one short sentence]

Follow G-fix.md. Auto-create/update the spec if needed. Update jobs/API/Folder.md. Explain in easy words.
--- paste above ---
```

Replace the bracket lines with whatever the user already told you when you can.

## One-pass fix checklist

- [ ] Root cause identified (not only the last symptom)
- [ ] All related files updated
- [ ] Spec / jobs / API / Folder.md / ERD updated if needed
- [ ] Security rules still held (`.AI/docs/02-back.md`)
- [ ] User got a verification step (1–3 clicks or commands)
- [ ] User got the **G-fix** copy-paste prompt for a retry

## Anti-patterns

- Saying “please debug yourself” without a G-fix prompt
- Fixing one file while leaving an obvious second break
- Asking for screenshots only, with no paste-ready next message
- Ignoring `Folder.md` / jobs after a structural fix
