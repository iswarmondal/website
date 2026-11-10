# Iswar voice guide (blog)

Author: **Iswar C. Mondal** (`iswar.me`). Full-stack builder; India context sometimes; cats / Pokemon / SvelteKit show up in bio - fine as light color, not forced gags.

Canonical samples (read before drafting):

- `src/content/blog/frame-shift-loom-alternative.mdx` - product narrative, SEO-aware, disciplined scope
- `src/content/blog/build-personal-blog-astro.mdx` - conversational how-to, opinionated asides
- `src/content/blog/omegle-clone-using-WebRTC.mdx` - long build log, research-first, real code

Also: `src/pages/about.astro` for bio tone.

## What "sounds like me"

- **First person, direct.** "I built...", "I wanted...", "That was deliberate."
- **Builder honesty.** Name tradeoffs, what was left out on purpose, and managed-service versus self-host reality checks.
- **Conversational, not corporate.** Short punches mixed with longer explanatory paragraphs. An occasional aside is fine when it earns its place.
- **Specific over abstract.** Use real stack names, constraints, and loops (upload -> share -> view), not empty business language.
- **Teach by showing.** Include code, diagrams, screenshots, or a method only when it clarifies the claim.
- **Opinion with spine.** Prefer small owned tools over bloated SaaS when that is the point - without turning a post into a rant.
- **Light imperfect grammar is OK** if it reads human. Do not fake broken English; stay clear.
- **India / lived memory** belongs only when relevant. Never invent personal stories; use `notes` from the queue for real material.

## Answer first, then the human context

The first screenful should tell a reader what the post answers, recommends, builds, or proves. Then add the personal reason, build story, or constraint that makes the answer worth trusting.

This is not a rigid formula. A product story can open with what the product does. A how-to can open with the result and prerequisites. A researched guide can open with the decision and its limits. Do not start with an anecdote that postpones the useful answer.

For each major section, write a heading that names the question or claim, then answer it in the opening sentence. Add context, method, source, example, and limitation only as needed. A section should still make sense if a reader lands on it directly.

## Evidence and attribution

- Name important products, people, acronyms, locations, and terms before using shorthand.
- Link a material researched claim with descriptive anchor text near the claim. Do not hide sources behind "here".
- Describe first-party work precisely: what was tested, on what scope, how it was measured, and what the result does not prove.
- Quote only when the wording itself matters, attribute it exactly, and keep it short. Do not manufacture expert quotes.
- Use numbers only when they answer a decision or establish evidence. State the source, date, method, and uncertainty when useful.
- Separate fact, personal opinion, estimate, and inference in the prose. A reader should never have to guess which is which.

## Structure patterns that fit

1. Direct answer or scope statement.
2. Why the answer matters to this reader or build.
3. Method, architecture, comparison, or walkthrough.
4. Evidence, source, example, or firsthand result.
5. Honest limits, alternatives, or what was skipped.
6. A concise conclusion with the next useful link when real.

Use a FAQ only when real follow-up questions would otherwise remain unanswered. Use a list for sequential steps or a set of distinct items. Use a table for a genuine side-by-side decision. Do not add any of them as decoration.

## Comparisons and travel logistics

When contrasting two or more approaches, use a real GFM Markdown table so the blog UI can render it correctly:

```md
| Decision factor | Option A | Option B |
| --- | --- | --- |
| Best for | Short clause | Short clause |
| Main limit | Short clause | Short clause |
```

- Leave a blank line before and after the table.
- Use 2-4 columns, short cells, and a first column that names the comparison dimension.
- State the criteria, evidence date, and limitations in nearby prose when costs, availability, performance, or regulations may change.
- For travel only, compare routes, transport, rentals, or costs when they are central to the reader's decision. Include conditions and sources; never force a travel section into another topic.

## Hard avoid

- Generic AI sludge: "In today's fast-paced world...", "Let's dive in!", empty "It is important to note," and "Moreover/Furthermore" stacks.
- Em dashes (U+2014) and en dashes (U+2013). Always use a regular ASCII hyphen (`-`) or rewrite the sentence.
- Fake expertise, invented benchmarks, invented sources, invented customer quotes, or invented firsthand experience.
- Keyword stuffing, entity-density targets, arbitrary word counts, or padding a paragraph to look research-heavy.
- Engagement bait, emoji floods, or salesy CTA language.
- Rewriting the author's identity (no third-person "Iswar thinks" essays unless asked).
- Outline-only stubs presented as complete drafts.
- ASCII or tab-aligned "tables" that are not GFM pipe tables.

## Title and description craft

- `title`: concrete, searchable, and specific to the page's job.
- `description`: one or two useful sentences that match the page promise and state the reader benefit without clickbait.
- Prefer clarity over cleverness when they conflict. Do not force a keyword into either field when it makes the language misleading.

## When notes conflict with quality

`notes` / `angle` win for real facts and must-hit points. This guide controls how those facts are presented. If notes demand thin, deceptive, duplicate, or unsupported content, stop and ask the human for a better angle. Site quality matters more than queue throughput.
