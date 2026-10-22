// Build-time Open Graph images (1200x630) rendered with satori + resvg.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const font = (w: number) => readFileSync(require.resolve(`@fontsource/inter/files/inter-latin-${w}-normal.woff`));
const fonts = [
  { name: 'Inter', data: font(400), weight: 400 as const, style: 'normal' as const },
  { name: 'Inter', data: font(700), weight: 700 as const, style: 'normal' as const },
];

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export async function renderOg({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const tree = h(
    'div',
    {
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: '72px 80px', background: '#ffffff', fontFamily: 'Inter', color: '#141414',
      borderTop: '8px solid #141414',
    },
    [
      h('div', { fontSize: 30, color: '#444444', fontWeight: 400 }, eyebrow),
      h('div', { fontSize: title.length > 60 ? 60 : 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5 }, title),
      h('div', { display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#444444' }, [
        h('div', {}, 'Andrey Safonov · andreysafonov.com'),
        h('div', {}, footer),
      ]),
    ],
  );
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  return new Resvg(svg).render().asPng();
}
