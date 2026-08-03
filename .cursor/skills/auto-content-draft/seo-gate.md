# SEO gate (required before draft PR)

Run this **after** the MDX draft exists and **before** `npm run build` / opening the PR. Do not ship a draft PR that fails this gate.

Also read when available:

- `.cursor/skills/seo-audit/SKILL.md` - traditional technical + on-page SEO
- `.cursor/skills/ai-seo/SKILL.md` - GEO / AEO / citation extractability
- [voice.md](voice.md) - em dashes, comparison tables, voice

## Pass / fail checklist

Copy into the run todo list and mark each item:

```
SEO gate:
- [ ] Primary keyword in title, H1 (title), slug, and first ~100 words
- [ ] Meta description unique, ~120-160 chars, includes primary phrase + benefit
- [ ] SERP title length sane (post title ~50-60 chars; full `Title · Iswar.me` not absurdly long)
- [ ] Answer-first opener (definition or direct answer in first screenful)
- [ ] Question-shaped H2/H3 where natural; one clear H1 from layout title
- [ ] Internal links to >=2 relevant existing posts/pages (descriptive anchors)
- [ ] Comparison / vs content uses GFM pipe table (see voice.md)
- [ ] FAQ section when the topic has common follow-ups (direct answers under each question)
- [ ] No em dash (U+2014) / en dash (U+2013); ASCII hyphen only
- [ ] No thin duplicate of a sibling post; unique fingerprint / angle
- [ ] AI extractability: self-contained answer blocks, scannable lists/tables, entity names clear
- [ ] Site chrome OK for this URL class (canonical/index/Article schema come from BlogPost - do not break layout)
```

## How to assess

1. **Measure** title/description character counts; confirm keyword placement in opener.
2. **Scan** headings for intent match (how / what / vs / FAQ).
3. **Link** related posts in-cluster (e.g. GEO ↔ keyword clusters).
4. **Fix** failures in the same MDX file before build.
5. **Record** in the draft PR body: short "SEO gate" bullet list of what you checked + any known leftovers (e.g. no custom OG image).

## Failures that block the PR

- Missing or clickbait-void meta description
- No primary keyword / answer in the opening
- Zero internal links on a topical post when related posts exist
- Em/en dashes present
- ASCII/tab "fake tables" instead of GFM tables for comparisons
- Outline-only stub labeled as a full draft

## Allowed leftovers (note in PR, do not block)

- Custom `heroImage` / OG art when no real asset exists under `public/`
- FAQPage JSON-LD (site-wide schema work - out of scope unless asked)
- Search Console verification / backlink work
