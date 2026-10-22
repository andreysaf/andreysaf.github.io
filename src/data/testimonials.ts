// Public LinkedIn comments, lightly trimmed but not reworded.

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  context: 'customer' | 'leadership' | 'colleague';
  era: 'aspire' | 'apryse';
  relatesTo?: string; // timeline sub-company name, used for inline placement
  featured?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  // Aspire era
  {
    id: 'nathan-schrider',
    quote:
      'The growth you oversaw at DockMaster revolutionized the game for marina management. It was an honor to work with you!',
    name: 'Nathan Schrider',
    title: 'Operations Manager, West Alton Marina',
    context: 'customer',
    era: 'aspire',
    relatesTo: 'DockMaster Software',
    featured: true,
  },
  {
    id: 'kareem-johnson',
    quote:
      'It was always a pleasure to work with you. The tech innovations that you brought to DM was truly amazing.',
    name: 'Kareem Johnson',
    title: 'Spar Yard Marine Solutions',
    context: 'customer',
    era: 'aspire',
    relatesTo: 'DockMaster Software',
    featured: true,
  },
  {
    id: 'ali-hussein',
    quote:
      'Andrey led with more care than anyone I’ve worked for. Genuinely invested in the work, and more invested in the people doing it. That combination is rarer than it should be.',
    name: 'Ali Hussein',
    title: 'AI Product Engineer, Aspire Software',
    context: 'colleague',
    era: 'aspire',
    featured: true,
  },
  {
    id: 'elie-haddad',
    quote:
      'You were one of the most important people in my Aspire journey, from being the person who gave me the opportunity to join Aspire to someone I learned so much from. I’ve always admired how smart you are, the way you lead, and the way you approach problems.',
    name: 'Elie Haddad',
    title: 'AI Product Manager',
    context: 'colleague',
    era: 'aspire',
  },
  {
    id: 'david-fester',
    quote:
      'You were a great mentor and fountain of knowledge that helped shape my career in the Product world.',
    name: 'David Fester',
    title: 'Product Owner',
    context: 'colleague',
    era: 'aspire',
  },
  {
    id: 'julian-ertelt-aspire',
    quote:
      'Congratulations on completing such a massive chapter, and helping define how to deeply leverage AI to build successful businesses.',
    name: 'Julian Ertelt',
    title: 'AI Product Marketing Leader',
    context: 'colleague',
    era: 'aspire',
  },
  {
    id: 'charles-saroufim',
    quote: 'You deserve the best brother, and you’ll shine wherever you decide to land.',
    name: 'Charles Saroufim',
    title: 'Head of Development Department, PhD in AI',
    context: 'colleague',
    era: 'aspire',
  },
  {
    id: 'hussein-baalbaki',
    quote: 'It was a great honor working with you. I hope we can collaborate more in future projects.',
    name: 'Hussein Baalbaki',
    title: 'Senior Software Engineer',
    context: 'colleague',
    era: 'aspire',
  },

  // Apryse era
  {
    id: 'catherine-andersz',
    quote:
      'Thank you for the incredible level of energy, dedication and positivity you brought to everything you worked on. It’s been an absolute pleasure to collaborate with you and to see you grow throughout the years. You’ve been integral to our success, and to promoting the culture at PDFTron we greatly valued!',
    name: 'Catherine Andersz',
    title: 'Co-Founder & Former CEO, Apryse (PDFTron)',
    context: 'leadership',
    era: 'apryse',
    featured: true,
  },
  {
    id: 'ivan-nincic',
    quote:
      'Your hard work, dedication, and proactive contributions have been integral to our growth and success. You’ve consistently brought an unmatched level of professionalism and creativity to your work, which has inspired those around you.',
    name: 'Ivan Nincic',
    title: 'Founder & Former CTO, PDFTron (Apryse) & Xodo',
    context: 'leadership',
    era: 'apryse',
  },
  {
    id: 'max-ferguson',
    quote:
      'It has been a pleasure working with you over the last few years and I hope our paths cross again sometime in the future.',
    name: 'Max Ferguson',
    title: 'Founder & CEO, Lumin',
    context: 'customer',
    era: 'apryse',
  },
  {
    id: 'suyash-kawna',
    quote: 'It was great collaborating with you during our PDFTron Salesforce implementation.',
    name: 'Suyash Kawna',
    title: 'Salesforce Developer, DocuSign',
    context: 'customer',
    era: 'apryse',
  },
  {
    id: 'julian-ertelt-apryse',
    quote:
      'You were a real inspiration to work with, someone who truly leads by example and brings a unique genuine enthusiasm that never failed to align and invigorate people for success!',
    name: 'Julian Ertelt',
    title: 'Product Marketing, Apryse',
    context: 'colleague',
    era: 'apryse',
  },
  {
    id: 'jordan-brook',
    quote: 'You’re a rare talent, an outstanding leader and a wonderfully genuine person.',
    name: 'Jordan Brook',
    title: 'Former colleague, Apryse (PDFTron)',
    context: 'colleague',
    era: 'apryse',
  },
  {
    id: 'stephen-yao',
    quote: 'You’re a true talent, an amazing leader and so key to corporate culture.',
    name: 'Stephen Yao',
    title: 'Product Marketer',
    context: 'colleague',
    era: 'apryse',
  },
  {
    id: 'elma-khandaker',
    quote: 'You have been an inspiring mentor and leader for all of us. It has been a pleasure being on your team.',
    name: 'Elma Khandaker',
    title: 'Product Manager (Apryse product team)',
    context: 'colleague',
    era: 'apryse',
  },
  {
    id: 'candice-cheng',
    quote: 'Thanks Andrey for all your support and leadership. You’ll be dearly missed.',
    name: 'Candice Cheng',
    title: 'Product Manager (Apryse product team)',
    context: 'colleague',
    era: 'apryse',
  },
];

export const FEATURED = TESTIMONIALS.filter((t) => t.featured);
