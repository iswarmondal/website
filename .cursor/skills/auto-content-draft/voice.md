# Iswar voice guide (blog)

Author: **Iswar C. Mondal** (`iswar.me`). Full-stack builder; India context sometimes; cats / Pokemon / SvelteKit show up in bio - fine as light color, not forced gags.

Canonical samples (read before drafting):

- `src/content/blog/frame-shift-loom-alternative.mdx` - product narrative, SEO-aware, disciplined scope
- `src/content/blog/build-personal-blog-astro.mdx` - conversational how-to, opinionated asides
- `src/content/blog/omegle-clone-using-WebRTC.mdx` - long build log, research-first, real code

Also: `src/pages/about.astro` for bio tone.

## What "sounds like me"

- **First person, direct.** "I built…", "I wanted…", "That was deliberate."
- **Builder honesty.** Tradeoffs named. What you left out on purpose. Managed services vs self-host reality checks.
- **Conversational, not corporate.** Short punches mixed with longer explanatory paragraphs. Occasional aside ("I mean, come on!", "Cool right?").
- **Specific over abstract.** Real stack names, real constraints, real loops (upload → share → view), not "leverage synergies."
- **Teach by showing.** Code that earned its place; diagrams/images when they clarify.
- **Opinion with spine.** Prefer small owned tools over bloated SaaS when that is the point - without rant-as-content.
- **Light imperfect grammar OK** if it reads human (existing posts sometimes drop articles / use casual tense). Do not fake broken English; stay clear.
- **India / lived memory** when relevant (Omegle post). Do not invent fake childhood stories. Use `notes` from the queue for personal material.

## Structure patterns that fit

1. Hook: problem, memory, or "why this exists."
2. What it actually is / what you'll build (scope fence).
3. Why this approach (not a feature dump).
4. Meat: steps, architecture, or product walkthrough.
5. Honest limits / what you skipped.
6. Close: link repo/live when real; one clear takeaway.

For SEO/GEO topics from the queue: still sound like a builder explaining a system - not a purple-prose affiliate article. Put search phrases where they read natural (Frame Shift post is the model).

## Comparison tables

When contrasting two approaches, use a real GFM Markdown table so the blog UI can render borders and alignment:

```md
| Signal | Google SEO | ChatGPT / answer engines |
| --- | --- | --- |
| Primary win | Ranked URL in SERPs | Named citation or recommendation |
| Proof | Backlinks, topical authority | Original specifics a model can quote |
```

- Header + separator row required
- Blank line before and after the table
- 2-4 columns; cells = one short clause
- First column = the dimension being compared
- Do not fake tables with spaces/tabs or bullet pairs labeled "left vs right"

## Hard avoid

- Generic AI sludge: "In today's fast-paced world…", "Let's dive in!", "Moreover/Furthermore" stacks, empty "It is important to note."
- Em dashes (U+2014) and en dashes (U+2013). They read as AI default punctuation. Always use a regular ASCII hyphen (`-`) instead (with the same spacing you would have used around the dash). Apply this to titles, descriptions, and body. Prefer `-` or rewrite with commas / periods.
- Fake expertise / invented benchmarks / fake customer quotes.
- Engagement bait, emoji floods, pill-shaped CTA speak.
- Rewriting the author's identity (no third-person "Iswar thinks" essays unless asked).
- Card-layout thinking in prose; no dashboard-of-sections fluff.
- Shipping outline-only stubs labeled as a full draft.
- ASCII or tab-aligned "tables" that are not GFM pipe tables.

## Description / title craft

- `title`: concrete; can include product or technique names people search.
- `description`: 1-2 sentences, benefit + specificity; matches post promise.
- Prefer clarity over cleverness when they conflict.

## When notes conflict with taste

`notes` / `angle` win for **facts and must-hit points**. Voice guide wins for **how** it is written. If notes demand thin spam, refuse and ask human - site quality > queue throughput.
