# AGENTS.md

## Cursor Cloud specific instructions

This is a static [Astro](https://astro.build) personal website (blog + project case studies). It ships zero client JS and has no backend or database. Content is managed as Markdown/MDX files under `src/content/blog` and `src/content/projects`, validated by the schemas in `src/content.config.ts`.

Standard commands live in `package.json` and `README.md`; use those rather than duplicating here:
- `npm run dev` — dev server at `http://localhost:4321/` (with hot reload; new/edited content files are picked up automatically).
- `npm run build` — static build to `dist/`.
- `npm run preview` — serve the built `dist/`.

Non-obvious notes:
- There is no lint step and no test suite. `astro check` is not usable out of the box because `@astrojs/check` + `typescript` are not declared dependencies and it prompts interactively to install them. Treat `npm run build` as the closest correctness gate (it type-checks content frontmatter against `src/content.config.ts`).
- Adding a blog post = drop an `.mdx`/`.md` file into `src/content/blog` with the required frontmatter (`title`, `description`, `pubDate`); it appears on `/blog/` and its own route immediately in dev.
