// Post-build SEO/AEO checks over dist/. Exits non-zero on any failure.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://andreysafonov.com';
const PRODUCT_LINKS = ['https://openstrata.ca', 'https://opencommunity.ca'];
const MUST_LINK_PRODUCTS = [
  'index.html',
  'about.html',
  'work/openstrata.html',
  'work/opencommunity.html',
  'blog/why-i-started-solunar.html',
  'blog/three-years-at-aspire.html',
];
const LEGACY_ROUTES = [
  'index.html',
  'blog.html',
  'portfolio.html',
  'blog/how-to-migrate-nextjs-react-ga4.html',
  'blog/how-to-transition-to-product-management.html',
  'blog/product-manager-guide-to-okrs.html',
  'portfolio/webviewer-product.html',
  'portfolio/docx-product.html',
  'CNAME',
];

const errors = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const resolveLocal = (href) => {
  const path = href.split('#')[0].split('?')[0];
  if (path === '/' || path === '') return 'index.html';
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  for (const c of [clean, `${clean}.html`, `${clean}/index.html`]) if (existsSync(join(DIST, c))) return c;
  return null;
};

for (const r of LEGACY_ROUTES) if (!existsSync(join(DIST, r))) fail(r, 'legacy route missing');

const pages = walk(DIST).filter((f) => f.endsWith('.html'));
for (const abs of pages) {
  const file = relative(DIST, abs);
  const html = readFileSync(abs, 'utf8');
  const is404 = file === '404.html';

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!title) fail(file, 'missing <title>');
  else if (title.length > 110) fail(file, `title too long (${title.length})`);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) fail(file, 'missing meta description');
  else if (!is404 && (desc.length < 50 || desc.length > 260)) fail(file, `description length ${desc.length}`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (is404) { if (canonical) fail(file, 'noindex page should not declare canonical'); }
  else if (!canonical?.startsWith(SITE)) fail(file, 'missing/foreign canonical');
  else if (canonical.endsWith('.html')) fail(file, 'canonical has .html');

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(file, `expected 1 <h1>, found ${h1s}`);

  const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if (!og) fail(file, 'missing og:image');
  else if (og.startsWith(SITE) && !resolveLocal(og.slice(SITE.length))) fail(file, `og:image not built: ${og}`);

  // JSON-LD: parses, and every internal @id reference is defined somewhere in the page graph.
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch {
      fail(file, 'invalid JSON-LD');
      continue;
    }
    const defined = new Set();
    const refs = [];
    const visit = (n) => {
      if (Array.isArray(n)) return n.forEach(visit);
      if (n && typeof n === 'object') {
        const keys = Object.keys(n);
        if (n['@id'] && keys.length === 1) refs.push(n['@id']);
        else if (n['@id']) defined.add(n['@id']);
        Object.values(n).forEach(visit);
      }
    };
    visit(data);
    for (const r of refs) if (!defined.has(r)) fail(file, `dangling @id ${r}`);
  }

  // Internal links resolve.
  for (const [, href] of html.matchAll(/<a [^>]*href="(\/[^"]*)"/g)) {
    if (!resolveLocal(href)) fail(file, `broken internal link ${href}`);
  }
  // Images exist.
  for (const [, src] of html.matchAll(/<img [^>]*src="(\/[^"]*)"/g)) {
    if (!resolveLocal(src)) fail(file, `missing image ${src}`);
  }
  // No nofollow on product links.
  for (const [tag] of html.matchAll(/<a [^>]*href="https:\/\/open(strata|community)\.ca[^"]*"[^>]*>/g)) {
    if (/nofollow|ugc|sponsored/.test(tag)) fail(file, 'product link is not followed');
  }
}

for (const file of MUST_LINK_PRODUCTS) {
  const html = readFileSync(join(DIST, file), 'utf8');
  for (const link of PRODUCT_LINKS) if (!html.includes(`href="${link}`)) fail(file, `no link to ${link}`);
}

for (const f of ['robots.txt', 'sitemap-index.xml', 'rss.xml', 'llms.txt', 'llms-full.txt']) {
  if (!existsSync(join(DIST, f))) fail(f, 'missing');
}

if (errors.length) {
  console.error(`SEO validation failed (${errors.length}):\n` + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log(`SEO validation passed: ${pages.length} pages checked.`);
