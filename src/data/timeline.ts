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
      'My full-time focus: a small British Columbia team that builds with its customers, not just for them.',
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
      'Part of Valsoft Corporation. Aspire owns and runs more than 165 companies that each make software for one specific industry, such as marinas, car rental or workplace safety. This is often called vertical software.',
    location: 'Vancouver, British Columbia (remote)',
    positions: [
      {
        title: 'Head of Product & Development, AI Lead',
        start: '2023-12',
        end: '2026-09',
        bullets: [
          'Built and improved software for marinas, car rental companies, theme parks, restaurants and safety teams, with a global team of about 50 designers, engineers and product managers.',
          'Led AI transformation across the portfolio as Chief Technical and Product Officer, acting as chief technology officer, chief product officer, head of product or hands-on developer, depending on what each company needed.',
          'Worked with 14 companies, learning each industry from its customers, with teams from Vancouver and Montreal to Italy, Australia, Egypt and Lebanon.',
          'Created three new products from scratch: Signiphi, BluSynq and BluMarina.',
        ],
      },
      {
        title: 'Technical Product Manager',
        start: '2023-07',
        end: '2023-12',
        bullets: ['Joined Aspire to build software for environment, health and safety, and nuclear safety teams.'],
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
          'Simple digital signatures: send documents for signing, or add signing to your own app, with documents processed privately on your device.',
      },
      {
        name: 'BluSynq',
        url: 'https://blusynq.com',
        industry: 'AI voice agents',
        role: 'Founder / Head of Product & AI',
        period: 'Mar 2026 – Sep 2026',
        story:
          'An AI front desk for marinas and entertainment parks, so no customer call goes unanswered. It answers calls, texts and emails in five languages, books slips and services, and hands off to staff when needed.',
      },
      {
        name: 'BluMarina',
        url: 'https://www.blumarina.com',
        industry: 'Agentic marina management',
        role: 'Founder / Head of Product & AI',
        period: 'Mar 2026 – Sep 2026',
        story:
          'Modern marina management that keeps customers, boats, service, inventory and payments in one place, with AI that takes on routine work.',
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
          'As head of technology, built DockMaster Web so marinas can run from anywhere: boaters pay and sign online through their own portal, and an AI assistant suggests which technician should take each job.',
        links: [{ label: 'DockMaster Web', href: 'https://www.dockmaster.com/products/dockmaster-web' }],
      },
      {
        name: 'H&L POS',
        url: 'https://hlpos.com',
        industry: 'Hospitality point-of-sale software',
        context: 'An Australian hospitality point-of-sale vendor founded in 1987, part of Valsoft since 2019.',
        story:
          'Built an AI assistant that watches for low stock, updates prices and prepares reports, so restaurant managers can focus on guests.',
      },
      {
        name: 'CORE Cashless',
        url: 'https://www.corecashless.com',
        industry: 'Ticketing & cashless payments for attractions',
        context:
          'RFID, NFC and QR cashless payments, ticketing and access control for theme parks, waterparks, family entertainment centres and venues. Acquired by Valsoft in 2025.',
        story: 'Helped the team bring AI into its products and change how it works. They have some really cool stuff cooking.',
      },
      {
        name: 'RENTALL (Thermeon)',
        url: 'https://www.rentallsoftware.com',
        industry: 'Car rental software',
        context:
          'Car rental management software used by rental brands worldwide. Thermeon was combined with sister companies under the RENTALL brand.',
        story: 'Built a mobile app that gets renters on their way faster when they drop off a car.',
      },
      {
        name: 'Guardian',
        industry: 'Safety reporting',
        context: 'Inspection, observation and safety audit reporting.',
        story: 'Rebuilt the product for the web, so safety teams can report from any browser.',
      },
      {
        name: 'S&W Technologies',
        url: 'https://www.swtechnologies.com',
        industry: 'Nuclear safety',
        context: 'Nuclear safety software from Rochester, New York, for radiological surveys, real-time radiation monitoring, inspections and compliance.',
        story:
          'Rebuilt their most critical app, which takes live readings from technicians working around radiation and calls them back to safety when levels get too high.',
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
          'Built a help and documentation site, so customers always knew what was new and how to use it. Customer satisfaction went up as a result.',
      },
      {
        name: 'Pimsoft & Fusion Data Hub',
        url: 'https://pimsoft.com',
        links: [{ label: 'Fusion Data Hub', href: 'https://www.fusiondatahub.com' }],
        industry: 'Process manufacturing',
        context: 'Sigmafine data reconciliation and production accounting for process industries, from Milan, Italy. Fusion Data Hub moves plant historian data to the cloud.',
        story: 'Helped plan and build software that keeps production data accurate in manufacturing plants.',
      },
      {
        name: 'JBL Solutions',
        industry: 'Industrial enterprise resource planning',
        context: 'Baton Rouge-based enterprise resource planning (ERP) software for gas, welding and industrial distributors.',
        story: 'Helped plan and build software for industrial gas and welding suppliers.',
      },
    ],
    testimonialEra: 'aspire',
  },
  {
    id: 'apryse',
    org: 'Apryse (formerly PDFTron)',
    orgUrl: 'https://apryse.com',
    context:
      'A Vancouver company whose tools let other software view, edit and sign PDF and Word documents. Used by Adobe, DocuSign, Microsoft, NASA and thousands of other organizations.',
    location: 'Vancouver, British Columbia',
    positions: [
      {
        title: 'Head of Product',
        start: '2021-10',
        end: '2023-07',
        bullets: [
          'Launched new products, including a DOCX Editor for editing Word documents in the browser and a tool for teams to review and comment on videos.',
          'Made the tools available inside platforms businesses already use, such as Salesforce, Appian and Mendix.',
          'Introduced simpler, pay-for-what-you-use pricing that customers found easier to say yes to.',
          'Built and mentored a team of 10 product managers, designers and marketers.',
        ],
      },
      {
        title: 'Technical Product Manager (first PM)',
        start: '2019-11',
        end: '2021-10',
        bullets: [
          'Became the company’s first product manager and built new products from scratch, including Video Collaboration and the DOCX Editor.',
          'Brought the tools to Salesforce, Appian and Mendix, so customers could add document features without writing code.',
          'Launched a secure video review product for teams that share sensitive footage.',
          'Wrote guides, examples, blog posts and videos, and ran webinars to help customers get started.',
        ],
      },
      {
        title: 'Technical Solutions Engineer',
        start: '2018-12',
        end: '2019-11',
        bullets: [
          'Sat with customers to understand what they needed, then built demos showing exactly how the tools would work for them.',
          'Worked with developers to build the features customers asked for, and supported them before and after they bought.',
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
