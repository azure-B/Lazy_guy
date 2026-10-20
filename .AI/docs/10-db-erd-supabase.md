# 10 — DB / ERD (Adaptive) + Supabase SQL Testing

Back agents may **reshape the ERD** when it improves correctness, performance, or clarity — then prove it with **direct SQL** on Supabase (MCP), after the user grants permission.

Related: `.AI/docs/02-back.md` (security) · `.AI/docs/05-netlify-supabase.md` (hosts) · `.AI/docs/09-mcp-setup.md` (MCP keys)

## Goals

| Goal | How |
|------|-----|
| Best schema for the feature | AI proposes ERD changes; update living ERD + spec **Data** |
| Test before coding Express | Run SQL via Supabase MCP (select / migrate / RLS checks) |
| Safe production habits | User permission for write SQL; prefer `read_only` until allowed |

## Living ERD (SSOT)

| File | Role |
|------|------|
| `.AI/md/db/erd.md` | Current ERD (tables, keys, relations, RLS notes) |
| `.AI/md/specs/<feature>.md` → **Data** | Feature-scoped delta (what this task needs) |
| `back/supabase/migrations/` | Optional SQL migration files when the project adds them |

**Agents must keep `.AI/md/db/erd.md` in sync** whenever the schema changes (same task as the SQL/migration).

### Adaptive ERD rules (AI may adjust)

When implementing or refining data:

1. Start from the spec **Data** section + current `.AI/md/db/erd.md`.
2. If a better model exists (normalize/denormalize, join tables, indexes, enums, soft-delete, audit columns), **propose and apply** the improved ERD.
3. Document *why* in `.AI/md/jobs/back/` (1–3 lines).
4. Update:
   - `.AI/md/db/erd.md`
   - Spec **Data** (if the feature contract changed)
   - `back/models/` to match
   - `.AI/md/API/README.md` if response shapes change
5. Prefer clarity + integrity (FKs, `NOT NULL`, unique constraints, sensible indexes) over cleverness.

Do **not** invent tables that have no path from a user goal or approved spec — but you **may** split/merge/rename tables when it clearly improves the design.

## Supabase MCP — SQL testing (with permission)

### Default

- Register Supabase via `MCPkeys.json` (see `.AI/docs/09-mcp-setup.md`).
- Prefer `supabase.read_only: true` until the user allows writes.

### When the user allows SQL / schema work

Ask (or confirm) explicitly, e.g.:

> “May I use Supabase MCP to run SQL (read/write) and adjust schema/RLS for this feature?”

After **yes**:

1. Set MCP for write-capable use if needed (`read_only: false` / re-register `MCPkeys.json`, or use tools that apply migrations).
2. Use Supabase MCP to:
   - Inspect existing tables
   - Draft and run **DDL** (CREATE/ALTER) and **DML** test queries
   - Verify RLS policies
   - Run sample SELECTs that mirror future `models/` queries
3. Mirror successful SQL into:
   - `.AI/md/db/erd.md`
   - optional `back/supabase/migrations/YYYYMMDD_description.sql`
4. Only then wire Express `models/` to the tested shape.

### Permission matrix

| Action | Needs user permission? |
|--------|------------------------|
| Read schema / SELECT (read_only) | Preferred always; still announce in jobs |
| CREATE / ALTER / DROP / INSERT test data | **Yes** |
| Change RLS / Auth-related policies | **Yes** |
| Touch production project without a staging note | **Yes** + warn |

### Safety (never skip)

- No string-concatenated SQL with user input in Express (`.AI/docs/02-back.md`).
- Prefer parameterized / query-builder access in `models/`.
- Do not put `SUPABASE_SERVICE_ROLE_KEY` in front or Netlify.
- Destructive SQL (DROP, TRUNCATE): confirm twice if data may be real.
- After tests, remove throwaway seed rows unless the user wants them kept.

## Recommended Back context (DB work)

| Priority | Path |
|----------|------|
| 1 | `.AI/docs/10-db-erd-supabase.md` (this file) |
| 2 | `.AI/md/db/erd.md` |
| 3 | `.AI/md/specs/<feature>.md` (Data) |
| 4 | `.AI/docs/02-back.md` |
| 5 | `.AI/docs/09-mcp-setup.md` |
| 6 | `back/models/` |

## Prompt patterns

**Adaptive ERD**

> Review `.AI/md/db/erd.md` and the spec Data section. Improve the ERD if needed for best integrity/performance, update the ERD doc, then implement models.

**SQL testing with permission**

> You have permission to use Supabase MCP SQL (read/write) for this feature. Adjust schema, test queries, update `.AI/md/db/erd.md`, then wire `back/models/`.

## Checklist (every DB change)

- [ ] User permission recorded if write SQL was used
- [ ] `.AI/md/db/erd.md` updated
- [ ] Spec **Data** updated if contract changed
- [ ] SQL tested via Supabase MCP (or equivalent)
- [ ] `back/models/` matches ERD
- [ ] `.AI/md/jobs/back/` notes schema + MCP usage
- [ ] API docs updated if responses changed
