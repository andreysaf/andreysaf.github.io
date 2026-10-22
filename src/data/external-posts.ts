// Writing published elsewhere. Merged into the blog index alongside local posts.
export type ExternalPost = {
  title: string;
  description: string;
  pubDate: Date;
  url: string;
  heroImage: string;
  heroAlt: string;
  publisher: string;
  tags: string[];
};

export const EXTERNAL_POSTS: ExternalPost[] = [
  {
    title: 'Real-Time AI-Generated Deepfakes Are Here',
    description:
      'Deepfake technology has moved from theory to a real threat in live virtual meetings. Here is what that means for trust on video calls.',
    pubDate: new Date('2024-09-23'),
    url: 'https://safas.io/blog/real-time-ai-generated-deepfakes-in-meetings',
    heroImage: '/cases/ggglitch.svg',
    heroAlt: 'Glitched abstract pattern',
    publisher: 'SAFAS',
    tags: ['AI', 'Security'],
  },
  {
    title: 'How to Build a React PDF Viewer',
    description: 'A walkthrough of building your own React PDF viewer.',
    pubDate: new Date('2023-06-16'),
    url: 'https://apryse.com/blog/build-custom-react-pdf-viewer',
    heroImage: '/blog/react-viewer-blog.png',
    heroAlt: 'React PDF viewer screenshot',
    publisher: 'Apryse',
    tags: ['Engineering', 'Documents'],
  },
  {
    title: 'DOCX Editor Launch',
    description: 'The launch post for the Apryse DOCX Editor, covering its features and differentiators.',
    pubDate: new Date('2023-05-29'),
    url: 'https://apryse.com/blog/webviewer/docx-editor-release',
    heroImage: '/blog/docx-launch.png',
    heroAlt: 'DOCX Editor in the browser',
    publisher: 'Apryse',
    tags: ['Product launch', 'Documents'],
  },
  {
    title: 'Digital Signatures Release',
    description: 'Release post for digital signature workflows in Apryse WebViewer.',
    pubDate: new Date('2022-09-22'),
    url: 'https://apryse.com/blog/webviewer/create-easy-custom-signature-workflows',
    heroImage: '/blog/signature.png',
    heroAlt: 'Signature workflow screenshot',
    publisher: 'Apryse',
    tags: ['Product launch', 'Documents'],
  },
  {
    title: 'What Is a Technical Solutions Engineer?',
    description:
      'What a solutions engineer does, why the role matters in SaaS, and how to become one.',
    pubDate: new Date('2019-08-24'),
    url: 'https://andreysaf.medium.com/what-is-a-technical-solutions-engineer-e3d4324efec',
    heroImage: '/blog/what-is-technical-solutions.jpeg',
    heroAlt: 'MacBook keyboard',
    publisher: 'Medium',
    tags: ['Career'],
  },
  {
    title: 'How to Run a Meeting in Ten Easy Steps',
    description: 'Meetings can be fun and productive. Ten steps to get there.',
    pubDate: new Date('2019-03-24'),
    url: 'https://medium.com/@andreysaf/how-to-run-a-meeting-in-ten-easy-steps-81b3323f3f7a',
    heroImage: '/blog/fist-bump.jpeg',
    heroAlt: 'People fist bumping',
    publisher: 'Medium',
    tags: ['Leadership'],
  },
];
