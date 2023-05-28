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
  UnorderedList,
  Code,
  ListItem,
  Link,
} from '@chakra-ui/react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const WebViewer = () => {
  return (
    <Layout>
      <Head>
        <title>How to Migrate Next.js or React Project Using react-ga to GA4?</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='canonical'
          href='https://andreysafonov.com/blog/how-to-migrate-nextjs-react-ga4'
        />
        <meta
          name='Description'
          content='In this blog we will go over how to transition your Next.js web app to GA4 using react-ga4.'
        />
        <meta name="author" content="Andrey Safonov"></meta>
      </Head>
      <Navbar />
      <Container maxW={'5xl'} p='12'>
        <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
          <Breadcrumb mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                Migrate Next.js Project using react-ga to GA4
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as='h1'>
            How to Migrate Next.js or React Project using react-ga to GA4?
          </Heading>
          <Text as='p' fontSize='sm'>
            May 27th, 2023
          </Text>
          <Image
            objectFit='cover'
            src='/blog/next-js-ga4.jpeg'
            alt='Next.js logo and Google Analytics logo from Wiki Commons'
            padding={10}
          />
          <Text as='p' fontSize='lg'>
            In this blog, we will go over how you can migrate from Google Universal Analytics to Google Analytics 4 in your Next.js web app if you are using <Link href='https://www.npmjs.com/package/react-ga' style={{ textDecoration: 'underline' }}>react-ga</Link>. Google UA will stop working on July 1st, 2023 so it is a good idea to do it beforehand. <Link href='https://www.npmjs.com/package/react-ga' style={{ textDecoration: 'underline' }}>react-ga</Link> is a popular package that has been used to make Google Analytics a breeze in React apps. <Link href='https://www.npmjs.com/package/react-ga4' style={{ textDecoration: 'underline' }}>react-ga4</Link> adds support for GA4. Now it is worth mentioning that react-ga4 was not written by the same creators as react-ga. There is also a license change from react-ga to react-ga4. react-ga is distributed under Apache 2.0, whereas react-ga4 is under MIT.
          </Text>
          <Text as='p' fontSize='lg'>
            In this guide, you will learn:
          </Text>
          <UnorderedList pt={3} fontSize='lg'>
            <ListItem><Link href='#get-ga4-property' style={{ textDecoration: 'underline' }}>How to get your GA4 property</Link></ListItem>
            <ListItem><Link href='#setup-reactga4' style={{ textDecoration: 'underline' }}>How to setup react-ga4</Link></ListItem>
            <ListItem><Link href='#install-reactga4' style={{ textDecoration: 'underline' }}>How to switch react-ga to react-ga4</Link></ListItem>
            <ListItem><Link href='#add-ga4-property' style={{ textDecoration: 'underline' }}>How to add GA4 property to react-ga4</Link></ListItem>
            <ListItem><Link href='#receive-ga4-data' style={{ textDecoration: 'underline' }}>How to start receiving data in Google Analytics</Link></ListItem>
          </UnorderedList>
          <Text as='p' fontSize='lg'>
            I will assume that you already have the Next.js app and react-ga configured. This guide is also applicable to a React app as well.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            <a id="get-ga4-property">Get GA4 Property</a>
          </Heading>
          <Text as='p' fontSize='lg'>
            To get your GA4 property, you can do so by logging into your <Link href='https://analytics.google.com/analytics/web/' style={{ textDecoration: 'underline' }}>Google Analytics</Link>. If you have not set up your GA4, you will have a whole bunch of warnings, banners, and popups telling you to do so. You can follow any of them to get to the setup assistant. If for some reason you are not getting any of the popups, you can follow the official <Link href='https://support.google.com/analytics/answer/9744165' style={{ textDecoration: 'underline' }}>guide by Google</Link>.
          </Text>
          <Text as='p' fontSize='lg'>
            You will need a measurement ID that will look like this: G-XXXXXXXXXX. Save it, you will need it for the next step.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            <a id="setup-reactga4">Setup react-ga4 in your Next.js project</a>
          </Heading>
          <Text as='p' fontSize='lg'>
            If you have not set up react-ga or react-ga4, you can follow along here. First, go ahead and install react-ga4.
          </Text>
          <Code>npm i react-ga4</Code>
          <Text as='p' fontSize='lg'>
            Add a new file called `components/googleAnalytics.js` in your project and paste the following:
          </Text>
          <Code display='block' whiteSpace='pre' width='100%'>{
            `import ReactGA from "react-ga4"
 
export const initGA = () => {
  ReactGA.initialize("G-XXXXXXX")
}
  
export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: window.document.title })
}`
          }</Code>
          <Text as='p' fontSize='lg'>
            Then create another file called `components/layout.js` in your project and paste the following:
          </Text>
          <Code display='block' whiteSpace='pre'  width='100%'>{
            `import React, { useEffect } from "react";
import { initGA, logPageView } from "./googleAnalytics.js";

const Layout = (props) => {

useEffect(() => {
  if (!window.GA_INITIALIZED) {
    initGA();
    window.GA_INITIALIZED = true;
  }
  logPageView();
});

return (
  <div>{props.children}</div>
);

};

export default Layout;`
          }</Code>
          <Text as='p' fontSize='lg'>
            Then you can wrap any page in the layout component to track it.
          </Text>
          <Code display='block' whiteSpace='pre' width='100%'>
            {
              `import Layout from '../../components/layout';

export const myPage = () => {
  return {
    <Layout>
      <div>Hello World<div/>
    </Layout>
  }
}
              `
            }
          </Code>
          <Heading as='h3' size='md' pt={5}>
            <a id="install-reactga4">Remove React-GA and Install React-GA4</a>
          </Heading>
          <Text as='p' fontSize='lg'>
            Run the following command to remove react-ga:
          </Text>
          <Code>npm uninstall react-ga</Code>
          <Text as='p' fontSize='lg'>
            Then install react-ga4:
          </Text>
          <Code>npm install react-ga4</Code>
          <Heading as='h3' size='md' pt={5}>
            <a id="add-ga4-property">Add Your GA4 Property to React-GA4</a>
          </Heading>
          <Text as='p' fontSize='lg'>
            Wherever you have initialized your react-ga, open that file. For me, I created a separate file called googleAnalytics.js. Inside of the file swap the UA property in initialize call to the new measurement ID.
          </Text>
          <Code>ReactGA.initialize("G-XXXXXXX")</Code>
          <Text as='p' fontSize='lg'>
            Then wherever you track the page view event, remove set and pageview calls and replace them with send function.
          </Text>
          <Code>{`ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: window.document.title })`}</Code>
          <Heading as='h3' size='md' pt={5}>
            <a id="receive-ga4-data">Start Receiving Data in Google Analytics</a>
          </Heading>
          <Text as='p' fontSize='lg'>
            At this point, if you refresh the page a couple of times, you should start seeing data flow in <Link href='https://analytics.google.com/analytics/web/' style={{ textDecoration: 'underline' }}>Google Analytics</Link>.
          </Text>
          <Text as='p' fontSize='lg'>
            Now you also want to ensure that GA scripts are allowed. I was using Brave which automatically blocks GA scripts and did not see the data reflected until I turned off the shields.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            Next Steps
          </Heading>
          <Text as='p' fontSize='lg'>
            I hope you enjoyed this post. If you have any questions, reach out on my <Link href='https://www.linkedin.com/in/andreysaf/' style={{ textDecoration: 'underline' }}>LinkedIn</Link>.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
