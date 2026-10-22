import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://andreysafonov.com',
  // Emit /blog/slug.html so legacy extensionless URLs keep resolving on GitHub Pages without redirects.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: { shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } } },
});
