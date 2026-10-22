// Work history, newest first. Rendered on /about (full) and the homepage (condensed),
// and emitted as an ItemList in JSON-LD.

export type Position = {
  title: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, omitted = present
  location?: string;
  bullets?: string[];
};

export type SubCompany = {
  name: string;
  url?: string;
  industry: string;
  context?: string;
  story: string;
  role?: string;
  period?: string;
  links?: { label: string; href: string }[];
};

export type Role = {
  id: string;
  org: string;
  orgUrl?: string;
  context: string;
  location: string;
  positions: Position[];
  highlights?: string[];
  ventures?: SubCompany[];
  portfolio?: SubCompany[];
  links?: { label: string; href: string }[];
  testimonialEra?: 'aspire' | 'apryse';
  compact?: boolean;
  undated?: boolean; // hide dates in the UI until confirmed
};

export const TIMELINE: Role[] = [
  {
    id: 'solunar',
    org: 'Solunar',
    orgUrl: 'https://solunar.ca',
    context:
      'A British Columbia software company building practical tools for the organizations communities depend on.',
    location: 'Greater Vancouver, British Columbia',
    positions: [{ title: 'Co-founder', start: '2026-10' }],
    highlights: [
      'Building OpenStrata, strata management software for British Columbia councils, owners and residents.',
      'Building OpenCommunity, member and program management for community centres, nonprofits and drop-in programs.',
      'Full-time focus after leaving Aspire: small team, AI-native development, customers in the loop from day one.',
    ],
    links: [
      { label: 'openstrata.ca', href: 'https://openstrata.ca' },
      { label: 'opencommunity.ca', href: 'https://opencommunity.ca' },
      { label: 'solunar.ca', href: 'https://solunar.ca' },
    ],
  },
  {
    id: 'safas',
    org: 'SAFAS',
    orgUrl: 'https://safas.io',
    context:
      'Video security: certifying that live camera streams on calls come from real, uncompromised devices.',
    location: 'Canada',
    positions: [{ title: 'Co-founder', start: '2024-09' }],
    highlights: [
      'Co-founded SAFAS to fight real-time deepfakes and impersonation in video meetings with SAFAS Secure Stream.',
    ],
    undated: true,
    links: [
      {
        label: 'Real-time AI-generated deepfakes are here',
        href: 'https://safas.io/blog/real-time-ai-generated-deepfakes-in-meetings',
      },
    ],
    compact: true,
  },
  {
    id: 'aspire',
    org: 'Aspire Software (Valsoft)',
    orgUrl: 'https://www.aspiresoftware.com',
    context:
      'The operating arm of Valsoft Corporation, which acquires and holds a portfolio of 165+ vertical market software companies for the long term.',
    location: 'Vancouver, British Columbia (remote)',
    positions: [
      {
        title: 'Head of Product & Development, AI Lead',
        start: '2023-12',
        end: '2026-09',
        bullets: [
          'Led product management and development across the Marina Management, Car Rental, Leisure & Entertainment and Health & Safety portfolios. Ran a global team of about 50 product managers, designers, engineering managers and developers.',
          'Led AI transformation across the portfolio as Chief Technical and Product Officer, acting as chief technology officer, chief product officer, head of product or hands-on developer, depending on what each company needed.',
          'Worked with 14 companies, with teams in Vancouver, Montreal, Texas, New York, Florida, Kansas, Colorado, Italy, Germany, the UK, Australia, Egypt and Lebanon.',
          'Created three new AI-native companies and built teams for them: Signiphi, BluSynq and BluMarina.',
        ],
      },
      {
        title: 'Technical Product Manager',
        start: '2023-07',
        end: '2023-12',
        bullets: ['Joined Aspire to own product across the environment, health and safety, and nuclear portfolio.'],
      },
    ],
    ventures: [
      {
        name: 'Signiphi',
        url: 'https://www.signiphi.ai',
        industry: 'Digital signatures',
        role: 'Founder / Head of Product & AI',
        period: 'Jul 2025 – Sep 2026',
        story:
          'Reimagined digital signatures for developers and AI agents, so signing becomes something software can call directly.',
      },
      {
        name: 'BluSynq',
        url: 'https://blusynq.com',
        industry: 'AI voice agents',
        role: 'Founder / Head of Product & AI',
        period: 'Mar 2026 – Sep 2026',
        story:
          'An AI front desk for marinas and entertainment parks. It answers calls, texts and emails in five languages, books slips and services, and hands off to staff when needed. Integrated with DockMaster, BluMarina and CORE Cashless.',
      },
      {
        name: 'BluMarina',
        url: 'https://www.blumarina.com',
        industry: 'Agentic marina management',
        role: 'Founder / Head of Product & AI',
        period: 'Mar 2026 – Sep 2026',
        story:
          'A modern, cloud-native marina management platform designed around AI agents from day one: customers, vessels, service, inventory and payments in one place.',
      },
    ],
    portfolio: [
      {
        name: 'DockMaster Software',
        url: 'https://www.dockmaster.com',
        industry: 'Marina management',
        context:
          'Management software for marinas, boatyards and boat dealerships since 1984, owned by Valsoft since 2017.',
        role: 'Chief Technology Officer',
        period: 'Jan 2025 – Sep 2026',
        story:
          'As chief technology officer, built DockMaster Web, the cloud companion to DockMaster Desktop. It adds a marina CRM, a customer self-service portal, online payments, e-signatures, service management and an AI scheduling assistant that suggests technician assignments.',
        links: [{ label: 'DockMaster Web', href: 'https://www.dockmaster.com/products/dockmaster-web' }],
      },
      {
        name: 'H&L POS',
        url: 'https://hlpos.com',
        industry: 'Hospitality point-of-sale software',
        context: 'An Australian hospitality point-of-sale vendor founded in 1987, part of Valsoft since 2019.',
        story:
          'Built an AI agent that manages low-stock inventory, updates pricing and handles reporting for venues.',
      },
      {
        name: 'CORE Cashless',
        url: 'https://www.corecashless.com',
        industry: 'Ticketing & cashless payments for attractions',
        context:
          'RFID, NFC and QR cashless payments, ticketing and access control for theme parks, waterparks, family entertainment centres and venues. Acquired by Valsoft in 2025.',
        story: 'Led the AI transformation and reshaped the team. They have some really cool stuff cooking.',
      },
      {
        name: 'RENTALL (Thermeon)',
        url: 'https://www.rentallsoftware.com',
        industry: 'Car rental software',
        context:
          'Car rental management software used by rental brands worldwide. Thermeon was combined with sister companies under the RENTALL brand.',
        story: 'Built a mobile app that checks customers out faster at vehicle drop-off.',
      },
      {
        name: 'Guardian',
        industry: 'Safety reporting',
        context: 'Inspection, observation and safety audit reporting.',
        story: 'Rebuilt the product from the ground up for the web.',
      },
      {
        name: 'S&W Technologies',
        url: 'https://www.swtechnologies.com',
        industry: 'Nuclear safety',
        context: 'Nuclear safety software from Rochester, New York, for radiological surveys, real-time radiation monitoring, inspections and compliance.',
        story:
          'Re-architected the most mission-critical app. It takes real-time readings from technicians working in radioactive environments and recalls them when levels get too high.',
      },
      {
        name: 'VisiumKMS',
        url: 'https://www.visiumkms.com',
        industry: 'Quality, health, safety and environment',
        context:
          'Houston-based quality, health, safety and environment (QHSE) and process safety management platform, formerly part of Rolls-Royce. Acquired by Valsoft in 2020.',
        role: 'Head of Product',
        period: 'Jul 2023 – Aug 2024',
        story:
          'Improved Net Promoter Score (NPS) by building a documentation platform, so customers knew what had shipped and how to use it.',
      },
      {
        name: 'Pimsoft & Fusion Data Hub',
        url: 'https://pimsoft.com',
        links: [{ label: 'Fusion Data Hub', href: 'https://www.fusiondatahub.com' }],
        industry: 'Process manufacturing',
        context: 'Sigmafine data reconciliation and production accounting for process industries, from Milan, Italy. Fusion Data Hub moves plant historian data to the cloud.',
        story: 'Product and technical leadership across the process manufacturing portfolio.',
      },
      {
        name: 'JBL Solutions',
        industry: 'Industrial enterprise resource planning',
        context: 'Baton Rouge-based enterprise resource planning (ERP) software for gas, welding and industrial distributors.',
        story: 'Product and technical leadership as the business joined the portfolio.',
      },
    ],
    testimonialEra: 'aspire',
  },
  {
    id: 'apryse',
    org: 'Apryse (formerly PDFTron)',
    orgUrl: 'https://apryse.com',
    context:
      'Vancouver-born document SDK company trusted by Adobe, DocuSign, Microsoft, NASA and thousands of others. It grew through investments from Silversmith Capital (2019) and Thoma Bravo (2021).',
    location: 'Vancouver, British Columbia',
    positions: [
      {
        title: 'Head of Product',
        start: '2021-10',
        end: '2023-07',
        bullets: [
          'Grew the product portfolio from $5M to $50M+ by launching new products, including an embeddable web DOCX Editor ($3M pipeline in its first quarter) and a cloud-native media collaboration platform.',
          'Expanded distribution through vertical marketplace partnerships with Salesforce, Mendix and Appian.',
          'Introduced consumption-based pricing, which lifted enterprise win rates from 30% to 85%.',
          'Built and led a team of 7 product managers, 2 designers and a product marketing manager.',
        ],
      },
      {
        title: 'Technical Product Manager (first PM)',
        start: '2019-11',
        end: '2021-10',
        bullets: [
          'Became the first product manager and built several 0→1 products, including Video Collaboration and the DOCX Editor.',
          'Opened a low-code channel through Salesforce, Appian and Mendix that brought in $5M in annual recurring revenue (ARR) over two years.',
          'Launched a secure video review product that reached $1M ARR in its first year.',
          'Wrote docs, guides, samples, blogs and videos, and hosted webinars and sales enablement sessions.',
        ],
      },
      {
        title: 'Technical Solutions Engineer',
        start: '2018-12',
        end: '2019-11',
        bullets: [
          'Helped account executives close 25 deals worth $3.5M in total contract value (TCV) per quarter by building proofs of concept and running demos.',
          'Worked with developers to build missing features for prospects, and supported customers before and after the sale.',
        ],
      },
    ],
    links: [
      { label: 'WebViewer', href: 'https://apryse.com/products/webviewer' },
      { label: 'DOCX Editor launch', href: 'https://apryse.com/blog/webviewer/docx-editor-release' },
    ],
    testimonialEra: 'apryse',
  },
  {
    id: 'blockstream',
    org: 'Blockstream',
    orgUrl: 'https://blockstream.com',
    context: 'Bitcoin infrastructure and hardware wallet company.',
    location: 'Victoria, British Columbia (contract)',
    positions: [{ title: 'Web Developer', start: '2018-09', end: '2018-11' }],
    highlights: ['Built the e-commerce store for Blockstream’s hardware wallets.'],
    compact: true,
  },
  {
    id: 'fast',
    org: 'Fast Enterprises',
    orgUrl: 'https://www.fastenterprises.com',
    context: 'Builds tax, revenue and benefits administration systems for governments.',
    location: 'Victoria, British Columbia',
    positions: [{ title: 'Implementation Consultant', start: '2015-08', end: '2018-12' }],
    highlights: [
      'Built the online tax filing portal for the British Columbia Ministry of Finance, which serves millions of British Columbians.',
    ],
  },
  {
    id: 'mgestyk',
    org: 'mgestyk',
    context: 'Ottawa startup building 3D gesture-control technology.',
    location: 'Ottawa, Ontario',
    positions: [{ title: 'Software Engineer', start: '2014-09', end: '2015-08' }],
    highlights: ['Worked on real-time collaborative text editing and 3D world creation with three.js.'],
    compact: true,
  },
  {
    id: 'sidense',
    org: 'Sidense',
    context: 'Semiconductor IP company making one-time programmable memory.',
    location: 'Ottawa, Ontario',
    positions: [{ title: 'Computer Engineering Intern', start: '2014-05', end: '2014-09' }],
    highlights: ['Built compilers and utilities that automate production-cycle testing.'],
    compact: true,
  },
  {
    id: 'the-source',
    org: 'The Source',
    context: 'Canadian consumer electronics retailer.',
    location: 'Ottawa, Ontario',
    positions: [{ title: 'Senior Sales Associate', start: '2011-10', end: '2015-05' }],
    highlights: ['Sold consumer electronics while studying engineering.'],
    compact: true,
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function fmtMonth(ym?: string) {
  if (!ym) return 'Present';
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export function roleRange(role: Role) {
  const starts = role.positions.map((p) => p.start).sort();
  const ends = role.positions.map((p) => p.end);
  const end = ends.includes(undefined) ? undefined : ends.sort().at(-1);
  return { start: starts[0], end };
}
