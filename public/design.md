# iswar.me — Brand & Design System

> **Fetch URL (raw markdown):** https://iswar.me/design.md  
> Share URL, not file attach — same idea as `llms.txt` feeds.
>
> **Purpose:** Context for AI agent / designer / developer building branded work for **iswar.me** — presentations, social, subdomain apps, POCs, decks, PDFs, email headers, marketing.
>
> **Goal:** Every surface feel like same calm monochrome brand as [iswar.me](https://iswar.me).
>
> **Maintenance:** Networked source of truth. Repo path: `public/design.md`. Agents changing site UI must update this file in same change set (see `.cursor/rules/design-system-sync.mdc`).

---

## 1. Brand in one sentence

**Quiet newspaper on soft paper** — black ink, generous empty space, classical serif type, no noise. The site is a **performative technical blog**: articles first, thin chrome, no portfolio clutter.

Loud, colorful, glassy, neon, “startup purple” = off-brand.

---

## 2. Design philosophy

| Principle | Meaning |
|-----------|---------|
| **Negative space first** | Emptiness = feature. Large margins, sparse composition, one idea per section. |
| **Monochrome calm** | Black, white, greys only. Colour reserved for product screenshots / photos (see imagery). |
| **Print heritage** | Layout + type from newspapers + fine books — columns, italics, drop caps, small caps, thin rules. |
| **Professional, not cold** | Warm-neutral paper tones. Not sterile white or stark high-tech black. |
| **Restraint over decoration** | No hard drop shadows, thick borders, badges, pill clusters, glow. |
| **Brand as hero** | Covers / first slides / heroes: **iswar.me** (or Iswar) = dominant name signal — not tiny corner logo alone. |
| **Blog-first IA** | Home = masthead + article feed. Nav: Blog · About. Contact lives on About + footer. No projects / case-study section. |

### Emotional target

Calm · Confident · Editorial · Timeless · Readable · Serious without stiff.

### Anti-patterns (never do)

- Purple / indigo gradients, neon accents, glassmorphism, multi-layer shadows
- Warm cream + terracotta “AI default” looks
- Dense broadsheet clutter (many rules, packed columns, chrome overload) — want **space**, not newspaper chaos
- Rounded-full pill tags as decoration
- Emoji as brand ornament
- Dark mode as default brand (light paper = canonical)
- Inter / Roboto / Arial / system UI stacks as primary brand type

---

## 3. Colour system

Canonical tokens from website. Use exact hex when possible.

| Token | Hex | Role |
|-------|-----|------|
| **Ink** | `#111111` | Primary text, rules, solid CTAs, logos |
| **Ink soft** | `#2A2A2A` | Secondary body, decks, bylines |
| **Paper** | `#F6F6F4` | Default background (warm off-white) |
| **Paper deep** | `#ECECE8` | Subtle panels, code/table washes, hover wells |
| **Mist** | `#D8D8D4` | Soft borders, dividers on paper |
| **Line** | `#C8C8C2` | Hairline separators |
| **Muted** | `#6A6A66` | Meta, captions, secondary UI (keep ≥4.5:1 on paper for small text) |
| **Muted soft** | `#8A8A84` | Least emphasis labels only (large type or non-critical) |
| **Focus** | `#111111` | Focus rings / high-emphasis UI chrome |

### Background recipe

Prefer **Paper `#F6F6F4`**, optional soft radial wash (black ~3–4% opacity) — atmosphere, no colour.

Avoid flat pure `#FFFFFF` alone on large canvases; paper tone = brand.

### Contrast rules

- Body text: Ink or Ink soft on Paper
- Do not set body or titles in Muted / Mist
- Links: Ink, underlined; hover → Muted (or 50–60% opacity)

### Colour usage outside the web

| Medium | Guidance |
|--------|----------|
| PPT / PDF | Slide background = Paper. Text = Ink. Accents = thin Ink rules only. |
| Social (square / story) | Paper field + Ink type. One focal image at 50% grayscale (see imagery). |
| Subdomain apps | Same CSS tokens; light theme default. |

---

## 4. Typography (brand standard = blog type)

**All branded materials: follow blog / article typography — not site chrome (Syne).**

Website uses Syne for nav + UI chrome. **Exception for marketing site shell.** Cross-product branding (decks, social, subdomain POCs) = **article / newspaper** voice.

### Primary typeface — Libre Baskerville

| | |
|--|--|
| **Family** | Libre Baskerville |
| **Fallback** | `"Times New Roman", Times, Georgia, serif` |
| **Why** | Baskerville lineage — books + serious print; calm, scholarly, editorial. |
| **Files on site** | Regular 400 · Italic 400 · Bold 700 (self-hosted `.woff2`) |
| **License** | SIL Open Font License (free for commercial use) |
| **Source** | [Google Fonts — Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) |

### Weights & styles to use

| Style | Use for |
|-------|---------|
| **Regular 400** | Body copy, long reading, captions |
| **Italic 400** | Decks / standfirsts, pull quotes, dates/kickers, emphasis, link treatment in prose |
| **Bold 700** | Section titles, drop caps, strong emphasis |
| **Small caps** (or faux small-caps via `letter-spacing` + uppercase at reduced size) | Bylines, meta labels (`BY ISWAR C. MONDAL`) |

Lean into **italic + decorative print manners**: drop caps, italic decks, ornamental short rules, generous leading. That *is* brand voice.

### Optional display exception

Main website only: **Syne** (Bold / ExtraBold) for UI + some page titles.  
**Do not require Syne** in PPT, social, subdomain apps unless matching specific web screenshot. Prefer **Libre Baskerville Bold** (or Italic) for headlines in branded kits.

Geometric sans for app UI chrome (buttons, nav): secondary + sparse — never replace Baskerville for reading text.

### Type scale (guidance)

Relative scale for slides / posters / apps (adjust to medium):

| Role | Guidance |
|------|----------|
| **Display / cover title** | Large, bold or italic; tight leading (~0.95–1.1); lowercase OK for editorial punch |
| **Section head** | Bold or italic; clear hierarchy below display |
| **Deck / standfirst** | Italic, ~40–60% of title size, max ~2–3 lines |
| **Body** | Regular, comfortable leading **1.6–1.8** |
| **Meta / kicker** | Italic or small-caps; muted colour; small |
| **CTA label** | Bold or small-caps + letter-spacing; often ALL CAPS with thick underline |

### Text treatments (blog vocabulary)

Reuse patterns so work feels native:

1. **Kicker** — italic date or section label above title  
2. **Lowercase display titles** — editorial, confident (optional; not mandatory for product UI)  
3. **Italic deck** under title  
4. **Small-caps byline**  
5. **Short ink ornament rule** (~3rem / 48px wide, 1px tall) under mastheads  
6. **Drop cap** on opening paragraph of longform  
7. **Pull quote** — italic, centered, hairline rules above/below  
8. **CTA** — uppercase tracking + **thick bottom underline** (e.g. “MORE ARTICLES”) instead of loud buttons when possible  

### Multi-column layout

Long reading (articles, one-pagers, dense PPT appendix):

- Prefer **2 columns** on wide canvases  
- Generous gutter  
- Collapse to **1 column** on narrow / mobile  
- Headings, images, code, quotes, **tables** may span full width  

### Comparison / data tables (blog)

Markdown GFM tables in articles render as real bordered tables (not tab-spaced plain text):

- Full-bleed across the newspaper column span  
- Hairline cell borders (`1px` Line); header row uses Paper deep wash + thicker Ink bottom rule  
- First-column / row labels may stay bold for scanability  
- Short cells (one clause); 2–4 columns max  
- On narrow screens: horizontal scroll if needed, still looks like a table  

Authoring format (required in content skills):

```md
| Signal | Google SEO | ChatGPT / answer engines |
| --- | --- | --- |
| Primary win | Ranked URL in SERPs | Named citation or recommendation |
```

Blank line before and after. No ASCII “fake tables,” no bare tab columns.

---

## 5. Layout & composition

### Spacing

- Prefer **too much** margin over too little  
- One job per section: one headline + one short supporting line + one primary action or image  
- Align to clear left edge; avoid scattered floating widgets  

### Rules & borders

- Hairlines only (`1px` Line / Mist)  
- Occasional short **Ink** ornament rules  
- No 3–4px “brutalist” frames, no hard offset shadows  

### Buttons / CTAs

Two OK patterns:

1. **Editorial underline** — uppercase + thick Ink underline (preferred for brand posts)  
2. **Rect button** — Ink fill + Paper text, or Paper fill + Ink border (`1px`); no shadow; no pill radius  

Hover: invert fill/border or reduce opacity — keep monochrome.

### Cards

Default: **no cards**.  
Bordered containers only for real interactive control or grouped form. If removing border/background doesn’t hurt understanding, don’t use card.

### Hero / cover budget

First viewport or title slide usually only:

1. Brand name (**iswar.me** / Iswar)  
2. One headline  
3. One short supporting sentence  
4. One CTA group (optional) — or go straight into the article feed  
5. One dominant image or empty paper field  

No stats strips, chip clouds, promo stickers on hero. On the live site, the home masthead is brand + italic headline + short lede, then the latest-articles list — the feed *is* the product.

### Site map (canonical)

| Route | Role |
|-------|------|
| `/` | Publication home — brand masthead + full latest feed |
| `/blog/` | Article archive |
| `/blog/[slug]/` | Newspaper article layout |
| `/about/` | Short bio + contact |
| `/rss.xml` | Feed |
| `/projects` (legacy) | Redirects to `/blog` |

---

## 6. Imagery

| Rule | Detail |
|------|--------|
| **Grayscale** | Apply **`grayscale(50%)`** to photographs + UI screenshots across branded surfaces (matches website). |
| **Subject** | Real product, place, craft, or context — not abstract 3D blobs. |
| **Placement** | Full-bleed or generous; avoid tiny floating rounded thumbnails in heroes. |
| **Overlays** | No floating badges, stickers, or chips on top of hero media. |

CSS reference:

```css
img {
  filter: grayscale(50%);
}
```

---

## 7. Motion (when the medium allows)

Motion quiet + purposeful:

- Soft rise / translate (~8–14px), no opacity-from-zero on primary titles (hurts perceived quality / LCP on web)  
- Hairline rules draw from left  
- Soft fade on decorative mega-type only  

Respect **reduced motion**. Prefer 2–3 intentional motions max per experience — never constant parallax noise.

---

## 8. Voice & copy

| Do | Don’t |
|----|-------|
| Clear, technical, human | Hype, buzzword salad |
| Short supporting sentences | Long hero paragraphs |
| Specific (Astro, SEO, AI search) | Vague “synergy / disrupt” |
| Lowercase editorial titles when aiming for blog feel | ALL CAPS walls of text |

**Brand strings**

- Site / product: **iswar.me** (lowercase)  
- Person: **Iswar C. Mondal** / **Iswar**  
- Tagline territory: technical writing that ranks — SEO, AI search, shipping durable software  
- Contact: `developeriswar@gmail.com` · [@developeriswar](https://twitter.com/developeriswar) · [GitHub](https://github.com/iswarmondal) · `/rss.xml`  

---

## 9. Logo / wordmark

- Primary mark: wordmark **`iswar.me`** in brand type (Libre Baskerville Bold, or matching web Syne ExtraBold only when mirroring live site chrome)  
- Colour: Ink on Paper (or Paper on Ink for inverted footers / end cards)  
- Clear space: ≥ height of wordmark’s “i” on all sides  
- No icons, diamonds, gradients, outlines unless reproducing existing site element intentionally  

---

## 10. CSS variables (copy-paste for web / subdomain apps)

```css
:root {
  --ink: #111111;
  --ink-soft: #2a2a2a;
  --paper: #f6f6f4;
  --paper-deep: #ecece8;
  --mist: #d8d8d4;
  --muted: #6a6a66;
  --muted-soft: #8a8a84;
  --line: #c8c8c2;
  --line-strong: #111111;
  --focus: #111111;

  /* Brand typography for products & marketing = blog voice */
  --font-brand: "Libre Baskerville", "Times New Roman", Times, serif;
}
```

```css
body {
  font-family: var(--font-brand);
  color: var(--ink);
  background-color: var(--paper);
  line-height: 1.7;
}

img {
  filter: grayscale(50%);
}
```

---

## 11. Medium-specific recipes

### PowerPoint / Keynote / Google Slides

- Master background: `#F6F6F4`  
- Title: Libre Baskerville Bold or Italic, Ink  
- Body: Libre Baskerville Regular, Ink soft  
- One thin horizontal rule — not shapes stacks  
- Max ~1 photo per slide; 50% grayscale  
- End slide: large **iswar.me** wordmark + muted URL / handle  

### Social posts (LinkedIn, X, OG images)

- Paper canvas, large italic or bold Baskerville headline  
- Small kicker above, short deck below  
- Leave ≥20% empty margin  
- Include **iswar.me** as readable wordmark (not only favicon)  
- Safe zones: keep type away from platform UI chrome  

### Subdomain apps / POCs (`*.iswar.me`)

- Import palette + Libre Baskerville  
- Light paper theme default  
- Match CTA + rule language above  
- Performance: self-host fonts (woff2), minimize client JS when possible — brand = craft, not only look  

### PDFs / one-pagers

- Newspaper-inspired: masthead + optional two-column body  
- Drop cap optional on opening paragraph  
- Footer: thin line + © year + iswar.me  

---

## 12. Quick checklist for agents & designers

Before shipping branded artifact, confirm:

- [ ] Only black / white / grey (plus 50% grayscale photos)  
- [ ] Background Paper-like, not loud colour  
- [ ] Primary type **Libre Baskerville** (italic/bold used intentionally)  
- [ ] Generous negative space; one idea per section  
- [ ] Hairline rules, not thick brutalist frames or hard shadows  
- [ ] Brand name clearly present  
- [ ] No purple gradients, glass, neon, emoji ornament, or pill clutter  
- [ ] Feels calm enough to lower someone’s heart rate  

---

## 13. Source of truth

| Asset | Location |
|-------|----------|
| Live site | https://iswar.me |
| **This brand doc (raw)** | **https://iswar.me/design.md** |
| Repo file | `public/design.md` |
| Global tokens | `src/styles/global.css` |
| Blog / newspaper layout | `src/layouts/BlogPost.astro` |
| Self-hosted fonts | `public/fonts/LibreBaskerville-*.woff2` |
| Agent sync rule | `.cursor/rules/design-system-sync.mdc` |

Website vs this file disagree on **branded** work → prefer **this file** + **blog article** aesthetic. Implementing main marketing site chrome → defer to repo CSS, then **update this file** so public guide matches.

---

## 14. Keeping this document current

UI / brand change on iswar.me affecting colours, type, layout language, imagery, motion, or CTAs → update `public/design.md` in same PR. Do not let live site and https://iswar.me/design.md drift.

---

*Last aligned with blog-first redesign: projects removed; slim nav/footer; home = masthead + article feed; About = bio + contact.*
