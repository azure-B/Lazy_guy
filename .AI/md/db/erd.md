# ERD — Living Schema (SSOT)

Update this file whenever tables, columns, keys, or RLS change.  
Rules: `.AI/docs/10-db-erd-supabase.md`

- Last updated: YYYY-MM-DD
- Supabase project ref: (fill when known)
- AI may adapt this ERD for better results; document reasons in `.AI/md/jobs/back/`

## Tables

### example_items (replace / extend)

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| id | uuid | PK, default `gen_random_uuid()` | |
| created_at | timestamptz | not null, default `now()` | |
| updated_at | timestamptz | not null, default `now()` | |
| owner_id | uuid | FK → auth.users(id) | if Auth-scoped |
| title | text | not null | |
| meta | jsonb | | optional |

## Relationships

```
auth.users 1──* example_items
```

## Indexes

- `example_items(owner_id)`
- `example_items(created_at desc)`

## RLS (notes)

| Table | Policy idea |
|-------|-------------|
| example_items | owner can select/insert/update/delete own rows |

## Pending AI adaptations

| Date | Change | Why |
|------|--------|-----|
| | | |

## Last SQL tests (optional log)

| Date | What was run | Result |
|------|--------------|--------|
| | | |
