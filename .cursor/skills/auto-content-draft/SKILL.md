---
name: auto-content-draft
description: Draft an iswar.me blog post from the Supabase content_ideas queue - peek/claim via Supabase MCP, write in Iswar's voice, drop MDX under src/content/blog, validate with npm run build, open a draft PR, and update queue status. Use when the user asks to draft from content ideas, Auto Content queue, claim a topic, or run auto-content-draft.
disable-model-invocation: true
---

# Auto Content Draft

Turn one queued `content_ideas` row into a first-draft MDX post + draft PR on this Astro blog.

Supabase holds **queue + assignment + status only**. Markdown lives in git under `src/content/blog/`.

## Before you start

1. Read [voice.md](voice.md) (writing taste).
2. Read [queue.md](queue.md) (schema, RPC, MCP SQL patterns).
3. Call `GetMcpTools` for server `Supabase` before any `CallMcpTool`.
4. Confirm table exists (`list_tables` or a peek query). Do **not** re-apply the create-table migration - schema is already live on the Auto Content project.

## Workflow checklist

Copy and track:

```
Auto Content Draft:
- [ ] 1. Peek next idea(s) (no write)
- [ ] 2. Human confirms topic (unless they already named one / said claim it)
- [ ] 3. Atomic claim via claim_next_content_idea
- [ ] 4. Mark status = drafting
- [ ] 5. Study 1-2 similar existing posts + voice.md
- [ ] 6. Write MDX draft in src/content/blog/
- [ ] 7. npm run build (must pass)
- [ ] 8. Branch → commit → push → draft PR
- [ ] 9. Leave idea drafting; put idea id + PR link in PR body
- [ ] 10. Summarize for human (title, slug, claimer, PR URL, next steps)
```

### 1. Peek (never claim yet)

Via Supabase MCP `execute_sql`:

```sql
select id, title, angle, notes, priority, tags, status, created_at
from public.content_ideas
where status = 'idea'
order by priority desc, created_at asc
limit 5;
```

Show human: title, angle, priority, tags, short notes. Recommend #1 unless they asked for a tag/title filter.

If queue empty: stop. Do not invent topics unless asked.

### 2. Confirm

**Required** before claim unless user already said e.g. "claim the GEO one" / "pick next and draft".

If they pick a non-next row: claim is still `claim_next_content_idea` (always top of queue). Options:
- Ask them to raise that idea's `priority` first, then claim; or
- Peek-only path: they confirm the **current** next idea.

Do not race with naive `update … limit 1`.

### 3. Claim

```sql
select * from public.claim_next_content_idea('cursor-blog-agent');
```

Claimer label: `cursor-blog-agent` by default, or a more specific string if user names one (e.g. `cursor-blog-agent-geo`).

If RPC returns null → queue empty / race. Re-peek and stop.

Keep returned `id` for all later updates.

### 4. Mark drafting

```sql
update public.content_ideas
set status = 'drafting'
where id = '<claimed-uuid>'
  and status = 'claimed';
```

### 5. Voice + research

- Follow [voice.md](voice.md).
- Skim 1-2 posts in `src/content/blog/` closest in type (build guide vs product narrative).
- Treat `notes` as **personal voice material / constraints** - weave in, don't dump as bullet laundry.
- Treat `angle` as thesis. Title in DB is topic cue; final post `title` may be tightened for the page.

### 6. Write the draft

**Path:** `src/content/blog/<kebab-slug>.mdx`

Slug: lowercase kebab from title; unique vs existing files. Prefer short, searchable slugs (see existing: `frame-shift-loom-alternative.mdx`).

**Frontmatter** (schema in `src/content.config.ts`):

```mdx
---
title: 'Clear specific title'
description: 'One or two sentences; searchable; not clickbait void.'
pubDate: 'Mon DD YYYY'
---
```

- `pubDate`: use today's date unless user specifies.
- `heroImage`: only if a real file exists under `public/` (e.g. `/blog/...`). Otherwise omit.
- `updatedDate`: omit on first draft.

**Body:**

- First-person builder voice; open with hook/context, not a table of contents dump.
- Prefer lived-build specificity over generic listicles.
- Code blocks when they teach; skip filler scaffolding.
- Images: only real paths under `public/blog/`.
- Length: substantial first draft (aim useful end-to-end), not outline stubs - unless user asked for outline-only.
- **No em dashes (`-`) and no en dashes (`-`).** Replace every one with a regular hyphen (`-`), or rewrite with commas / periods. Scan the finished MDX before commit; AI drafts love `-`.
- Do **not** mark `published` in Supabase yet. PR merge ≠ live publish ritual unless user says so.

### 7. Validate

```bash
npm run build
```

Fix frontmatter/MDX until build passes. No lint/test suite in this repo; build is the gate.

### 8. Git + draft PR

1. Feature branch from current base (cloud agents: `cursor/<descriptive-name>-8ddc`).
2. Stage only the new/edited post files (and any real assets you added).
3. Commit message: `draft: <short post title>` or similar.
4. Push; open **draft** PR.
5. PR body must include:
   - Content idea `id`
   - Original queue title / angle
   - Claimer string
   - Note: status left as `drafting`; publish step still human/agent follow-up

Cloud agents: use `ManagePullRequest` (`create_pr`, `draft: true`). Do not use `gh` for PR write.

### 9. Queue status after PR

Leave `status = 'drafting'` while PR is open.

**Do not** set `published` until the post is actually live on the site **and** the human wants the queue closed. Then:

```sql
update public.content_ideas
set
  status = 'published',
  published_url = '/blog/<slug>/',
  published_at = now()
where id = '<uuid>';
```

**Abandon:**

```sql
-- return to queue
update public.content_ideas
set status = 'idea', claimed_by = null, claimed_at = null
where id = '<uuid>';

-- or kill
update public.content_ideas
set status = 'killed'
where id = '<uuid>';
```

### 10. Hand off

Tell human: slug path, idea id, PR URL, build OK, and that publish/queue close is still pending.

## Hard rules

- Ideas ≠ posts. Never "publish" only in DB without the MDX file (and usually a merged PR).
- Never claim without confirmation unless user explicitly waived it.
- Never use non-SKIP-LOCKED claim patterns.
- Never grant/assume `anon` access; MCP `execute_sql` / service path is fine for agents.
- Do not recreate schema; see [queue.md](queue.md) for reference only.
- Match existing site patterns; do not redesign the blog layout for a content task.
- One idea per skill run unless user asks for a batch (batch = repeat checklist per idea, separate PRs preferred).
- Never ship blog MDX containing `-` or `-`. Use `-` only (see [voice.md](voice.md)).

## Optional filters

If user names a tag:

```sql
select id, title, angle, notes, priority, tags
from public.content_ideas
where status = 'idea'
  and tags @> array['geo']  -- example
order by priority desc, created_at asc
limit 5;
```

Remember: `claim_next_content_idea` still claims global next `idea`. To claim a tagged item that is not next, bump its `priority` above others first (with human OK), then claim.
