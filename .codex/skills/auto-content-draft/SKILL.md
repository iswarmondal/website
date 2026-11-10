---
name: auto-content-draft
description: Draft an iswar.me blog post from the Supabase content_ideas queue - peek/claim via Supabase MCP, write in Iswar's voice, drop MDX under src/content/blog, run the mandatory SEO gate (Google + AI/GEO), validate with npm run build, open a draft PR, and update queue status. Use when the user asks to draft from content ideas, Auto Content queue, claim a topic, or run auto-content-draft.
disable-model-invocation: true
---

# Auto Content Draft

Turn one queued `content_ideas` row into a first-draft MDX post + draft PR on this Astro blog.

Supabase holds **queue + assignment + status only**. Markdown lives in git under `src/content/blog/`.

## Before you start

1. Read [voice.md](voice.md) (writing taste).
2. Read [queue.md](queue.md) (schema, RPC, MCP SQL patterns).
3. Read [geo-research.md](geo-research.md) (brief, research, source/claim record).
4. Read [seo-gate.md](seo-gate.md) (mandatory SEO / GEO pass before PR).
5. Call `GetMcpTools` for server `Supabase` before any `CallMcpTool`.
6. Confirm table exists (`list_tables` or a peek query). Do **not** re-apply the create-table migration - schema is already live on the Auto Content project.

## Workflow checklist

Copy and track:

```
Auto Content Draft:
- [ ] 1. Peek next idea(s) (no write)
- [ ] 2. Human confirms topic (unless they already named one / said claim it)
- [ ] 3. Atomic claim via claim_next_content_idea
- [ ] 4. Mark status = drafting
- [ ] 5. Study similar posts + create the GEO brief and source/claim record
- [ ] 6. Write evidence-led MDX draft in src/content/blog/
- [ ] 7. SEO / GEO gate (required) - assess + fix per seo-gate.md
- [ ] 8. npm run build (must pass)
- [ ] 9. Branch → commit → push → draft PR (include SEO gate notes in PR body)
- [ ] 10. Leave idea drafting; put idea id + PR link in PR body
- [ ] 11. Summarize for human (title, slug, claimer, PR URL, SEO gate OK, next steps)
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
select * from public.claim_next_content_idea('codex-blog-agent');
```

Claimer label: `codex-blog-agent` by default, or a more specific string if user names one (e.g. `codex-blog-agent-geo`).

If RPC returns null → queue empty / race. Re-peek and stop.

Keep returned `id` for all later updates.

### 4. Mark drafting

```sql
update public.content_ideas
set status = 'drafting'
where id = '<claimed-uuid>'
  and status = 'claimed';
```

### 5. Voice + research brief

- Follow [voice.md](voice.md).
- Follow [geo-research.md](geo-research.md) before outlining or browsing.
- Skim 1-2 posts in `src/content/blog/` closest in type (build guide vs product narrative).
- Treat `notes` as **personal voice material / constraints** - weave in, don't dump as bullet laundry.
- Treat `angle` as thesis. Title in DB is topic cue; final post `title` may be tightened for the page.
- Complete the pre-draft brief: primary query and intent, audience, page job, related questions, evidence, freshness needs, and relevant internal links.
- Check the closest live post for overlap. If the new idea cannot own a distinct question, audience, or evidence set, stop and ask for a sharper angle instead of producing a near-duplicate.
- Build the source/claim record while researching. It belongs in the draft PR handoff, not as a JSON or CMS payload.

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

- Open with a direct answer or scope statement, then add the first-person context when it helps. Do not begin with an anecdote that delays the answer.
- Prefer lived-build specificity over generic listicles.
- Code blocks when they teach; skip filler scaffolding.
- Images: only real paths under `public/blog/`.
- Length: substantial first draft (aim useful end-to-end), not outline stubs - unless user asked for outline-only.
- Use headings that state the question or claim the section answers. Make important sections understandable when read alone.
- Define important products, people, acronyms, locations, and terms before using shorthand. Use descriptive source links beside material claims when sources exist.
- Use a list, table, FAQ, quote, statistic, or comparison only when it makes a real distinction clearer. Never add these elements to satisfy a density, length, or template target.
- For first-party observations, name the method, scope, and limitations. For researched claims, attribute the source accurately. Never turn unverified notes into facts.
- **No em dashes (Unicode U+2014) and no en dashes (U+2013).** Replace every one with a regular ASCII hyphen (`-`), or rewrite with commas / periods. Scan the finished MDX before commit; AI drafts love em dashes.
- **Comparison tables:** when the post contrasts two+ approaches (SEO vs GEO, X vs Y), use a real GFM Markdown table - never ASCII/tab "fake tables." Format:

```md
| Signal | Option A | Option B |
| --- | --- | --- |
| Primary win | Short clause | Short clause |
| Structure | Short clause | Short clause |
```

  Rules: blank line before and after; header row + `| --- |` separator required; 2-4 columns; short cells (one clause); first column = dimension/signal label; prefer this over parallel bullet lists for side-by-side contrasts. Blog CSS in `BlogPost.astro` styles these as bordered full-width tables.
- Draft for people first, then run the SEO / GEO gate. This can improve citation eligibility, but no platform or prompt can guarantee a citation or rank.
- Do **not** mark `published` in Supabase yet. PR merge ≠ live publish ritual unless user says so.

### 7. SEO / GEO gate (required - never skip)

**Before** build and **before** opening the draft PR, assess and fix the post for Google SEO **and** AI/answer-engine extractability.

1. Follow [seo-gate.md](seo-gate.md) pass/fail checklist end to end.
2. Use an available platform SEO or GEO capability only as additional evidence. This skill's research and gate remain complete without a separate local skill.
3. Re-scan for em/en dashes and fake tables.
4. Fix blocking failures before step 8. Record allowed evidence review flags in the PR; never disguise them as verified facts.

If the human asked for outline-only, still note SEO gaps in the handoff - but full drafts must clear the gate.

### 8. Validate

```bash
npm run build
```

Fix frontmatter/MDX until build passes. No lint/test suite in this repo; build is the gate for compile; SEO gate is separate and earlier.

### 9. Git + draft PR

1. Feature branch from current base (Codex agents: `codex/<descriptive-name>`).
2. Stage only the new/edited post files (and any real assets you added).
3. Commit message: `draft: <short post title>` or similar.
4. Push; open **draft** PR.
5. PR body must include:
   - Content idea `id`
   - Original queue title / angle
   - Claimer string
   - **SEO / GEO gate summary** (what passed; any allowed leftovers)
   - **GEO research record:** primary query and intent, related questions, distinct page job / original-value angle, source/claim ledger, evidence review flags, and suggested review date
   - **Measurement note:** target queries and, when analytics exists, which AI referrers or UTM-tagged traffic to review after publishing
   - Note: status left as `drafting`; publish step still human/agent follow-up

Codex agents: use the connected GitHub tooling when available; otherwise use `gh` if authenticated. Open the PR as a draft.

### 10. Queue status after PR

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

### 11. Hand off

Tell human: slug path, idea id, PR URL, build OK, SEO / GEO gate result, evidence review flags, suggested review date, and that publish/queue close is still pending.

## Hard rules

- Ideas ≠ posts. Never "publish" only in DB without the MDX file (and usually a merged PR).
- Never claim without confirmation unless user explicitly waived it.
- Never use non-SKIP-LOCKED claim patterns.
- Never grant/assume `anon` access; MCP `execute_sql` / service path is fine for agents.
- Do not recreate schema; see [queue.md](queue.md) for reference only.
- Match existing site patterns; do not redesign the blog layout for a content task.
- One idea per skill run unless user asks for a batch (batch = repeat checklist per idea, separate PRs preferred).
- Never ship blog MDX containing em dashes (U+2014) or en dashes (U+2013). Use ASCII `-` only (see [voice.md](voice.md)).
- Comparison / vs sections must use GFM pipe tables (see Body rules), not ASCII art or tab-aligned plain text.
- **Never open the draft PR until the SEO gate ([seo-gate.md](seo-gate.md)) passes.** Build success alone is not enough.
- Never invent statistics, expert quotes, sources, benchmarks, or firsthand experience. Attribute sources accurately and qualify conclusions to the available evidence.
- Do not chase keyword or entity density, arbitrary word counts, special markup, or a separate AI-only version of a page. One useful, indexable MDX page is the product.
- Evidence gaps may be flagged for human review in a **draft** PR, but the post must not present unresolved claims as established fact.

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
