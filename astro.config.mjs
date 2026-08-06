// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://iswar.me',
	integrations: [
		mdx(),
		sitemap({
			// Legacy /projects/* URLs are 301 redirect stubs (noindex);
			// redirecting URLs must not appear in the sitemap or GSC flags them.
			filter: (page) => !page.includes('/projects/'),
		}),
	],
	markdown: {
		shikiConfig: {
			theme: 'github-light',
		},
	},
	redirects: {
		'/projects': '/blog',
	},
});
