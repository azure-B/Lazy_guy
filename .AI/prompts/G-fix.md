# Prompt G — Fix errors in one pass

## Human instruction (edit brackets, then send)

Fix everything related to this error in **one pass**. I am a beginner.

Error / what I see:

```text
[PASTE THE FULL ERROR OR RED MESSAGE HERE]
```

What I was trying to do:

- [one short sentence]

## AI: read these files first (mandatory)

- `AGENTS.md`
- `QUICKSTART.md`
- `.AI/docs/11-error-fix.md`
- `.AI/docs/07-ai-md-workflow.md`
- `.AI/docs/06-uniformity.md`
- Area docs as needed: `.AI/docs/02-back.md` / `03-front.md` / `05-netlify-supabase.md` / `09-mcp-setup.md` / `10-db-erd-supabase.md`
- The files named in the error stack (open them)
- `Folder.md`

## AI: do this (in order)

1. Find the **root cause** (not only the last line of the error).
2. Fix **all** related code in this same reply.
3. Auto-create/update `.AI/md/specs/<feature>.md` if the fix changes feature behavior.
4. Update `.AI/md/jobs/`, `.AI/md/API/README.md`, `.AI/md/db/erd.md`, and `Folder.md` when needed.
5. Tell me how to verify in 1–3 easy steps.
6. End with another **If it still fails, paste this:** block (per `.AI/docs/11-error-fix.md`) so I can retry without guessing.

## Rules

- Prefer one complete fix over many tiny guesses.
- Easy English. Short sentences.
- Never ask me to invent a prompt — always give me the next paste box.
- Keep security rules (no open CORS, no string-built SQL, etc.).
