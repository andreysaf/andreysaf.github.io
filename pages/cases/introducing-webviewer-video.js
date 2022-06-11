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

const WebViewerVideo = () => {
  return (
    <Layout>
      <Head>
        <title>
          Adding New Video Product
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel='canonical' href='https://andreysafonov.com/cases/introducing-webviewer-video' />
        <meta
          name="Description"
          content="Walking through how I discovered a new product opportunity for video annotation."
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
              <BreadcrumbLink href="/cases">Case Studies</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">WebViewer Video</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1">Introducing WebViewer Video</Heading>
          <Image
            objectFit="cover"
            src="/cases/video.png"
            alt="Webviewer UI screenshoot"
            padding={10}
          />
          <Heading as="h3" size="md">
            Context
          </Heading>
          <Text as="p" fontSize="lg">
            PDFTron offers SDKs to edit, view, and annotate PDFs, images, and MS
            Office documents. Video is quite a popular format in document
            management systems, virtual data rooms as well as design and
            marketing asset management.
          </Text>
          <Text as="p" fontSize="lg">
            Until WebViewer Video, prospects and customers would have to find a
            different vendor to cover video format.
          </Text>
          <Text as="p" fontSize="lg">
            With multiple vendors, users would get different UI experiences, as
            well as a different set of annotation tools to complete the same
            tasks. From the development perspective, it would also mean
            maintaining several SDKs, different backend setup for annotation
            storage, user roles and permission management.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            Objective
          </Heading>
          <Text as="p" fontSize="lg">
            Expand PDFTron product portfolio to cover content creation formats.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            My Role
          </Heading>
          <Text as="p" fontSize="lg">
            - Put together product vision to create a unified experience across
            most popular formats including video to provide users with a
            consistent behaviour for viewing and annotating.
          </Text>
          <Text as="p" fontSize="lg">
            - Created product backlog and prioritized must-have features for the
            first release.
          </Text>
          <Text as="p" fontSize="lg">
            - Lead a team of designers and developers to create the minimum
            viable product.
          </Text>
          <Text as="p" fontSize="lg">
            - Conducted user experience testing with prospects and existing
            customers to receive feedback and plan features for the next
            release.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            Key Results
          </Heading>
          <Text as="p" fontSize="lg">
            - Majority of existing customers that deal with the video format purchased
            WebViewer Video addon upon renewal.
          </Text>
          <Text as="p" fontSize="lg">
            - WebViewer Video paid addon is now part of all the new deals if prospect
            deals with the video format.
          </Text>
          <Text as="p" fontSize="lg">
            - Users are now enjoying a consistent user experience across all document
            formats without the need to retrain themselves when switching
            between different file formats.
          </Text>
          <Text as="p" fontSize="lg">
            - It is easier to maintain annotation storage and scale the
            application as the number of users grows.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
  // return (
  //   <Layout>
  //     <Grommet theme={grommet}>
  //       <Head>
  //         <title>WebViewer Video - Andrey Safonov - Product Owner</title>
  //         <link rel="icon" href="/favicon.ico" />
  //         <meta
  //           name="Description"
  //           content="Andrey Safonov - technical product owner and WebViewer Video."
  //         />
  //       </Head>

  //       <Box
  //         direction="column"
  //         pad="xlarge"
  //         fill={true}
  //         height="large"
  //         gap="medium"
  //         background={background1}
  //         align="center"
  //         alignContent="center"
  //       >
  //         <Heading margin="none" responsive={true} size="medium">
  //           WebViewer Video
  //         </Heading>
  //         <Image
  //           fit="contain"
  //           fill="horizontal"
  //           src="/video.png"
  //           alt="Webviewer Video UI screenshoot"
  //         />
  //         <Heading margin="none" responsive={true} size="small">
  //           Background
  //         </Heading>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           PDFTron offers SDKs to edit, view, and annotate PDFs, images, and MS
  //           Office documents. Video is quite popular format in document
  //           management systems, virtual data rooms as well as design and
  //           marketing asset management.
  //         </Paragraph>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           Until WebViewer Video, prospects and customers would have to find a
  //           different vendor to cover video format.
  //         </Paragraph>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           With multiple vendors, users would get different UI experiences, as
  //           well as a different set of annotation tools to complete the same
  //           tasks. From the development perspective, it would also mean
  //           maintaining several SDKs, different backend setup for annotation
  //           storage, user roles and permission management.
  //         </Paragraph>
  //         <Heading margin="none" responsive={true} size="small">
  //           My Role
  //         </Heading>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           - Put together product vision to create a unified experience across
  //           most popular formats including video to provide users with a
  //           consistent behaviour for viewing and annotating.
  //         </Paragraph>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           - Created product backlog and prioritized must-have features for the
  //           first release.
  //         </Paragraph>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           - Lead a team of designers and developers to create the minimum
  //           viable product.
  //         </Paragraph>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           - Conducted user experience testing with prospects and existing
  //           customers to receive feedback and plan features for the next
  //           release.
  //         </Paragraph>
  //         <Heading margin="none" responsive={true} size="small">
  //           Results
  //         </Heading>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           - All existing customers that deal with the video format purchased
  //           WebViewer Video addon upon renewal.
  //         </Paragraph>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           - WebViewer Video addon is now part of all the new deals if prospect
  //           deals with the video format.
  //         </Paragraph>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           - Users are now enjoying consistent behaviour across all document
  //           formats without the need to retrain themselves when switching
  //           between different file formats.
  //         </Paragraph>
  //         <Paragraph responsive={true} size="large" margin="none">
  //           - It is easier to maintain annotation storage and scale the
  //           application as the number of users grows.
  //         </Paragraph>
  //         <Link href="/">
  //           <Anchor>Back to the main page</Anchor>
  //         </Link>
  //       </Box>
  //     </Grommet>
  //   </Layout>
  // );
};

export default WebViewerVideo;
