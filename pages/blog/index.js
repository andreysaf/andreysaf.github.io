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

const blogs = [
  {
    title: 'How is product management different from solution engineering?',
    desc: 'In the previous blog, we have discussed the role of a technical solution engineer as well as different career paths one can take to become one. In this blog, we will focus on one possible career path for a solutions engineer. ',
    date: 'September 6th, 2021',
    imagePath: '/blog/transition-to-product.jpg',
    imageAlt: 'prototyping wireframe',
    readOnMedium: false,
    link: '/blog/how-to-transition-to-product-management',
  },
  {
    title: 'What is a technical solutions engineer?',
    desc: 'Outside of SaaS companies, a lot of people do not know what is a Solutions Engineer. The title is intriguing and mysterious. In this article, we will break down what is a Solutions Engineer, what is the role of a Solutions engineer and how to become one.',
    date: 'August 24th, 2019',
    imagePath: '/blog/what-is-technical-solutions.jpeg',
    imageAlt: 'macbook keyboard',
    readOnMedium: true,
    link: 'https://andreysaf.medium.com/what-is-a-technical-solutions-engineer-e3d4324efec',
  },
];

const WebViewer = () => {
  const variant = useBreakpointValue({ base: "outline", md: "solid" })

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
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
              <BreadcrumbLink href="#">Blog</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1">Blog</Heading>
          <Flex direction={useBreakpointValue({ base: "column", md: "row" })}>
            {blogs.map((blog) => {
              return <BlogCard {...blog} />;
            })}
          </Flex>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
