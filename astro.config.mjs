import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// The deployed site URL. Used for canonical links, Open Graph, sitemap, and RSS.
const SITE_URL = 'https://otto666357.github.io';
// Subpath if hosted as a GitHub Project Page (e.g. 'blog'). Use '' for a User Page.
const REPO_NAME = '';

export default defineConfig({
  site: SITE_URL,
  base: REPO_NAME ? `/${REPO_NAME}` : '/',
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
  build: {
    format: 'directory',
  },
});
