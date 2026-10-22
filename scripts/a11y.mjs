// Runs axe-core (WCAG 2.0/2.1/2.2 A, AA and AAA rules) against every built page,
// in light and dark colour schemes, at desktop and phone widths.
// Usage: pnpm build && node scripts/a11y.mjs  (set CHROME_PATH to use a specific browser)
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const AXE = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const DIST = new URL('../dist/', import.meta.url).pathname;
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain' };

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const pages = walk(DIST)
  .filter((f) => f.endsWith('.html'))
  .map((f) => '/' + relative(DIST, f).replace(/\.html$/, '').replace(/^index$/, ''));

const server = createServer((req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]).replace(/^\//, '');
  const file = [path, `${path}.html`, join(path, 'index.html')].map((p) => join(DIST, p)).find((p) => existsSync(p) && statSync(p).isFile());
  if (!file) return res.writeHead(404).end();
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const tags = ['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21a', 'wcag21aa', 'wcag21aaa', 'wcag22aa', 'wcag22aaa', 'best-practice'];
let failures = 0;

for (const colorScheme of ['light', 'dark']) {
  for (const viewport of [{ width: 1280, height: 900 }, { width: 375, height: 800 }]) {
    const ctx = await browser.newContext({ colorScheme, viewport });
    const page = await ctx.newPage();
    // Keep analytics out of the test run.
    await page.route(/googletagmanager|google-analytics/, (r) => r.abort());
    for (const path of pages) {
      await page.goto(base + path, { waitUntil: 'load' });
      await page.addScriptTag({ content: AXE });
      const result = await page.evaluate(async (runOnly) => {
        // eslint-disable-next-line no-undef
        const r = await axe.run(document, { runOnly: { type: 'tag', values: runOnly } });
        return r.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 3).map((n) => n.target.join(' ')) }));
      }, tags);
      // axe's color-contrast-enhanced rule under-reports, so enforce AAA contrast (1.4.6) directly:
      // 7:1 for normal text, 4.5:1 for large text (>= 24px, or >= 18.66px bold).
      const lowContrast = await page.evaluate(() => {
        const rgb = (s) => (s.match(/[\d.]+/g) || []).map(Number);
        const lum = ([r, g, b]) => {
          const f = (c) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
          return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
        };
        const bgOf = (el) => {
          for (let e = el; e; e = e.parentElement) {
            const c = rgb(getComputedStyle(e).backgroundColor);
            if (c.length === 3 || (c.length === 4 && c[3] === 1)) return c.slice(0, 3);
          }
          return [255, 255, 255];
        };
        const bad = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const seen = new Set();
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          const el = n.parentElement;
          if (!n.textContent.trim() || seen.has(el) || el.closest('pre, .astro-code')) continue;
          seen.add(el);
          const cs = getComputedStyle(el);
          const box = el.getBoundingClientRect();
          if (cs.visibility === 'hidden' || box.width === 0 || box.height === 0) continue;
          const size = parseFloat(cs.fontSize);
          const large = size >= 24 || (size >= 18.66 && Number(cs.fontWeight) >= 700);
          const [a, b] = [lum(rgb(cs.color).slice(0, 3)), lum(bgOf(el))];
          const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
          if (ratio < (large ? 4.5 : 7)) bad.push(`${el.tagName.toLowerCase()} "${n.textContent.trim().slice(0, 40)}" ${ratio.toFixed(2)}:1`);
        }
        return bad;
      });
      if (lowContrast.length) result.push({ id: 'contrast-aaa', impact: 'serious', help: 'Text below 7:1 (AAA) contrast', nodes: lowContrast.slice(0, 5) });
      // No horizontal scrolling at phone width (WCAG 1.4.10 reflow).
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (overflow) result.push({ id: 'reflow', impact: 'serious', help: 'Page scrolls horizontally', nodes: [] });
      for (const v of result) {
        failures++;
        console.log(`[${colorScheme} ${viewport.width}px] ${path || '/'}: ${v.id} (${v.impact}) ${v.help}\n    ${v.nodes.join('\n    ')}`);
      }
    }
    await ctx.close();
  }
}

await browser.close();
server.close();
if (failures) {
  console.error(`\n${failures} accessibility violation(s).`);
  process.exit(1);
}
console.log(`Accessibility check passed: ${pages.length} pages × 2 colour schemes × 2 widths, WCAG A/AA/AAA rules.`);
