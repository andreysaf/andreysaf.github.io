// Plain-markdown summaries for LLM crawlers (llms.txt convention).
import { SITE, PERSON, SOLUNAR, PRODUCTS, SAFAS, SOCIAL } from '../data/site';
import { TIMELINE, fmtMonth, roleRange } from '../data/timeline';
import { EXTERNAL_POSTS } from '../data/external-posts';
import { getPosts, postUrl } from './posts';

const abs = (p: string) => new URL(p, SITE.url).toString();

export async function llmsIndex() {
  const posts = await getPosts();
  return [
    `# ${PERSON.name}`,
    '',
    `> ${PERSON.summary}`,
    '',
    '## Current work',
    `- [${SOLUNAR.name}](${SOLUNAR.url}): ${SOLUNAR.description}`,
    ...PRODUCTS.map((p) => `- [${p.name}](${p.url}): ${p.oneLiner} Founder's notes: ${abs(`/work/${p.slug}`)}`),
    `- [${SAFAS.name}](${SAFAS.url}) (co-founder): ${SAFAS.oneLiner}`,
    '',
    '## Pages',
    `- [About & career timeline](${abs('/about')}): full work history with stories and testimonials`,
    `- [Portfolio](${abs('/portfolio')}): products built and launched`,
    `- [Blog](${abs('/blog')})`,
    `- [Full text for LLMs](${abs('/llms-full.txt')})`,
    '',
    '## Posts',
    ...posts.map((p) => `- [${p.data.title}](${abs(postUrl(p))}): ${p.data.description}`),
    ...EXTERNAL_POSTS.map((p) => `- [${p.title}](${p.url}) (on ${p.publisher}): ${p.description}`),
    '',
    '## Profiles',
    `- LinkedIn: ${SOCIAL.linkedin}`,
    `- GitHub: ${SOCIAL.github}`,
    `- Medium: ${SOCIAL.medium}`,
    '',
  ].join('\n');
}

export async function llmsFull() {
  const posts = await getPosts();
  const timeline = TIMELINE.map((r) => {
    const { start, end } = roleRange(r);
    const lines = [r.undated ? `### ${r.org}` : `### ${r.org} (${fmtMonth(start)} – ${fmtMonth(end)})`, r.context, ''];
    for (const p of r.positions) {
      lines.push(r.undated ? `**${p.title}**` : `**${p.title}** (${fmtMonth(p.start)} – ${fmtMonth(p.end)})`);
      p.bullets?.forEach((b) => lines.push(`- ${b}`));
    }
    r.highlights?.forEach((h) => lines.push(`- ${h}`));
    r.ventures?.forEach((v) => lines.push(`- Venture: **${v.name}** (${v.industry}, ${v.period}): ${v.story}`));
    r.portfolio?.forEach((c) => lines.push(`- Portfolio: **${c.name}** (${c.industry})${c.role ? `, ${c.role}` : ''}: ${c.story}`));
    return lines.join('\n');
  });
  return [
    await llmsIndex(),
    '## Career timeline',
    '',
    ...timeline.map((t) => t + '\n'),
    '## Posts (full text)',
    '',
    ...posts.map((p) => `### ${p.data.title}\n${abs(postUrl(p))} · ${p.data.pubDate.toISOString().slice(0, 10)}\n\n${p.data.tldr ? `TL;DR: ${p.data.tldr}\n\n` : ''}${p.body ?? ''}\n`),
  ].join('\n');
}
