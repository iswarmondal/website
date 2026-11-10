# SEO / GEO gate (required before draft PR)

Run this after the MDX draft exists and before opening the draft PR. Read [geo-research.md](geo-research.md) and [voice.md](voice.md) first.

The gate protects content quality and citation eligibility. It cannot promise a Google, ChatGPT, Gemini, Claude, or Perplexity rank. Fix all blockers. Evidence review flags may stay in a **draft** PR only when they are explicit and the article does not present them as verified facts.

## Blocking checks

```md
SEO / GEO gate - blockers
- [ ] Title, slug, description, and opening accurately express the page's primary query or purpose
- [ ] Opening one or two paragraphs give a direct answer or clear scope before optional story/context
- [ ] Page owns a distinct intent, audience, or evidence set; it is not a thin sibling duplicate
- [ ] Title and description are specific, useful, and not clickbait or keyword stuffing
- [ ] H2/H3 headings accurately state the questions or claims their sections answer
- [ ] Material factual claims, numbers, quotations, comparisons, and recommendations are sourced, bounded as opinion/observation, or removed
- [ ] Attribution is accurate: no invented sources, quotes, benchmarks, credentials, or firsthand experience
- [ ] Internal links are included where genuinely relevant existing pages can help the reader
- [ ] Comparison tables, when used, are valid GFM tables with real decision criteria
- [ ] No em dash (U+2014) or en dash (U+2013); use ASCII hyphens only
- [ ] Full draft is complete, not an outline presented as a finished post
- [ ] `npm run build` passes
```

## Quality and extractability review

```md
SEO / GEO gate - quality
- [ ] Important sections begin with their answer, then show reasoning, method, example, source, or limit
- [ ] Important entities and abbreviations are explicit before shorthand
- [ ] Lists, tables, FAQs, code, images, statistics, and quotes clarify the topic instead of padding it
- [ ] Source links use descriptive anchors and sit close to the material claim
- [ ] First-party evidence states method, scope, and limitations
- [ ] Volatile facts include a check date or current-source context where useful
- [ ] FAQ exists only when genuine follow-up questions need direct answers
- [ ] The page follows existing MDX and BlogPost layout conventions; do not add special AI-only markup or duplicate URLs
```

## Evidence review flags (allowed only in a draft PR)

Use a flag when a valuable claim needs human verification but does not make the post deceptive. Examples:

- an external source needs a final access or date check
- a firsthand metric needs the author's confirmation of scope or method
- a recommendation needs editorial confirmation because conditions can change

Do not leave `[citation needed]`, placeholder URLs, or unsupported certainty in the published prose. Reframe the sentence as a clear opinion/observation, remove it, or resolve the evidence before merge.

## Site surface check

The current BlogPost layout provides canonical URLs, indexability, structured article and author data, dates, sitemap/RSS discovery, and server-rendered article content. Preserve that by using normal MDX. Report a broken global surface if observed, but do not make unrelated site-wide crawler, schema, `llms.txt`, or robots changes during a content draft.

## PR record

Include:

1. The completed GEO brief.
2. A source/claim ledger for material claims.
3. Blocking checks passed and any evidence review flags.
4. Primary and related target queries.
5. Suggested review date based on freshness risk.
6. A measurement note: after publishing, review relevant search queries and available AI referrals. When analytics is configured, ChatGPT referrals may carry `utm_source=chatgpt.com`; a one-off answer-engine citation is not a durable ranking metric.

## Validation order

1. Fix blockers in the MDX.
2. Re-scan for em/en dashes and invalid comparison tables.
3. Run `npm run build` and fix MDX or frontmatter errors.
4. Record evidence review flags and the research handoff in the draft PR.
5. Open the draft PR only after the blocker list passes.
