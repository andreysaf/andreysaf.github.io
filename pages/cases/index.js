import Head from 'next/head';
import React from 'react';
import {
  Heading,
  Flex,
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

const cases = [
  {
    title: `Updating PDFTron's Flagship Product UI`,
    desc: `WebViewer is PDFTron's flagship product that allows PDF, MS Office, image, and CAD viewing. The UI has not been updated for several years, and prospects started to notice.`,
    imagePath: '/cases/webviewer.png',
    imageAlt: 'WebViewer screenshot',
    readOnMedium: false,
    link: '/cases/updating-webviewer-ui',
  },
  {
    title: 'Adding a new product to PDFTron',
    desc: 'PDFTron has always focused on document formats. However, a lot of PDFTron customers had videos that they needed consistent UI for annotation.',
    imagePath: '/cases/video.png',
    imageAlt: 'WebViewer Video screenshot',
    readOnMedium: true,
    link: '/cases/introducing-webviewer-video',
  },
];

const CaseStudy = () => {
  const variant = useBreakpointValue({ base: 'outline', md: 'solid' });

  return (
    <Layout>
      <Head>
        <title>Case Studies</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Description'
          content="Read Andrey's case studies about product management."
        />
      </Head>
      <Navbar />
      <Container maxW={'7xl'} p={useBreakpointValue({ base: '3', md: '12' })}>
        <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
          <Breadcrumb mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Case Studies</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as='h1'>Case Studies</Heading>
          <Flex direction={useBreakpointValue({ base: 'column', md: 'row' })}>
            {cases.map((item) => {
              return <BlogCard {...item} />;
            })}
          </Flex>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default CaseStudy;
