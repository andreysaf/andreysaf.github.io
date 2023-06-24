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

const blogs = [
  {
    key: 'react-pdf-viewer',
    title: `How to build a React PDF Viewer`,
    desc: 'Blog walking you through how to build your own React PDF Viewer.',
    date: 'June 16th, 2023',
    imagePath: '/blog/react-viewer-blog.png',
    imageAlt: 'Next.js logo and Google Analytics logo from Wiki Commons',
    external: true,
    link: 'https://apryse.com/blog/build-custom-react-pdf-viewer',
  },
  {
    key: 'docx-launch-blog',
    title: `DOCX Editor Launch Blog`,
    desc: 'Launch blog for DOCX editor, walking you through features and differentiators.',
    date: 'May 29th, 2023',
    imagePath: '/blog/docx-launch.png',
    imageAlt: 'Next.js logo and Google Analytics logo from Wiki Commons',
    external: true,
    link: 'https://apryse.com/blog/webviewer/docx-editor-release',
  },
  {
    key: 'sign-blog',
    title: `Digital Signatures Release`,
    desc: 'Release blog for Digital Signature capabilities within WebViewer product.',
    date: 'September 22nd, 2022',
    imagePath: '/blog/signature.png',
    imageAlt: 'Next.js logo and Google Analytics logo from Wiki Commons',
    external: true,
    link: 'https://apryse.com/blog/webviewer/create-easy-custom-signature-workflows',
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
            {blogs.map((blog) => {
              return <BlogCard key={blog.key} {...blog} />
            })}
          </SimpleGrid>
          <Heading as="h1" paddingTop="60px" paddingBottom="20px">GitHub</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
            {blogs.map((content) => {
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
