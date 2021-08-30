import Head from 'next/head';
import React from 'react';
import {
  Heading,
  Image,
  Text,
  Container,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from '@chakra-ui/react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const WebViewer = () => {
  return (
    <Layout>
      <Head>
        <title>
          How to transition to product management from solution engineering?
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Description"
          content="Learn what skills carry over and where an additional training is required to transition to product management."
        />
      </Head>
      <Navbar />
      <Container maxW={'7xl'} p="12">
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Breadcrumb mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                How to transition to product management
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1">
            How to transition to product management from solution engineering?
          </Heading>
          <Text as="p" fontSize="sm">
            August 29th, 2021
          </Text>
          <Image
            objectFit="cover"
            src="/blog/transition-to-product.jpg"
            alt="Protyping a wireframe"
            padding={10}
          />
          <Text as="p" fontSize="lg">
            In the{' '}
            <Link href="https://andreysaf.medium.com/what-is-a-technical-solutions-engineer-e3d4324efec">
              previous blog
            </Link>
            , we have discussed what is technical solution engineer as well as
            what are different career paths one can take to get there. In this
            blog, we will focus on one possible career path for a solutions
            engineer.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            How product management is different from solution engineering?
          </Heading>
          <Heading as="h4" size="sm" pt={5}>
            Focus
          </Heading>
          <Text as="p" fontSize="lg">
            As a solution engineer, your main focus is your prospects, potential
            buyers or customers. Your goal is to ensure that the product or set
            of products are configured and work in a way that provides them
            value and meets their requirements. You are constantly tweaking,
            adjusting and extending existing features just to make it work for
            their must-haves and nice-to-haves.
          </Text>
          <Text as="p" fontSize="lg">
            As a product manager, you are less focused on a single deal or a
            customer. Instead, you are looking holistically at potential
            prospects, customers, end-users. Your main focus is ensuring that
            the product with all of its features is solving user pain.
          </Text>
          <Heading as="h4" size="sm" pt={5}>
            Calls and meetings
          </Heading>
          <Text as="p" fontSize="lg">
            As a solution engineer, you are present on discovery calls and
            technical support calls, through which you gather the prospect's
            requirements and provide them with value propositions. The value
            proposition will explain how your product is able to solve their
            pain in a way that competitors won't. The value proposition itself
            comes from the product manager and closely aligns with company
            vision.
          </Text>
          <Text as="p" fontSize="lg">
            As a product manager, your responsibilities include attending not
            just discovery calls, but also support, renewals, solution reviews,
            focus groups, user experience testing and customer connects. This is
            all aside from all internal meetings. It is important to have a
            direct connection to your users and be able to ask them questions
            about their pains.
          </Text>
          <Heading as="h4" size="sm" pt={5}>
            Feedback
          </Heading>
          <Text as="p" fontSize="lg">
            As a solution engineer, you provide feedback on what features need
            to be built or improved, however as a product manager, you are
            intaking the feedback from several of the data sources and applying
            various prioritization techniques to get the buy-in from all the
            stakeholders in the company to decide on the roadmap.
          </Text>
          <Text as="p" fontSize="lg">
            During the proof of concept stage, solution engineer or the prospect
            will spot any difficulties or gaps in your product offering. It
            could be that some of the APIs are missing, written poorly, or are
            not compatible with their use cases, or that there are limitations
            with the infrastructure or framework that they are deploying your
            solution on. After the PoC is completed, the prospect will test with
            their users. Users will quickly spot what works well and what does
            not. And whether or not, the UI makes sense and provides a great
            user experience for their use case. During this time, it is
            important to capture as much information as possible about the
            product's gaps, limitations, use cases and drive the feedback back
            to the teams.
          </Text>
          <Heading as="h4" size="sm" pt={5}>
            Cross-team collaboration
          </Heading>
          <Text as="p" fontSize="lg">
            As a solution engineer, you are mainly working together with sales,
            product management and development teams. You provide training to
            the sales reps, provide feedback to the product manamement teams,
            and seek technical advice from the developers on how to configure
            the solution.
          </Text>
          <Text as="p" fontSize="lg">
            As a product manager, you are working with all teams. You are
            collecting feedback from customer facing teams like sales, support,
            customer success, and others. You are brainstorming ideas, rapidly
            prototyping with design and development teams during the planning
            stages of the sprint. You are working with development team to
            accept items from the backlog into the development sprint and
            agreeing on timelines. You are clarifying and resolving any issues
            during the development. You are working together with marketing
            teams to clarify value props and to create content that will explain
            the value proposition to the world. You are working with legal to
            ensure you are in compliance with all laws and regulations. You are
            creating sales enablement materials and providing training to
            solution engineers and sales.
          </Text>
          <Heading as="h4" size="sm" pt={5}>
            Performance
          </Heading>
          <Text as="p" fontSize="lg">
            As a solution engineer, performance is usually measured based on the
            volume of deals closed.
          </Text>
          <Text as="p" fontSize="lg">
            It is trickier to measure performance for a product manager. One of
            the ways, I hold myself accountable is that for every feaure or an
            initiative I use OKRs or Objective Key Results. You set the
            qualitative objective, and come up with quantative key results. It
            sounds easy, however, it takes time to master coming up with good
            objectives and ways to measure their success. Part of coming up with
            the objective, is to define the why behind it. Why is it important?
            Using OKR framework, it become easy to track your performance and
            see if you are successful in meeting your key results.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
