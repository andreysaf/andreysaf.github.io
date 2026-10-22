// JSON-LD builders. Every entity has a stable @id so search and answer engines
// can connect Andrey, Solunar, OpenStrata and OpenCommunity into one graph.
import { SITE, PERSON, SOLUNAR, PRODUCTS, type Product } from '../data/site';
import { TIMELINE } from '../data/timeline';

const abs = (path: string) => new URL(path, SITE.url).toString();

export const IDS = {
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
  solunar: `${SOLUNAR.url}/#organization`,
  product: (p: Product) => `${p.url}/#software`,
};

export function personNode() {
  return {
    '@type': 'Person',
    '@id': IDS.person,
    name: PERSON.name,
    url: SITE.url,
    image: abs(SITE.image),
    jobTitle: PERSON.jobTitle,
    description: PERSON.summary,
    worksFor: { '@id': IDS.solunar },
    address: { '@type': 'PostalAddress', addressLocality: 'Vancouver', addressRegion: 'BC', addressCountry: 'CA' },
    sameAs: PERSON.sameAs,
    knowsAbout: PERSON.knowsAbout,
    alumniOf: TIMELINE.filter((r) => !['solunar', 'safas'].includes(r.id) && r.orgUrl).map((r) => ({
      '@type': 'Organization',
      name: r.org,
      url: r.orgUrl,
    })),
  };
}

export function solunarNode() {
  return {
    '@type': 'Organization',
    '@id': IDS.solunar,
    name: SOLUNAR.name,
    url: SOLUNAR.url,
    description: SOLUNAR.description,
    slogan: SOLUNAR.tagline,
    founder: { '@id': IDS.person },
    areaServed: { '@type': 'AdministrativeArea', name: 'British Columbia, Canada' },
    address: { '@type': 'PostalAddress', addressRegion: 'BC', addressCountry: 'CA' },
    brand: PRODUCTS.map((p) => ({ '@type': 'Brand', name: p.name, url: p.url })),
    owns: PRODUCTS.map((p) => ({ '@id': IDS.product(p) })),
  };
}

export function productNode(p: Product) {
  return {
    '@type': 'SoftwareApplication',
    '@id': IDS.product(p),
    name: p.name,
    url: p.url,
    description: p.oneLiner,
    slogan: p.tagline,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: p.category,
    operatingSystem: 'Web browser',
    areaServed: { '@type': 'AdministrativeArea', name: 'British Columbia, Canada' },
    audience: p.audience.map((a) => ({ '@type': 'Audience', audienceType: a })),
    featureList: p.features,
    publisher: { '@id': IDS.solunar },
    creator: { '@id': IDS.person },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': IDS.website,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'en-CA',
    publisher: { '@id': IDS.person },
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqNode(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function timelineNode() {
  return {
    '@type': 'ItemList',
    name: `${PERSON.name}: work history`,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: TIMELINE.filter((r) => !r.undated).map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'OrganizationRole',
        roleName: r.positions[0].title,
        startDate: r.positions.at(-1)!.start,
        ...(r.positions[0].end ? { endDate: r.positions[0].end } : {}),
        memberOf: { '@type': 'Organization', name: r.org, ...(r.orgUrl ? { url: r.orgUrl } : {}) },
      },
    })),
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
