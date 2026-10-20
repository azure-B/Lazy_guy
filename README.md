# Lazy Guy — for people with no coding background

This project lets you build a website by **talking to an AI**.  
Works with **Cursor**, **Codex**, **Claude Code**, or **Antigravity**.  
You do **not** need to know programming, React, Node.js, or “how AI works”.

**Short version:** open [`QUICKSTART.md`](QUICKSTART.md) and follow it.  
**This README:** same ideas, explained more slowly (which app to install, what `@` means, what to paste).

**Example made with Lazy Guy:** [azure-B/BU_Team](https://github.com/azure-B/BU_Team) / [site](https://bu-team.netlify.app/)

Questions? **benefit5758@naver.com**

---

### Start here — pick your app

| I use… | This file (full steps) | Short checklist |
|--------|------------------------|-----------------|
| **Cursor** | [→ Cursor setup](#app-cursor) | [QUICKSTART → Cursor](QUICKSTART.md#app-cursor) |
| **Codex** | [→ Codex setup](#app-codex) | [QUICKSTART → Codex](QUICKSTART.md#app-codex) |
| **Claude Code** | [→ Claude Code setup](#app-claude) | [QUICKSTART → Claude Code](QUICKSTART.md#app-claude) |
| **Antigravity** | [→ Antigravity setup](#app-antigravity) | [QUICKSTART → Antigravity](QUICKSTART.md#app-antigravity) |

You need **one** app only — not all four.

---

## Table of contents

**Install (by app)**

- [1. What you need on your computer](#1-what-you-need-on-your-computer)
  - [Cursor](#app-cursor)
  - [Codex](#app-codex)
  - [Claude Code](#app-claude)
  - [Antigravity](#app-antigravity)
  - [After any app is open](#after-any-app-is-open)

**Then use the same workflow**

1. [What is “Chat” and what is `@`?](#2-what-is-chat-and-what-is-)
2. [First day — connect tools (MCP)](#3-first-day--connect-tools-mcp)
3. [Every day — pick your job and talk to AI](#4-every-day--pick-your-job-and-talk-to-ai)
4. [Ready-made messages (copy and paste)](#5-ready-made-messages-copy-and-paste)
5. [If something breaks](#6-if-something-breaks)
6. [See the page in the browser](#7-see-the-page-in-the-browser)
7. [Words you may see (simple meanings)](#8-words-you-may-see-simple-meanings)
8. [Extra / advanced links](#9-extra--advanced-links)

---

## 1. What you need on your computer

You only need **one** AI coding app.  
Same project folder. Same prompt files under `.AI/prompts/`.  
Only the **app** and **how you attach a file** change a little.

Jump: [Cursor](#app-cursor) · [Codex](#app-codex) · [Claude Code](#app-claude) · [Antigravity](#app-antigravity)

---

<a id="app-cursor"></a>

### Cursor

**Also:** [QUICKSTART → Cursor](QUICKSTART.md#app-cursor)

1. Install [Cursor](https://cursor.com/).  
2. Open Cursor → **File → Open Folder…** → choose this project folder (`lazy_guy`).  
3. Open **Chat** (or Agent chat).  
4. In the chat box, type `@` and pick a file like `.AI/prompts/A-mcp.md`.  
5. Type your request under it → Send.

Cursor already reads [`AGENTS.md`](AGENTS.md) and `.cursor/rules/` for you.

**Next:** [§3 First day MCP](#3-first-day--connect-tools-mcp) · [other apps](#1-what-you-need-on-your-computer)

---

<a id="app-codex"></a>

### Codex

**Also:** [QUICKSTART → Codex](QUICKSTART.md#app-codex)

1. Install / open **Codex** (OpenAI Codex app or the Codex workflow you already use).  
2. Open **this same project folder** as the workspace.  
3. Make sure [`AGENTS.md`](AGENTS.md) is in the project root (it already is — Codex reads it automatically).  
4. Start a chat / agent for this repo.  
5. Attach or mention a prompt file, for example:
   - Prefer: `@.AI/prompts/B-front.md` if your Codex UI supports `@`
   - Or type clearly:  
     `Read .AI/prompts/B-front.md and follow it. I am a beginner.`
6. Then write what you want in simple words → Send.

**Tip:** If `@` does not work in your Codex UI, always write  
`Read .AI/prompts/….md and follow it` at the top of your message.

**Next:** [§3 First day MCP](#3-first-day--connect-tools-mcp) · [other apps](#1-what-you-need-on-your-computer)

---

<a id="app-claude"></a>

### Claude Code

**Also:** [QUICKSTART → Claude Code](QUICKSTART.md#app-claude)

1. Install **Claude Code** ([Anthropic Claude Code](https://docs.anthropic.com/en/docs/claude-code) / Claude in the terminal or IDE you use).  
2. Open a terminal **inside this project folder** (`lazy_guy`), or open the folder in your editor and start Claude Code there.  
3. Claude Code auto-reads [`CLAUDE.md`](CLAUDE.md) in the project root  
   (same content as `AGENTS.md` — keep them identical).  
4. Start Claude Code chat.  
5. Tell it to use a prompt file, for example:

```text
Read .AI/prompts/A-mcp.md and follow it. I am a beginner.
```

Or, if your UI supports file attach / `@`:

```text
@.AI/prompts/B-front.md
Build this page. I am a beginner. Follow the prompt.
```

6. Send.

**Tip:** Optional helper note: [`.claude/README.md`](.claude/README.md).  
You do **not** need Cursor installed if you only use Claude Code.

**Next:** [§3 First day MCP](#3-first-day--connect-tools-mcp) · [other apps](#1-what-you-need-on-your-computer)

---

<a id="app-antigravity"></a>

### Antigravity

**Also:** [QUICKSTART → Antigravity](QUICKSTART.md#app-antigravity)

1. Open **Antigravity**.  
2. Open / link **this project folder**.  
3. In Rules / Instructions, point to:
   - [`AGENTS.md`](AGENTS.md)
   - and/or the [`.AI/docs/`](.AI/docs/) folder
4. Start a chat / agent for the project.  
5. Attach a prompt file if the UI allows `@`, **or** write:

```text
Read .AI/prompts/C-back.md and follow it. I am a beginner.
```

6. Send your request in simple words.

**Tip:** If Antigravity asks for “project instructions”, paste:  
`Follow AGENTS.md. For each task, read the matching file under .AI/prompts/ (A–H).`

**Next:** [§3 First day MCP](#3-first-day--connect-tools-mcp) · [other apps](#1-what-you-need-on-your-computer)

---

<a id="after-any-app-is-open"></a>

### After any app is open

You are ready when:

1. This folder is open in that app.  
2. You can see a chat box.  
3. You can either `@` a file **or** type `Read .AI/prompts/….md and follow it`.

You do **not** need all four apps — **one is enough**.  
You do **not** need to open a terminal yourself for normal work — the AI can run commands for you.

---

## 2. What is “Chat” and what is `@`?

### Chat

Chat = the place you **talk to the AI**.  
You write normal sentences. The AI edits files and runs tools for you.

### `@` (very important)

`@` means: **“AI, please read this file too.”**

Works best in **Cursor**.  
In **Codex / Claude Code / Antigravity**, if there is no `@` button, use this instead:

```text
Read .AI/prompts/B-front.md and follow it.
```

(Same idea — just typed as words.)

#### How to use `@` in Cursor (click by click)

1. Click inside the Chat input box.  
2. Type the `@` key on your keyboard.  
3. A list of files appears.  
4. Start typing the name, for example: `A-mcp` or `B-front`.  
5. Click the file you want (example: `.AI/prompts/B-front.md`).  
6. You will see a chip/tag like `@.AI/prompts/B-front.md`.  
7. Under that, type your request in easy English.  
8. Press **Send** / Enter.

#### Golden rule (all apps)

For normal work, use **one** prompt file from `.AI/prompts/`.  
That prompt already tells the AI which other rules to open.  
You usually do **not** need to attach many rule files yourself.

| Situation | File to use (`@` or “Read … and follow it”) |
|-----------|-----------------------------------------------|
| First day setup | `.AI/prompts/A-mcp.md` |
| Make a screen | `.AI/prompts/B-front.md` (+ optional HTML) |
| Make a server API | `.AI/prompts/C-back.md` |
| Change database | `.AI/prompts/D-db.md` |
| Python script | `.AI/prompts/E-python.md` |
| Screen + API together | `.AI/prompts/F-fullstack.md` |
| Error / red message | `.AI/prompts/G-fix.md` |
| Show the page now | `.AI/prompts/H-preview.md` |

---

## 3. First day — connect tools (MCP)

Do this **once** on each computer.  
MCP = letting the AI use GitHub / Supabase / Netlify / Render helpers.  
If you skip this, some “Back” work is harder, but Front can still start.

### What you do

1. Open Chat in your app (Cursor / Codex / Claude Code / Antigravity).  
2. Attach the prompt — either `@` or “Read …”:

   **`.AI/prompts/A-mcp.md`**

3. Paste this message and send:

```text
Help me finish MCP setup. I am a beginner. Follow the prompt file.
```

4. The AI will tell you, in easy words, to:
   - copy `MCPkeys.json.example` → make `MCPkeys.json`
   - paste your secret keys into that file
   - run: `node scripts/register-mcp.mjs`
5. After success, `MCPkeys.json` is **deleted on purpose** (so secrets are not left in the folder). That is good.

### Where to get keys (if the AI asks)

- GitHub: https://github.com/settings/tokens  
- Supabase: https://supabase.com/dashboard  
- Netlify: https://app.netlify.com/user/applications#personal-access-tokens  
- Render: https://dashboard.render.com/u/settings#api-keys  

More detail for helpers: [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md)

**Never** upload or commit a filled `MCPkeys.json` to the internet.

---

## 4. Every day — pick your job and talk to AI

### Pick your position

| I am… | I care about… | Use this file |
|-------|----------------|---------------|
| **Front** | Buttons, screens, look & feel | `.AI/prompts/B-front.md` |
| **Back** | Invisible server / “API” / data | `.AI/prompts/C-back.md` |
| **Python** | Scripts / cleaning data files | `.AI/prompts/E-python.md` |
| **Both** | One feature = screen + server | `.AI/prompts/F-fullstack.md` |

### Everyday flow (repeat)

```
1. Open Chat (any of the four apps)
2. @ one prompt file  — or type: Read .AI/prompts/….md and follow it
3. (Front) also attach your HTML under front/publish/ if you have it
4. Write what you want in simple words
5. Send
6. Wait — AI creates the “spec”, writes code, updates docs
7. If you want to see the page → use §7
8. If it breaks → use §6
```

You do **not** write a long planning document. The AI creates `.AI/md/specs/...` for you.

### Optional: design in Stitch first (Front)

1. Design the screen in **Stitch**.  
2. Open **View code**.  
3. Save the HTML into the folder `front/publish/`  
   Example name: `front/publish/home.html`  
4. Then use the Front message in §5.

---

## 5. Ready-made messages (copy and paste)

After you attach the prompt file (`@` or `Read … and follow it`), paste one of these boxes.  
Change only the parts in `[ brackets ]`.

### Front — make a page

First → `.AI/prompts/B-front.md`  
Also → `front/publish/[your-page].html` if you have it.

```text
Build this page. I am a beginner. Follow the prompt.
HTML: front/publish/[your-page].html
What the page should do: [one short sentence]
```

### Back — make an API

First → `.AI/prompts/C-back.md`

```text
I need these APIs. I am a beginner. Follow the prompt.
- [example: GET /api/notices — list]
- [example: GET /api/notices/:id — one item]
```

### Back — change database (you allow SQL)

First → `.AI/prompts/D-db.md`

```text
I allow SQL write. Follow the prompt.
I need: [example: notices table for a public list]
```

### Python

First → `.AI/prompts/E-python.md`

```text
Make a script that [example: cleans JSON under python/api].
I am a beginner. Follow the prompt.
```

### Front + Back together

First → `.AI/prompts/F-fullstack.md`  
Optional → your HTML file.

```text
I want screen + API together. I am a beginner. Follow the prompt.
Feature: [example: public notices list]
HTML if any: front/publish/[page].html
DB write: [ask me first / yes / no]
```

---

## 6. If something breaks

You do **not** need to understand red error text.

1. In Chat, attach → **`.AI/prompts/G-fix.md`**  
2. Paste this (put your error in the middle):

```text
Fix everything in one pass. I am a beginner.

Error / what I see:
[PASTE THE FULL ERROR HERE]

What I was trying to do:
[one short sentence]

Follow G-fix.md. Explain in easy words.
```

3. Send.  
4. The AI should fix things in **one go**, then tell you how to check.  
5. If it still fails, the AI must give you **another ready paste box** — you should not invent a new prompt yourself.

Rules for the AI: [`.AI/docs/11-error-fix.md`](.AI/docs/11-error-fix.md)

---

## 7. See the page in the browser

You do **not** need to know how to “run React” or “run Node” yourself.

1. In Chat, attach → **`.AI/prompts/H-preview.md`**  
2. Paste:

```text
Show me the result in the browser. I am a beginner.
Page route: [/ or /health]
I need API too: [yes / no]
Follow the prompt. Do not start servers twice if they are already running.
```

3. The AI runs a helper (`node scripts/dev-up.mjs`) that:
   - starts the screen app if needed (usually http://localhost:5173)
   - starts the server if needed (usually http://localhost:3001)
   - **skips** starting if it is already running (no duplicates)
4. Open the link the AI gives you in your browser (Chrome, Edge, etc.).

After a page change, you can send the same H-preview request again — the AI should just show the page, not start two copies.

Rules: [`.AI/docs/12-run-preview.md`](.AI/docs/12-run-preview.md)

---

## 8. Words you may see (simple meanings)

| Word | Simple meaning |
|------|----------------|
| AI / Chat | The helper you type to |
| `@` | “Please read this file” (or type `Read … and follow it`) |
| Prompt file | A ready instruction sheet for the AI (in `.AI/prompts/`) |
| Front | The visible website (buttons, pages) |
| Back | The invisible server that stores/sends data |
| API | A doorway the screen uses to ask the server for data |
| Spec | A short plan file — **AI writes it for you** |
| MCP | Extra tools (GitHub, Supabase, …) for the AI |
| Localhost | Your own computer’s website address (like http://localhost:5173) |
| Folder.md | A map of project folders — AI should keep it updated |

---

## 9. Extra / advanced links

Use these only when you need more depth. Beginners can ignore most of this list.

| Link | What it is |
|------|------------|
| [`QUICKSTART.md`](QUICKSTART.md) | Shorter checklist version of this guide |
| [`.AI/prompts/`](.AI/prompts/) | All one-file prompts (A–H) |
| [`.AI/docs/`](.AI/docs/) | Full rules for the AI |
| [`Folder.md`](Folder.md) | Live folder map |
| [`AGENTS.md`](AGENTS.md) | What every AI must follow (Cursor / Codex / Antigravity) |
| [`CLAUDE.md`](CLAUDE.md) | Same rules for Claude Code |
| [`env_example`](env_example) | Later: website hosting addresses |
| [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md) | MCP details |
| [`.AI/docs/11-error-fix.md`](.AI/docs/11-error-fix.md) | Error fix rules |
| [`.AI/docs/12-run-preview.md`](.AI/docs/12-run-preview.md) | How servers are started |

Same workflow in all four apps. Cursor is usually easiest for beginners because `@` is built-in.

---

### Daily reminder

```text
1) @ one prompt  (or: Read .AI/prompts/….md and follow it)
2) say what you want
3) send
4) broken? → G-fix
5) want to see it? → H-preview
```

That is the whole workflow.
