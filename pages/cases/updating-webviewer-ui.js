import Head from 'next/head';
import Layout from '../../components/layout';

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
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const WebViewer = () => {
  return (
    <Layout>
      <Head>
        <title>
        PDFTron's WebViewer UI & UX Update
        </title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='https://andreysafonov.com/cases/updating-webviewer-ui' />
        <meta
          name='Description'
          content="Updating PDFTron's flagship product's UI."
        />
      </Head>
      <Navbar />
      <Container maxW={'7xl'} p='12'>
        <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
          <Breadcrumb mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='/cases'>Case Studies</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>WebViewer</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as='h1'>Updating PDFTron's Flagship Product's UI</Heading>
          <Image
            objectFit='cover'
            src='/cases/webviewer.png'
            alt='Webviewer UI screenshoot'
            padding={10}
          />
          <Heading as='h3' size='md'>
            Context
          </Heading>
          <Text as='p' fontSize='lg'>
            WebViewer is PDFtron's flagship product. The UI was not updated for
            years, and customers and prospects were becoming dissatisfied. The
            deals were consistently lost to the competition. I put together a
            team of developers and designers to update WebViewer UI.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            Objective
          </Heading>
          <Text as='p' fontSize='lg'>
            Create an incremental update to WebViewer UI to make it more
            competitive with other viewers on the market.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            My Role
          </Heading>
          <Text as='p' fontSize='lg'>
            - Using the OKR framework, set the objective and establish key
            results.
          </Text>
          <Text as='p' fontSize='lg'>
            - Reached out to customers to gather feedback from their users.
          </Text>
          <Text as='p' fontSize='lg'>
            - Conducted loss survey analysis into why prospects chose
            competition.
          </Text>
          <Text as='p' fontSize='lg'>
            - Performed competitive analysis looking at vertical and horizontal competitors.
          </Text>
          <Text as='p' fontSize='lg'>
            - Got alignment from internal stakeholders to agree on designs and
            timelines.
          </Text>
          <Text as='p' fontSize='lg'>
            - Rapidly prototyped with designers and performed demos of the
            wireframes to reference customers.
          </Text>
          <Text as='p' fontSize='lg'>
            - Working together with the Product Owner to prioritize
            items to be accepted into the development sprint.
          </Text>
          <Text as='p' fontSize='lg'>
            - Held daily standups to track the progress and review the feedback.
          </Text>
          <Text as='p' fontSize='lg'>
            - Helped developers with the implementation of the designs to meet
            the deadlines.
          </Text>
          <Text as='p' fontSize='lg'>
            - Continued to interview, gather data and ensure we have met the key results.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            Key Results
          </Heading>
          <Text as='p' fontSize='lg'>
            - Deals were no longer lost due to dated UI and prospects preferred
            our UI over competitors.
          </Text>
          <Text as='p' fontSize='lg'>
            - The new UI was rearchitected to be more lightweight, performant
            and allowed for easier product updates and customization in the future.
          </Text>
          <Text as='p' fontSize='lg'>
            - The number of weekly downloads on npm went up by 50% after the
            update.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
