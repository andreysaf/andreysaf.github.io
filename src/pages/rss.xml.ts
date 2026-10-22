import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, postUrl } from '../lib/posts';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name}: Blog`,
    description: 'Product, AI, and building software for the organizations communities depend on.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.tldr ?? p.data.description,
      pubDate: p.data.pubDate,
      link: postUrl(p),
      categories: p.data.tags,
      author: 'Andrey Safonov',
    })),
    customData: '<language>en-ca</language>',
  });
}
