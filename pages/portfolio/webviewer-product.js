import Head from 'next/head';
import React from 'react';
import {
  Heading,
  Flex,
  Text,
  Container,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Viewer from '../../components/viewer';

const WebViewer = () => {
  return (
    <Layout>
      <Head>
        <title>Andrey Safonov - Portfolio - WebViewer</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='canonical'
          href='https://andreysafonov.com/portfolio/webviewer-product'
        />
        <meta
          name='Description'
          content='Demo showcase of WebViewer, flagship product that Andrey Safonov managed as a Technical Product Manager.'
        />
        <meta name="author" content="Andrey Safonov"></meta>
      </Head>
      <Navbar />
      <Container maxW={'8xl'} p='12'>
        <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
          <Breadcrumb mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/portfolio'>Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                PDF Viewer & Editor
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as='h1' paddingBottom='20px'>
            PDF Viewer & Editor
          </Heading>
          <Flex width='100%' flexWrap={'wrap'}>
            <Box w='300px' paddingRight='10px'>
              <Heading as='h3' size='md' paddingBottom='5px'>
                Context
              </Heading>
              <Text>WebViewer is an embeddable PDF viewer & editor for any web application. It helps start-ups and enterprises to build document workflows without users having to download documents and edit them outside of the application.</Text>
              <Text>I was the first Product Manager working with two development teams to modernize UI, expand feature set, reduce technical debt and add support for additional file formats.</Text>
              <Heading as='h3' size='md' paddingTop='10px' paddingBottom='5px'>
                Customers
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  DropBox
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  DocuSign
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Microsoft
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  SmallPDF
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  1000s more
                </ListItem>
              </List>
              <Heading as='h3' size='md' paddingTop='10px' paddingBottom='5px'>
                Use Cases
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Review & Approval
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Collaboration
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Digital Signatures
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Page Manipulation
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Redaction
                </ListItem>
              </List>
              <Heading as='h3' size='md' paddingTop='10px' paddingBottom='5px'>
                Metrics
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  100K weekly downloads
                </ListItem>
              </List>
            </Box>
            <Box flex='1' minWidth='300px'>
              <Viewer document='/resume/Andrey.pdf' officeEditing={false} />
            </Box>
          </Flex>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
