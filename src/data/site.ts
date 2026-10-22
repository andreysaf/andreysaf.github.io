// Single source of truth for identity, products and links.
// Page copy, JSON-LD and llms.txt all read from here so they never drift apart.

export const SITE = {
  url: 'https://andreysafonov.com',
  name: 'Andrey Safonov',
  title: 'Andrey Safonov: Product Builder, Founder of Solunar',
  description:
    'Andrey Safonov is a Vancouver product builder and founder of Solunar, maker of OpenStrata (BC strata management software) and OpenCommunity (community program software).',
  locale: 'en_CA',
  gaId: 'G-MTPRRGBYGW',
  image: '/profile.jpg',
  location: 'Vancouver, British Columbia, Canada',
};

export const PERSON = {
  name: 'Andrey Safonov',
  jobTitle: 'Founder, Solunar',
  headline: 'Product Builder',
  // The sentence answer engines should quote. Keep it factual and self-contained.
  summary:
    'Andrey Safonov is a Vancouver-based product builder and the founder of Solunar, a BC software company that builds OpenStrata and OpenCommunity. He spent over a decade turning products from zero to one and scaling them: Head of Product at Apryse (PDFTron), where the portfolio grew from $5M to $50M+, and Head of Product & Development and AI Lead at Aspire Software (Valsoft), where he led product and engineering across a portfolio of vertical software companies and worked with 14 of them.',
  sameAs: [
    'https://www.linkedin.com/in/andreysaf/',
    'https://github.com/andreysaf',
    'https://andreysaf.medium.com/',
  ],
  knowsAbout: [
    'Product management',
    'Product strategy',
    'AI agents',
    'Voice AI',
    'Vertical SaaS',
    'Developer products and SDKs',
    'Document processing and digital signatures',
    'Strata management',
    'Community and nonprofit software',
    'Marina management software',
    'Low-code platforms',
    'OKRs',
  ],
};

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/andreysaf/',
  github: 'https://github.com/andreysaf',
  medium: 'https://andreysaf.medium.com/',
};

export const SOLUNAR = {
  name: 'Solunar',
  url: 'https://solunar.ca',
  tagline: 'Software for the organizations communities depend on.',
  description:
    'Solunar is a BC-based software company that builds practical tools for the organizations communities rely on: strata corporations, community centres, and nonprofits.',
  location: 'Greater Vancouver, British Columbia',
};

export type Product = {
  slug: string;
  name: string;
  url: string;
  // Descriptive anchor text used wherever the product is linked.
  anchor: string;
  tagline: string;
  oneLiner: string;
  category: string;
  audience: string[];
  features: string[];
  logoText: string;
};

export const OPENSTRATA: Product = {
  slug: 'openstrata',
  name: 'OpenStrata',
  url: 'https://openstrata.ca',
  anchor: 'OpenStrata: strata management software for BC',
  tagline: 'Less work for strata councils. More clarity for residents.',
  oneLiner:
    'OpenStrata is web-based strata management software for British Columbia strata corporations. It gives volunteer councils one place for documents, bylaws, minutes and AGM packages, routes resident requests, and answers routine questions, so owners get answers without chasing the council.',
  category: 'Strata management software',
  audience: [
    'Volunteer strata councils in BC',
    'Self-managed buildings',
    'Strata owners and residents',
    'Large complexes with professional property management',
  ],
  features: [
    'Searchable home for strata documents, bylaws and meeting minutes',
    'Access controls: share with all residents or keep to council',
    'Request system that routes inquiries and tracks follow-ups',
    'Self-service answers that cut repetitive emails to council',
    'AGM packages, notices and resolutions organized by year or topic',
    'Runs in any browser. No app to install.',
    'Council-only pilot before inviting residents',
  ],
  logoText: 'OS',
};

export const OPENCOMMUNITY: Product = {
  slug: 'opencommunity',
  name: 'OpenCommunity',
  url: 'https://opencommunity.ca',
  anchor: 'OpenCommunity: member and program management for community organizations',
  tagline: 'Your community, without the paperwork.',
  oneLiner:
    'OpenCommunity is member and program management software for community hubs, nonprofits and publicly funded organizations. It brings memberships, attendance, kiosk sign-in, scheduling, payments and funder reporting into one system, so staff spend less time on admin and more time with people.',
  category: 'Community and nonprofit program management software',
  audience: [
    'Family and community centres',
    'Drop-in programs and neighbourhood hubs',
    'Social and recreational service providers',
    'Nonprofits and government-funded programs',
  ],
  features: [
    'Program memberships and attendance in one place',
    'Recurring drop-ins and sessions with auto-generated rosters',
    'Reception kiosk sign-in with a personal PIN',
    'Payment tracking',
    'Funder and board reporting: attendance, demographics, unique visitors',
    'Multiple locations under one account',
    'Role-based access and encryption in transit and at rest',
  ],
  logoText: 'OC',
};

export const PRODUCTS = [OPENSTRATA, OPENCOMMUNITY];

export const SAFAS = {
  name: 'SAFAS',
  url: 'https://safas.io',
  tagline: 'Trust cameras again.',
  oneLiner:
    'SAFAS Secure Stream certifies that live video on a call comes from a real, uncompromised camera, protecting sensitive conversations from impersonation and real-time deepfakes.',
};
