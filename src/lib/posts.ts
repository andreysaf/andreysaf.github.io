import { getCollection, type CollectionEntry } from 'astro:content';
import { EXTERNAL_POSTS } from '../data/external-posts';
import type { CardPost } from '../components/PostCard.astro';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const postUrl = (p: Post) => `/blog/${p.id}`;
export const ogUrl = (p: Post) => `/og/blog/${p.id}.png`;

export function readingMinutes(body = '') {
  return Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 230));
}

export async function getAllCards(): Promise<CardPost[]> {
  const local: CardPost[] = (await getPosts()).map((p) => ({
    title: p.data.title,
    description: p.data.description,
    pubDate: p.data.pubDate,
    href: postUrl(p),
    image: p.data.heroImage ?? ogUrl(p),
    imageAlt: p.data.heroAlt ?? '',
    tags: p.data.tags,
  }));
  const external: CardPost[] = EXTERNAL_POSTS.map((p) => ({
    title: p.title,
    description: p.description,
    pubDate: p.pubDate,
    href: p.url,
    external: p.publisher,
    image: p.heroImage,
    imageAlt: p.heroAlt,
    tags: p.tags,
  }));
  return [...local, ...external].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}
