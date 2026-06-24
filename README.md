# My Blog

A bilingual (English + Chinese) personal blog built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Features

- Bilingual content (English & Chinese) with automatic language detection
- Light / dark theme with `prefers-color-scheme` and manual override
- View Transitions for smooth page navigation
- MDX support (Markdown + JSX)
- Reading time and word count (CJK-aware)
- SEO: sitemap, RSS, Open Graph, Twitter Card, JSON-LD
- Tag pages and archive page
- Static, no runtime backend

## Stack

- [Astro 4](https://astro.build)
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/)
- Vanilla CSS with CSS variables (no Tailwind, no UI framework)
- [Giscus](https://giscus.app) for comments (optional, see below)

## Project structure

```
src/
  content/
    posts/
      zh/      # Chinese posts
      en/      # English posts
  i18n/
    ui.ts      # UI strings dictionary
    utils.ts   # language helpers
  components/  # Astro components
  layouts/     # Page layouts
  pages/
    index.astro         # language detection redirect
    404.astro
    zh/                 # Chinese routes
    en/                 # English routes
  styles/
    global.css
  utils/        # helpers
public/
  favicon.svg
  og-default.svg
  robots.txt
```

## Local development

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:4321>.

## Authoring a new post

Create a new Markdown file under `src/content/posts/<lang>/`:

```yaml
---
title: "Your title"
description: "Short summary for SEO and the post card."
pubDate: 2025-03-12
updatedDate: 2025-03-15   # optional
tags: ["Astro", "Note"]
draft: false
lang: zh   # or "en"
---

Your content in Markdown / MDX goes here.
```

The `lang` field is required so the router knows which language section to render under.

## Deployment to GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings 뿯↽ Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically.

### Configuring your site URL

Edit `astro.config.mjs` and replace the placeholders:

```js
const SITE_URL = 'https://YOUR-USERNAME.github.io';
const REPO_NAME = 'YOUR-REPO-NAME';   // empty string '' if username == repo
```

- **User site** (`YOUR-USERNAME.github.io`): set `REPO_NAME = ''` and `base: '/'`.
- **Project site** (`YOUR-USERNAME.github.io/YOUR-REPO-NAME`): set `REPO_NAME = 'YOUR-REPO-NAME'` and `base: '/YOUR-REPO-NAME'`.

### Custom domain (later)

1. Add a `CNAME` file in `public/` containing your domain.
2. Update `SITE_URL` in `astro.config.mjs` to your domain.
3. Configure DNS at your registrar.

## Comments (optional)

To enable Giscus:

1. Install the [giscus app](https://github.com/apps/giscus) on the discussion repo.
2. Get the `repo`, `repoId`, `category`, `categoryId` from <https://giscus.app>.
3. Add a `<Giscus>` component to `src/layouts/PostLayout.astro` and pass those IDs.

## License

MIT
