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
        <title>Andrey Safonov - Portfolio - DOCX Editor</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='canonical'
          href='https://andreysafonov.com/portfolio/docx-product'
        />
        <meta
          name='Description'
          content='Demo showcase of DOCX Editor, one of the products that Andrey Safonov managed as a Technical Product Manager.'
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
                DOCX Editor
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as='h1' paddingBottom='20px'>
            DOCX Editor
          </Heading>
          <Flex width='100%' flexWrap={'wrap'}>
            <Box w='300px' paddingRight='10px'>
              <Heading as='h3' size='md' paddingBottom='5px'>
                Context
              </Heading>
              <Text>DOCX editor allows you to create and edit DOCX documents in a browser without any server-side dependencies or Microsoft Office licenses.</Text>
              <Text>The editor is a zero-to-one product that I have built together with 2 product designers, 2 scrum teams, one front-end and one backend.</Text>
              <Heading as='h3' size='md' paddingTop='10px' paddingBottom='5px'>
                Use Cases
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Edit DOCX
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Create DOCX
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Save as PDF
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Save as DOCX
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Create templates
                </ListItem>
              </List>
            </Box>
            <Box flex='1' minWidth={'300px'}>
              <Viewer document='/resume/Andrey.docx' officeEditing={true} />
            </Box>
          </Flex>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
