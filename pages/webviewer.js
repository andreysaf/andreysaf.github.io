import Head from 'next/head';
import Layout from '../components/layout';

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
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const WebViewer = () => {
  return (
    <Layout>
      <Head>
        <title>
          PDFTron's WebViewer Redesign - Andrey Safonov - Product Manager
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Description"
          content="Andrey Safonov - technical product manager and PDFTron's WebViewer UI redesign."
        />
      </Head>
      <Navbar />
      <Container maxW={'7xl'} p="12">
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Redesigning PDFTron's flagship product</Heading>
          <Image
            objectFit="cover"
            src="/webviewer.png"
            alt="Webviewer UI screenshoot"
            padding={10}
          />
          <Heading as="h3" size="md">
            Background
          </Heading>
          <Text as="p" fontSize="lg">
            WebViewer is PDFtron's flagship product. The UI was not updated for
            years, and customers and prospects were becoming dissatisfied. The
            deals were consistently lost to the competition. I put together a
            team of developers and designers to redesign WebViewer.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            My Role
          </Heading>
          <Text as="p" fontSize="lg">
            - Using OKR framework, set the objective and establish key results.
          </Text>
          <Text as="p" fontSize="lg">
            - Reached out to customers to gather feedback from their users.
          </Text>
          <Text as="p" fontSize="lg">
            - Conducted loss survey analysis into why prospects chose
            competition.
          </Text>
          <Text as="p" fontSize="lg">
            - Managed all internal stakeholders to agree on designs and
            timelines.
          </Text>
          <Text as="p" fontSize="lg">
            - Rapidly prototyped with designers and performing demos of the
            wireframes to reference customers.
          </Text>
          <Text as="p" fontSize="lg">
            - Working together with the Product Owner to prioritize backlog
            items to be accepted into the development sprint.
          </Text>
          <Text as="p" fontSize="lg">
            - Held daily standups to track the progress and review the feedback.
          </Text>
          <Text as="p" fontSize="lg">
            - Helped developers with the implementation of the designs to meet
            the deadline.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            Results
          </Heading>
          <Text as="p" fontSize="lg">
            - Deals were no longer lost due to dated UI and prospects preferred
            our UI over competitors.
          </Text>
          <Text as="p" fontSize="lg">
            - The new UI was rearchitected to be more lightweight, performant
            and allowed for easier product updates and customization.
          </Text>
          <Text as="p" fontSize="lg">
            - The number of weekly downloads on npm went up by 50% after the
            update.
          </Text>
        </VStack>
        <Breadcrumb mt={8}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">WebViewer</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
