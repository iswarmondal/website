# GEO research guide

Use this guide before outlining every full draft. The goal is useful, verifiable content that is easy to retrieve, understand, and cite. It raises eligibility for AI answer engines and search; it does not guarantee a rank, source selection, referral, or citation.

## Platform reality

- Google AI features use the same foundations as Google Search: indexable, helpful, people-first content. Do not add special schema, `llms.txt`, or machine-readable files just to chase inclusion. See [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).
- ChatGPT search can discover public pages when `OAI-SearchBot` is not blocked. See [OpenAI publisher guidance](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq).
- Perplexity recommends allowing `PerplexityBot` for search visibility. See [Perplexity crawler guidance](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).
- Do not claim a known ranking formula for ChatGPT, Gemini, Claude, Perplexity, or any other answer engine. Their retrieval and citation choices change by query, product mode, index, location, and time.

This site already supplies server-rendered HTML, canonical URLs, structured article and author data, sitemap/RSS discovery, `llms.txt`, and crawler access. For a normal content draft, preserve that surface by using the standard MDX layout. Do not make site-wide crawler, schema, or machine-readable-file changes unless the human asks.

## Pre-draft brief

Complete this before writing the outline:

```md
GEO brief
- Primary query:
- Search intent: learn / compare / solve / buy / plan / other
- Audience and decision:
- Distinct page job: what this page owns that no live sibling owns
- Direct answer or scope statement:
- Related questions worth answering:
- Original-value angle: firsthand build, method, dataset, test, expert access, or transparent synthesis
- Evidence available and gaps:
- Freshness trigger and suggested review date:
- Relevant internal links:
```

Search the blog for similar titles, openings, and outlines. If the page cannot own a distinct question, audience, evidence set, or next action, sharpen the angle or stop. Do not create a second AI-only version of an existing useful page.

## Research rules

1. Browse for claims that can change: prices, availability, versions, laws, policies, product behavior, statistics, schedules, recommendations, and named people or roles.
2. Prefer sources in this order: official documentation or primary data, standards bodies and original research, direct firsthand evidence with a reproducible method, then reputable secondary reporting for context.
3. Do not treat search snippets, another AI answer, copied listicles, or unsourced social posts as proof.
4. For a researched comparison, record the criteria and the date checked. For a first-party comparison, record the setup and limits.
5. For medical, legal, financial, safety, or other high-stakes topics, use primary or official sources, state scope and uncertainty, and avoid personalized advice.
6. If evidence is weak, either remove the claim, state it as a bounded opinion or observation, or flag it for human review in the draft PR. Never fabricate support.

## Source/claim record

Build this as you research. Keep it in the PR body or an attached draft note, not in the published frontmatter and not as JSON.

```md
| Claim or recommendation | Evidence type | Source or method | URL or artifact | Date checked | Caveat | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Short claim | Official docs / test / interview | Publisher or method | Link | YYYY-MM-DD | Scope or uncertainty | Verified / review needed |
```

Include only material claims: the facts that change a reader's decision, numbers, quotations, recommendations, comparisons, and platform behavior. A personal post may have a short record; a researched guide may have several rows.

## Outline and drafting rules

- Put the direct answer or scope statement in the opening one or two paragraphs. Then explain why it matters and show the evidence.
- Use H2/H3 headings that match real questions or clear claims. Do not manufacture exact-match headings that misrepresent the section.
- Start important sections with their answer, then add context, method, examples, citations, and limitations.
- Define entities and abbreviations before shorthand. Name the actor responsible for a claim.
- Link sources with descriptive anchor text close to the claim. If a citation is removed from an excerpt, the sentence should still identify the source or method.
- Add internal links where a relevant existing page helps the reader continue. Do not add filler links to meet a quota.
- Use FAQs, lists, tables, images, code, quotes, or data only when they improve understanding. Do not pursue entity density, word counts, mandatory statistics, or mandatory expert quotes.
- Update `updatedDate` only after a material review or change. Do not refresh dates cosmetically.

## Conditional comparison pattern

For a genuine choice, state the decision criteria before or after a compact GFM table. Include current date, method, and limitations for volatile facts. For travel topics, route, transport, rental, accommodation, or cost comparisons are useful only when they solve the reader's actual planning decision.

## PR handoff record

Include the completed GEO brief, source/claim record, SEO / GEO gate result, evidence review flags, and suggested review date. Add a small measurement note: target queries and, when analytics exists, relevant referrers or `utm_source=chatgpt.com` traffic to review after publication. A single answer-engine test is an observation, not a rank report.
