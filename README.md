# Lazy Guy — Multi-IDE Agent Guide

Markdown-first **React + Express** project.  
Same rules on **Cursor**, **Codex**, **Claude Code**, and **Antigravity**.

**Example built with Lazy Guy:** [azure-B/BU_Team](https://github.com/azure-B/BU_Team) — a team web project (React + Express) developed using this guide.

Agent rules: [`.AI/docs/`](.AI/docs/) · Specs/API/jobs: [`.AI/md/`](.AI/md/) · Live tree: [`Folder.md`](Folder.md)

if you get some question? benefit5758@naver.com

---

## Table of contents (project order)

1. [MCP registration (`MCPkeys.json`)](#1-mcp-registration-mcpkeysjson) — do this first
2. [IDE install](#2-ide-install)
3. [Env wiring](#3-env-wiring)
4. [How to Dev? (dev-only; auto-spec)](#4-how-to-dev-dev-only-auto-spec)
5. [Roles — Front / Back / Python](#5-roles--front--back--python)
6. [Copy-paste AI contexts (beginner)](#6-copy-paste-ai-contexts-beginner) — **start here to talk to AI**
7. [Uniformity & Folder.md](#7-uniformity--foldermd)
8. [DB / ERD + Supabase SQL](#8-db--erd--supabase-sql)
9. [Rules index](#9-rules-index)

---

## 1. MCP registration (`MCPkeys.json`)

**Flow:** paste tokens into `MCPkeys.json` → run one script → MCP connects → `MCPkeys.json` is deleted.

```
MCPkeys.json.example  →  MCPkeys.json (paste tokens)
           ↓
  node scripts/register-mcp.mjs
           ↓
  .cursor/mcp.json  +  delete MCPkeys.json
```

Detail: [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md)

### Token sources (hyperlinks)

| Service | MCP docs | Where to get the key |
|---------|----------|----------------------|
| **GitHub** | [GitHub MCP (Cursor)](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-cursor.md) | [Personal access tokens](https://github.com/settings/tokens) |
| **Supabase** | [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp) | [Project Settings](https://supabase.com/dashboard/project/_/settings/general) → project ref |
| **Netlify** | [Netlify MCP](https://github.com/netlify/netlify-mcp) | [PAT](https://app.netlify.com/user/applications#personal-access-tokens) |
| **Render** | [Render MCP](https://render.com/docs/mcp-server) | [API Keys](https://dashboard.render.com/u/settings#api-keys) |

### Steps

1. `cp MCPkeys.json.example MCPkeys.json` — [`MCPkeys.json.example`](MCPkeys.json.example)
2. Paste real values (especially `github.token`)
3. `node scripts/register-mcp.mjs` — [`scripts/register-mcp.mjs`](scripts/register-mcp.mjs)
4. Confirm `.cursor/mcp.json` updated and **`MCPkeys.json` deleted**
5. Reload MCP / restart Cursor → Settings → Tools & MCP

Never commit `MCPkeys.json` (see [`.gitignore`](.gitignore)).

---

## 2. IDE install

Keep [`AGENTS.md`](AGENTS.md) ≡ [`CLAUDE.md`](CLAUDE.md), [`.AI/docs/`](.AI/docs/), [`Folder.md`](Folder.md).

| IDE | Entry |
|-----|--------|
| Cursor | `AGENTS.md` + [`.cursor/rules/`](.cursor/rules/) |
| Codex | `AGENTS.md` |
| Claude Code | `CLAUDE.md` |
| Antigravity | `AGENTS.md` + `.AI/docs/` |

---

## 3. Env wiring

| File | Use |
|------|-----|
| [`env_example`](env_example) | Render ↔ Netlify ↔ Supabase URL map |
| [`back/.env.example`](back/.env.example) → `back/.env` | Render / Express |
| [`front/.env.example`](front/.env.example) → `front/.env` | Netlify / Vite |

Rules: [`.AI/docs/05-netlify-supabase.md`](.AI/docs/05-netlify-supabase.md)

---

## 4. How to Dev? (dev-only; auto-spec)

**You do not write a spec.**  
You only ask for the feature.  
The AI auto-creates `.AI/md/specs/<feature>.md`, then codes.

```
You ask  →  AI auto-spec  →  AI codes  →  AI updates docs
```

Optional: Stitch design → save HTML in [`front/publish/`](front/publish/) first.

Detail: [`.AI/docs/07-ai-md-workflow.md`](.AI/docs/07-ai-md-workflow.md)

---

## 5. Roles — Front / Back / Python

Full: [`.AI/docs/08-roles.md`](.AI/docs/08-roles.md)

| Role | What you do | What AI does first |
|------|-------------|--------------------|
| Front | Give HTML or describe the screen | Auto-spec → React |
| Back | Describe the API / data | Auto-spec → Express MVC |
| Python | Describe the script job | Auto-spec → `python/` only |

---

## 6. Copy-paste AI contexts (beginner)

How to use:

1. Open Cursor (or your AI IDE) chat.  
2. **Attach** ( `@` ) the files listed under **Attach these**.  
3. **Copy the whole box** under **Paste this**.  
4. Change only the parts in `[ brackets ]`.  
5. Send.

You do not need to understand every file.  
Just attach → paste → send.

Spacing below is intentional: one stage = one job.

---

### Stage A — First day: connect MCP

**When:** first time on this project.

**Attach these:**

- `@AGENTS.md`
- `@.AI/docs/09-mcp-setup.md`
- `@MCPkeys.json.example`
- `@scripts/register-mcp.mjs`
- `@README.md`

**Paste this:**

```text
나는 개발을 잘 모릅니다.
Lazy Guy 규칙대로 해주세요.

지금 할 일:
1. MCPkeys.json.example 을 보고 MCPkeys.json 만드는 방법을 아주 쉽게 알려주세요.
2. GitHub / Supabase / Netlify / Render 토큰을 어디에 붙이는지 한 줄씩 알려주세요.
3. node scripts/register-mcp.mjs 실행 후 MCPkeys.json 이 삭제되는지 확인해 주세요.
4. Cursor 에서 MCP 를 다시 켜는 방법까지 짧게 알려주세요.

스펙 문서는 제가 안 씁니다. 필요하면 AI가 자동으로 만들어 주세요.
설명은 초등학생도 이해하게, 쉬운 말로 해주세요.
```

---

### Stage B — Front: Stitch HTML → React page

**When:** screen design is done and HTML is in `front/publish/`.

**Attach these:**

- `@AGENTS.md`
- `@.AI/docs/03-front.md`
- `@.AI/docs/07-ai-md-workflow.md`
- `@.AI/docs/08-roles.md`
- `@front/publish/[your-page].html`
- `@front/src/services/api.js`
- `@front/src/App.jsx`
- `@Folder.md`

**Paste this:**

```text
나는 Front 만 원합니다. 개발만 요청합니다. 스펙은 직접 안 씁니다.

할 일:
1. 스펙 파일을 .AI/md/specs/ 아래에 자동으로 만들어 주세요.
2. front/publish/[your-page].html 을 보고 React 페이지로 바꿔 주세요.
3. 여러 페이지에서 또 쓸 UI 는 front/src/components/common/ 으로 빼 주세요.
4. 헤더/푸터 같은 공통 뼈대는 layout 을 쓰세요.
5. 서버 호출은 반드시 front/src/services/api.js 만 사용하세요.
6. 끝나면 .AI/md/jobs/front/ 에 기록하고, 폴더가 바뀌면 Folder.md 도 고쳐 주세요.

규칙 파일과 첨부한 HTML 을 꼭 지키세요.
쉬운 말로 짧게 결과만 설명해 주세요.
```

---

### Stage C — Back: new API (MCP on)

**When:** you need a server API. MCP already connected (Stage A).

**Attach these:**

- `@AGENTS.md`
- `@.AI/docs/02-back.md`
- `@.AI/docs/05-netlify-supabase.md`
- `@.AI/docs/07-ai-md-workflow.md`
- `@.AI/docs/08-roles.md`
- `@.AI/docs/09-mcp-setup.md`
- `@.AI/docs/10-db-erd-supabase.md`
- `@.AI/md/db/erd.md`
- `@.AI/md/API/README.md`
- `@back/routes/`
- `@back/controller/`
- `@back/models/`
- `@back/middleware/security.js`
- `@Folder.md`

**Paste this:**

```text
나는 Back 만 원합니다. 개발만 요청합니다. 스펙은 직접 안 씁니다.

만들고 싶은 API:
- [예: 상품 목록 보기 GET /api/products ]
- [예: 상품 하나 보기 GET /api/products/:id ]

할 일:
1. .AI/md/specs/ 에 스펙을 자동으로 만들어 주세요.
2. routes → controller → models 순서만 사용하세요. 순서를 건너뛰지 마세요.
3. 보안 체크리스트를 지키세요 (CORS, 입력 검사, SQL 문자열 붙이기 금지).
4. 데이터가 필요하면 .AI/md/db/erd.md 를 보고, 더 좋은 ERD 가 있으면 고쳐 주세요.
5. GitHub / Supabase / Netlify / Render MCP 가 있으면 활용하세요.
6. .AI/md/API/README.md 와 .AI/md/jobs/back/ 를 업데이트하세요.
7. 폴더가 바뀌면 Folder.md 도 고쳐 주세요.

쉬운 말로 짧게 결과만 설명해 주세요.
```

---

### Stage D — DB / ERD + Supabase SQL test (permission)

**When:** tables need to change, and you allow SQL.

**Attach these:**

- `@AGENTS.md`
- `@.AI/docs/10-db-erd-supabase.md`
- `@.AI/docs/02-back.md`
- `@.AI/docs/09-mcp-setup.md`
- `@.AI/md/db/erd.md`
- `@.AI/md/API/README.md`
- `@back/models/`
- `@Folder.md`

**Paste this:**

```text
나는 DB 작업을 허용합니다.

허가:
- Supabase MCP 로 SQL 을 직접 실행해도 됩니다 (읽기 + 쓰기 + 테이블 변경).
- 더 좋은 ERD 로 바꿔도 됩니다.
- 테스트한 뒤 .AI/md/db/erd.md 를 꼭 최신으로 맞춰 주세요.

하고 싶은 데이터:
- [예: 사용자별 메모를 저장하고 목록으로 보고 싶습니다 ]

할 일:
1. 스펙을 자동으로 만들어 주세요.
2. ERD 를 검토하고 필요하면 개선하세요.
3. Supabase 에서 SQL 로 만들고 테스트하세요.
4. 그다음 back/models/ 에 연결하세요.
5. jobs / API / Folder.md 를 필요하면 업데이트하세요.

위험한 삭제(DROP 등)는 하기 전에 한 번 더 물어보세요.
쉬운 말로 짧게 설명해 주세요.
```

---

### Stage E — Python only

**When:** only scripts / data under `python/`.

**Attach these:**

- `@AGENTS.md`
- `@.AI/docs/00-overview.md`
- `@.AI/docs/07-ai-md-workflow.md`
- `@.AI/docs/08-roles.md`
- `@python/`
- `@Folder.md`

**Paste this:**

```text
나는 Python 만 원합니다. 개발만 요청합니다. 스펙은 직접 안 씁니다.

하고 싶은 일:
- [예: python/api 안의 json 을 정리하는 스크립트를 만들어 주세요 ]

할 일:
1. 스펙을 .AI/md/specs/ 에 자동으로 만들어 주세요.
2. python/ 폴더만 수정하세요.
3. front 나 back 은 건드리지 마세요. (제가 시키지 않는 한)
4. 폴더가 바뀌면 Folder.md 만 고쳐 주세요.

쉬운 말로 짧게 결과만 설명해 주세요.
```

---

### Stage F — Small full feature (Front + Back together)

**When:** one feature needs screen + API.

**Attach these:**

- `@AGENTS.md`
- `@.AI/docs/07-ai-md-workflow.md`
- `@.AI/docs/08-roles.md`
- `@.AI/docs/03-front.md`
- `@.AI/docs/02-back.md`
- `@.AI/docs/10-db-erd-supabase.md`
- `@.AI/md/db/erd.md`
- `@front/publish/[your-page].html`   ← if you have it
- `@front/src/services/api.js`
- `@back/routes/`
- `@back/controller/`
- `@back/models/`
- `@Folder.md`

**Paste this:**

```text
나는 화면과 API 를 같이 원합니다. 개발만 요청합니다. 스펙은 직접 안 씁니다.

원하는 기능:
- [예: 로그인 없이 보이는 공지사항 목록 화면 + 목록 API ]

할 일 순서 (이 순서를 지키세요):
1. 스펙 자동 생성
2. 필요하면 ERD 개선 (DB 쓰기가 필요하면 나에게 허가 한 줄 요청)
3. Back: routes → controller → models + 보안
4. Front: publish HTML 이 있으면 그걸로 React 변환, common/ 에 공통 UI
5. Front API 호출은 services/api.js 만
6. .AI/md/API , jobs/front , jobs/back , Folder.md 업데이트

한 번에 끝까지 해 주세요.
쉬운 말로 짧게 결과만 설명해 주세요.
```

---

### Cheat sheet — which stage?

| I want to… | Use |
|------------|-----|
| Connect GitHub / Supabase / Netlify / Render to AI | **Stage A** |
| Turn Stitch HTML into a page | **Stage B** |
| Make a new API | **Stage C** |
| Change database tables with SQL | **Stage D** |
| Change a Python script only | **Stage E** |
| Screen + API together | **Stage F** |

---

## 7. Uniformity & Folder.md

```
AGENTS.md ≡ CLAUDE.md → .AI/docs/
  → (auto) specs → code → API + jobs → Folder.md
```

- [`.AI/docs/06-uniformity.md`](.AI/docs/06-uniformity.md)
- Live tree: [`Folder.md`](Folder.md) — update whenever files move

---

## 8. DB / ERD + Supabase SQL

- Living ERD: [`.AI/md/db/erd.md`](.AI/md/db/erd.md)
- Rules: [`.AI/docs/10-db-erd-supabase.md`](.AI/docs/10-db-erd-supabase.md)
- Copy-paste: **[Stage D](#stage-d--db--erd--supabase-sql-test-permission)** above

---

## 9. Rules index

| Doc | Topic |
|-----|-------|
| [`.AI/docs/00-overview.md`](.AI/docs/00-overview.md) | Overview |
| [`.AI/docs/01-git.md`](.AI/docs/01-git.md) | Git |
| [`.AI/docs/02-back.md`](.AI/docs/02-back.md) | Express + security |
| [`.AI/docs/03-front.md`](.AI/docs/03-front.md) | React + Stitch |
| [`.AI/docs/04-md-documentation.md`](.AI/docs/04-md-documentation.md) | Specs / API / jobs |
| [`.AI/docs/05-netlify-supabase.md`](.AI/docs/05-netlify-supabase.md) | Hosts |
| [`.AI/docs/06-uniformity.md`](.AI/docs/06-uniformity.md) | Cross-IDE |
| [`.AI/docs/07-ai-md-workflow.md`](.AI/docs/07-ai-md-workflow.md) | Auto-spec + AI workflow |
| [`.AI/docs/08-roles.md`](.AI/docs/08-roles.md) | Roles |
| [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md) | MCPkeys → MCP |
| [`.AI/docs/10-db-erd-supabase.md`](.AI/docs/10-db-erd-supabase.md) | Adaptive ERD + SQL |
| [`.AI/md/db/erd.md`](.AI/md/db/erd.md) | Living ERD |
| [`Folder.md`](Folder.md) | Live tree |
