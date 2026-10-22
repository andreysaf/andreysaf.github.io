import type { APIRoute, GetStaticPaths } from 'astro';
import { getPosts } from '../../lib/posts';
import { renderOg } from '../../lib/og';
import { PRODUCTS } from '../../data/site';

type Props = { eyebrow: string; title: string; footer: string };

export const getStaticPaths = (async () => {
  const posts = await getPosts();
  return [
    { params: { slug: 'default' }, props: { eyebrow: 'Product Builder · Co-founder of Solunar', title: 'Building software for the organizations communities depend on', footer: 'OpenStrata · OpenCommunity' } },
    ...PRODUCTS.map((p) => ({ params: { slug: p.slug }, props: { eyebrow: `${p.name} · by Solunar`, title: p.tagline, footer: p.url.replace('https://', '') } })),
    ...posts.map((p) => ({ params: { slug: `blog/${p.id}` }, props: { eyebrow: p.data.tags[0] ?? 'Blog', title: p.data.title, footer: p.data.pubDate.getUTCFullYear().toString() } })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = async ({ props }) =>
  new Response(new Uint8Array(await renderOg(props)), { headers: { 'Content-Type': 'image/png' } });
