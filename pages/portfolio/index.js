import Head from 'next/head';
import React from 'react';
import {
  Heading,
  SimpleGrid,
  useBreakpointValue,
  Container,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import BlogCard from '../../components/blogCard';
import VideoCard from '../../components/videoCard';

const products = [
  {
    key: 'webviewer',
    title: `PDF Viewer & Editor`,
    desc: 'Embed viewing and annotating on PDFs, Office Documents, and images in any web app.',
    imagePath: '/cases/webviewer.png',
    imageAlt: 'WebViewer Screenshot',
    link: '/blog/how-to-migrate-nextjs-react-ga4',
  },
  {
    key: 'webviewer-docx',
    title: `DOCX Editor`,
    desc: 'Create and edit DOCX documents without MS Office or any server-side dependencies.',
    imagePath: '/cases/docx-editor.png',
    imageAlt: 'WebViewer Screenshot',
    link: '/blog/how-to-migrate-nextjs-react-ga4',
  },
  {
    key: 'webviewer-video',
    title: `Video Annotation`,
    desc: 'Provide feedback on videos by annotating them frame by frame. Remove audio sections.',
    imagePath: '/cases/video.png',
    imageAlt: 'WebViewer Screenshot',
    link: '/blog/how-to-migrate-nextjs-react-ga4',
  },
];

const videos = [
  {
    key: 'docx-video',
    title: `DOCX Editor Demo`,
    desc: 'Demo video walking through a new product release.',
    videoEmbed: 'https://www.youtube.com/embed/3VY1GMyL0AA',
    videoTitle: 'DOCX Editor',
  },
  {
    key: 'pdf-conference',
    title: `Dev Week Conference`,
    desc: 'Video for a Dev Week Conference comparing PDF SDKs.',
    videoEmbed: 'https://www.youtube.com/embed/rGTrcN69LR8',
    videoTitle: 'DevWeek Conference',
  },
  {
    key: 'pdf-editing',
    title: `PDF Editing Release`,
    desc: 'Video showcasing new PDF editing capability for WebViewer.',
    videoEmbed: 'https://www.youtube.com/embed/LG2H1qtJN4c',
    videoTitle: 'DevWeek Conference',
  },
  
];

const content = [
  {
    key: 'webviewer',
    title: `WebViewer`,
    desc: 'View and Annotate PDFs, Office Documents, and images in any web application.',
    date: 'May 27th, 2023',
    imagePath: '/blog/next-js-ga4.jpeg',
    imageAlt: 'Next.js logo and Google Analytics logo from Wiki Commons',
    readOnMedium: false,
    link: '/blog/how-to-migrate-nextjs-react-ga4',
  },
  {
    key: 'okr-guide',
    title: `Product Manager's Guide to Writing OKRs`,
    desc: 'OKR is a goal setting framework. In this blog, I will share my tips and tricks that I use everyday when writing OKRs.',
    date: 'June 11th, 2022',
    imagePath: '/blog/objective.jpg',
    imageAlt: 'objective of a photo camera',
    readOnMedium: false,
    link: '/blog/product-manager-guide-to-okrs',
  },
  {
    key: 'pm-vs-se',
    title: 'How is product management different from solution engineering?',
    desc: 'In the previous blog, we have discussed the role of a technical solution engineer as well as different career paths one can take to become one. In this blog, we will focus on one possible career path for a solutions engineer. ',
    date: 'September 6th, 2021',
    imagePath: '/blog/transition-to-product.jpg',
    imageAlt: 'prototyping wireframe',
    readOnMedium: false,
    link: '/blog/how-to-transition-to-product-management',
  },
  {
    key: 'what-is-se',
    title: 'What is a technical solutions engineer?',
    desc: 'Outside of SaaS companies, a lot of people do not know what is a Solutions Engineer. The title is intriguing and mysterious. In this article, we will break down what is a Solutions Engineer, what is the role of a Solutions engineer and how to become one.',
    date: 'August 24th, 2019',
    imagePath: '/blog/what-is-technical-solutions.jpeg',
    imageAlt: 'macbook keyboard',
    readOnMedium: true,
    link: 'https://andreysaf.medium.com/what-is-a-technical-solutions-engineer-e3d4324efec',
  },
  {
    key: 'meetings',
    title: 'How to run a meeting in ten easy steps?',
    desc: 'Have you ever dreaded going to a meeting? Does your mood drop every time the word “meeting” is mentioned? If done properly, meetings can be fun and productive. We will go over how to get there in ten easy steps.',
    date: 'March 24th, 2019',
    imagePath: '/blog/fist-bump.jpeg',
    imageAlt: 'people are fist bumping',
    readOnMedium: true,
    link: 'https://medium.com/@andreysaf/how-to-run-a-meeting-in-ten-easy-steps-81b3323f3f7a',
  },
];

const Blog = () => {
  const variant = useBreakpointValue({ base: "outline", md: "solid" })

  return (
    <Layout>
      <Head>
        <title>Andrey's Product Management Blogs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel='canonical' href='https://andreysafonov.com/blog' />
        <meta
          name="Description"
          content="Read Andrey's career and tech focused blogs, articles and publications."
        />
      </Head>
      <Navbar />
      <Container maxW={'7xl'} p={useBreakpointValue({ base: "3", md: "12" })}>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Breadcrumb mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1" paddingBottom="20px">Products</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
            {products.map((product) => {
              return <BlogCard key={product.key} {...product} />
            })}
          </SimpleGrid>
          <Heading as="h1" paddingTop="60px" paddingBottom="20px">Videos</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
            {videos.map((video) => {
              return <VideoCard key={video.key} {...video} />
            })}
          </SimpleGrid>
          <Heading as="h1" paddingTop="60px" paddingBottom="20px">Blogs</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
            {content.map((content) => {
              return <BlogCard key={content.key} {...content} />
            })}
          </SimpleGrid>
          <Heading as="h1" paddingTop="60px" paddingBottom="20px">GitHub</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
            {content.map((content) => {
              return <BlogCard key={content.key} {...content} />
            })}
          </SimpleGrid>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Blog;
