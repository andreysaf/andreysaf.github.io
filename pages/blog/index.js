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

const blogs = [
  {
    key: 'react-ga-guide',
    title: `Migrate Next.js app to GA4 using react-ga`,
    desc: 'In this blog we will go over how to transition your Next.js web app to Google Analytics 4 using react-ga4.',
    date: 'May 27th, 2023',
    imagePath: '/blog/next-js-ga4.jpeg',
    imageAlt: 'Next.js logo and Google Analytics logo from Wiki Commons',
    external: false,
    link: '/blog/how-to-migrate-nextjs-react-ga4',
  },
  {
    key: 'okr-guide',
    title: `Product Manager's Guide to Writing OKRs`,
    desc: 'OKR is a goal setting framework. In this blog, I will share my tips and tricks that I use everyday when writing OKRs.',
    date: 'June 11th, 2022',
    imagePath: '/blog/objective.jpg',
    imageAlt: 'objective of a photo camera',
    external: false,
    link: '/blog/product-manager-guide-to-okrs',
  },
  {
    key: 'pm-vs-se',
    title: 'How is product management different from solution engineering?',
    desc: 'In the previous blog, we have discussed the role of a technical solution engineer as well as different career paths one can take to become one. In this blog, we will focus on one possible career path for a solutions engineer. ',
    date: 'September 6th, 2021',
    imagePath: '/blog/transition-to-product.jpg',
    imageAlt: 'prototyping wireframe',
    external: false,
    link: '/blog/how-to-transition-to-product-management',
  },
  {
    key: 'what-is-se',
    title: 'What is a technical solutions engineer?',
    desc: 'Outside of SaaS companies, a lot of people do not know what is a Solutions Engineer. The title is intriguing and mysterious. In this article, we will break down what is a Solutions Engineer, what is the role of a Solutions engineer and how to become one.',
    date: 'August 24th, 2019',
    imagePath: '/blog/what-is-technical-solutions.jpeg',
    imageAlt: 'macbook keyboard',
    external: true,
    link: 'https://andreysaf.medium.com/what-is-a-technical-solutions-engineer-e3d4324efec',
  },
  {
    key: 'meetings',
    title: 'How to run a meeting in ten easy steps?',
    desc: 'Have you ever dreaded going to a meeting? Does your mood drop every time the word “meeting” is mentioned? If done properly, meetings can be fun and productive. We will go over how to get there in ten easy steps.',
    date: 'March 24th, 2019',
    imagePath: '/blog/fist-bump.jpeg',
    imageAlt: 'people are fist bumping',
    external: true,
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
              <BreadcrumbLink href="#">Blog</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1" paddingBottom="20px">Blog</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
            {blogs.map((blog) => {
              return <BlogCard key={blog.key} {...blog} />
            })}
          </SimpleGrid>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Blog;
