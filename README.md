# andreysafonov.com

Personal site of Andrey Safonov, built with [Astro](https://astro.build), MDX and Tailwind CSS.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm verify     # build + SEO/AEO validation (scripts/validate-seo.mjs)
```

## Content

| What | Where |
|---|---|
| Blog posts | `src/content/blog/*.mdx`. Frontmatter: `title`, `description`, `tldr`, `pubDate`, `tags`, `faq`, `draft` |
| Posts published elsewhere | `src/data/external-posts.ts` |
| Identity, products, links | `src/data/site.ts` (drives copy, JSON-LD and `llms.txt`) |
| Work timeline | `src/data/timeline.ts` |
| Testimonials | `src/data/testimonials.ts` |

OG images are generated at build time (`src/pages/og/[...slug].png.ts`). Every post gets one automatically.

## SEO / AEO

- JSON-LD graph on every page: Person, WebSite, Solunar Organization, and OpenStrata/OpenCommunity SoftwareApplication, linked by `@id`. Plus BlogPosting, FAQPage, BreadcrumbList and ProfilePage where relevant.
- `sitemap-index.xml`, `rss.xml`, `llms.txt`, `llms-full.txt`, and a `robots.txt` that allows AI crawlers.
- `build.format: 'file'` keeps legacy URLs (`/blog/<slug>`, `/portfolio`) identical to the old Next.js site.

## Deploy

Pushes to `master` deploy through GitHub Actions (`.github/workflows/deploy.yml`).
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The custom domain is set in `public/CNAME`.
