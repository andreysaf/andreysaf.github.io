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
          How is product management different from solution engineering?
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
                How is product management different from solution engineering
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1">
            How is product management different from solution engineering?
          </Heading>
          <Text as="p" fontSize="sm">
            September 6th, 2021
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
            , we have discussed the role of a technical solution engineer as well as
             different career paths one can take to become one. In this
            blog, we will focus on one possible career path for a solutions
            engineer. Please note that solution engineering and product
            management will vary from company to company as well as team to
            team.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            How is product management different from solution engineering?
          </Heading>
          <Heading as="h4" size="sm" pt={5}>
            Focus
          </Heading>
          <Text as="p" fontSize="lg">
            As a solution engineer, your main focus on prospects, potential
            buyers, or customers. Your goal is to ensure that the product or set
            of products are configured and work in a way that provides them
            value and meets their requirements. You are constantly tweaking,
            adjusting and extending existing features to make the product work for
            their must-haves and nice-to-haves.
          </Text>
          <Text as="p" fontSize="lg">
            As a product manager, you are less focused on a single deal or a
            customer. Instead, you are looking holistically at potential
            prospects, customers, and end-users. Your main focus is ensuring that
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
            comes from the product manager and closely aligns with the company
            vision.
          </Text>
          <Text as="p" fontSize="lg">
            As a product manager, your responsibilities include attending not
            just discovery calls, but also support, renewals, solution reviews,
            focus groups, user experience testing, and customer connects. This is
            in addition to internal meetings. It is important to have a
            direct connection to your users and be able to ask them questions
            about their pains.
          </Text>
          <Heading as="h4" size="sm" pt={5}>
            Feedback
          </Heading>
          <Text as="p" fontSize="lg">
            As a solution engineer, you provide feedback on what features need
            to be built or improved. However, as a product manager, you are
            intaking the feedback from several data sources and applying
            various prioritization techniques to get the buy-in from all the
            stakeholders in the company to decide on the roadmap.
          </Text>
          <Text as="p" fontSize="lg">
            During the proof of concept stage, a solution engineer or a prospect
            will spot any difficulties or gaps in your product offering. It
            could be that some of the APIs are missing, written poorly, are
            not compatible with their use case, or that there are limitations
            with the infrastructure or framework that they are deploying your
            solution on. After the PoC is completed, the prospect will test with
            their users. Users will quickly spot what works well, what does
            not, and whether or not the UI makes sense and provides a great
            user experience for their use case. During this time, it is
            important to capture as much information as possible about the
            product's gaps, limitations, and use cases and drive the feedback back
            to the teams.
          </Text>
          <Heading as="h4" size="sm" pt={5}>
            Cross-team collaboration
          </Heading>
          <Text as="p" fontSize="lg">
            As a solution engineer, you are mainly working together with sales,
            product management and development teams. You provide training to
            the sales reps, provide feedback to the product management teams,
            and seek technical advice from the developers on how to configure
            the solution.
          </Text>
          <Text as="p" fontSize="lg">
            As a product manager, you are working with all teams. You are
            collecting feedback from customer-facing teams like sales, support,
            customer success, and others. You are brainstorming ideas, rapidly
            prototyping with design and development teams during the planning
            stages of the sprint. You are working with the development team to
            accept items from the backlog into the development sprint and
            agreeing on timelines. You are clarifying and resolving any issues
            during the development. You are working together with marketing
            teams to clarify value props and to create content that will explain
            the value proposition to the world. You are working with legal to
            ensure you comply with all laws and regulations. You are
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
            the ways I hold myself accountable is that for every feature or
            initiative I use OKRs (Objective Key Results). You set the
            qualitative objective, and come up with quantitative key results. It
            sounds easy, however, it takes time to master coming up with good
            objectives and ways to measure their success. Part of coming up with
            the objective is to define the why behind it. Why is it important?
            Using the OKR framework, it becomes easy to track your performance and
            see if you are successful in meeting your key results.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            How to transition to Product Management?
          </Heading>
          <Heading as="h4" size="sm" pt={5}>
            Development
          </Heading>
          <Text as="p" fontSize="lg">
            Start working closely with the product owner or development team
            lead to bring detailed feedback from the customers and the prospects
            you have worked with. In your calls, try to understand how a
            particular feature or a new feature addition will solve their pain.
            Perform a competitive analysis to see how competitors are solving
            similar pain. Compare how others are solving not necessarily in the
            same industry but with a similar problem. Agree on the feedback
            framework, or how the user story should be worded or what additional
            items should be captured for each proposed feature.
          </Text>
          <Heading as="h4" size="sm" pt={5}>
            Design
          </Heading>
          <Text as="p" fontSize="lg">
            Participate in design reviews and provide feedback based on the
            user's experience on the feature's wireframes and designs. Sometimes
            with the volume of calls, you could anticipate the user behaviour,
            however, it is best to mock up the design and get the
            actual user to try it out. This feedback should help prototype
            quicker.
          </Text>
          <Heading as="h4" size="sm" pt={5}>
            Product Marketing
          </Heading>
          <Text as="p" fontSize="lg">
            Once the feature is in progress, you should be able to explain the
            why behind the feature and what pain it is solving. Come up with
            a unique value proposition that differentiates you from the
            competitors. The competitive analysis should also help with pricing
            and packaging. Work together in announcing the feature and creating
            necessary content so the customers can find and learn about the
            feature you are adding.
          </Text>
          <Heading as="h3" size="md" pt={5}>
            Wrap Up
          </Heading>
          <Text as="p" fontSize="lg">
            Let me know if you went through a similar journey or planning the
            transition. Stay tuned, as I will post more product management
            focused content.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
