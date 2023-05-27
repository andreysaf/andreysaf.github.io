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
        <title>Product Manager's Guide to Writing Great OKRs</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='canonical'
          href='https://andreysafonov.com/blog/product-manager-guide-to-okrs'
        />
        <meta
          name='Description'
          content='How to write OKRs for Product Managers. A complete guide with examples.'
        />
        <meta name="author" content="Andrey Safonov"></meta>
      </Head>
      <Navbar />
      <Container maxW={'7xl'} p='12'>
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
                Product Manager's Guide to Writing Great OKRs
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as='h1'>
            Product Manager's Guide to Writing Great OKRs
          </Heading>
          <Text as='p' fontSize='sm'>
            June 11th, 2022
          </Text>
          <Image
            objectFit='cover'
            src='/blog/objective.jpg'
            alt='objective of a photo camera'
            padding={10}
          />
          <Text as='p' fontSize='lg'>
            Objective Key Results (OKRs) is an organizational goal-setting
            framework that was developed in the 1980s. Most tech companies live
            and breathe OKRs, including giants like Google and Airbnb. Even
            Microsoft is making their transition to OKRs. Despite their
            ubiquity, product managers often have a hard time coming up with
            good objectives and establishing key success metrics. In this blog
            post, I will go over OKR requirements, plus a couple of tips that
            are not essential to the OKR framework but can be thought of as
            training wheels that can help you ride.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            Context in OKRs
          </Heading>
          <Text as='p' fontSize='lg'>
            Although not a required part of OKRs, context can set the stage and
            provide motivation, just like the introduction to this blog post. In
            this section, explain why you are pursuing this objective. Did you
            notice a pattern in one of the feedback loops? Is this going to help
            you achieve your product vision? You can also include social proof
            like customer quotes. I recommend starting with context first to
            organize your thoughts, then revisiting and possibly rewriting it as
            your final step. Keep it concise.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            Setting Key Results in Product OKRs
          </Heading>
          <Text as='p' fontSize='lg'>
            I deliberately skip the obvious next step of writing the objective
            and go straight to Key Results (KRs). It may seem counterintuitive,
            but KRs can help us understand the problem better and make coming up
            with a defined objective easier.
          </Text>
          <Text as='p' fontSize='lg'>
            KRs help us measure success, the health of the objective and
            progress towards our goal. The KRs have to be quantitative and you
            should be able to measure them today. This way you will know whether
            you actually moved the needle or if the objective is not driving any
            impact. The KRs should not be used as a metric for managers to
            measure the performance of product managers but instead for
            prioritization and optimization of resources.
          </Text>
          <Text as='p' fontSize='lg'>
            I group my key results into two groups:
          </Text>
          <UnorderedList pt={3}>
            <ListItem>User Value</ListItem>
            <ListItem>Business Value</ListItem>
          </UnorderedList>
          <Heading as='h4' size='sm' pt={5}>
            User Value
          </Heading>
          <Text as='p' fontSize='lg'>
            Will this objective bring value to users and if so, how can we
            measure user success? Try to define what success looks like for an
            engaged user. It could be posting and receiving 6 messages,
            connecting 2 additional accounts or inviting and engaging with 3
            users on your app.
          </Text>
          <Heading as='h4' size='sm' pt={5}>
            Business Value
          </Heading>
          <Text as='p' fontSize='lg'>
            Will this objective bring value to the business and if so, how can
            we measure how much? At the end of the day, we want to ensure that
            the objective will also make our business more successful. We can
            measure things like the conversion of users from free to paid from
            interacting with that feature, or the number of users no longer
            dropping off because of a missing feature. We can also tie KRs to
            the revenue we are hoping to bring in thanks to the objective we are
            pursuing. Again, do not commit to something you cannot accurately
            measure or attribute to the objective.
          </Text>
          <Text as='p' fontSize='lg'>
            The KRs have to drive an outcome and not output. Let’s say we wanted
            to add a new feature to our product. A potential KR could be:
          </Text>
          <Text as='em' fontSize='lg' p={5}>
            “We deliver the feature within 2 week period”
          </Text>
          <Text as='p' fontSize='lg'>
            However, this focuses on the output without driving the outcome.
            Instead, we should focus on measuring the value that the addition of
            the feature will bring. Ideally, even before building the feature,
            you know which metrics you wish to improve and the feature is
            helping to drive those metrics up. Although not mandatory, I prefer
            to number my KRs in order of priority.
          </Text>
          <Text as='p' fontSize='lg'>
            It is also a good idea to write KRs together with your product pod
            and to get their buy-in and sanity-check them with others in the
            company. Try to see if there are similar historical objectives, and
            if so, what KRs were measured.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            Defining Objective in OKR
          </Heading>
          <Text as='p' fontSize='lg'>
            Now that you understand the problem you are trying to solve and how
            you can measure the success of solving that problem, it should be
            straightforward to set a qualitative, aspirational objective. The
            objective should be a single, easily understood sentence. You will
            be using it to empower your team and get the buy-in from the
            leadership. It has to be specific to the problem you are trying to
            solve and could help support a higher level objective or company
            focus.
          </Text>
          <Text as='em' fontSize='lg' p={5}>
            “Deliver the best product onboarding experience to increase user
            activation”
          </Text>
          <Text as='p' fontSize='lg'>
            The objective is aspirational and you understand what metric it is
            supporting.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            What Else to Include OKRs
          </Heading>
          <Text as='p' fontSize='lg'>
            Depending on your company or your team, there could be different
            requirements on what else should be part of OKR. I like to include
            the person responsible for the OKR (it should be the person writing
            it), my counterparts in the product pod contributing to OKR,
            stakeholders that approve the OKR, and others who should be
            informed. After, I include what initiatives we need to do in order
            to make this OKR a success. The next part is the milestones of when
            the KRs should be revisited and reviewed. Again, all of those parts
            are optional and could easily be part of a Product Requirement
            Document or another medium, depending on how you track and share
            information at your company.
          </Text>
          <Heading as='h3' size='md' pt={5}>
            Next Steps
          </Heading>
          <Text as='p' fontSize='lg'>
            Now that you have the OKR in your hands, it is time to get it out
            there and champion the objective and its success. Just make sure to
            review the KRs at the agreed interval defined in the milestone
            section.
          </Text>
          <Text as='p' fontSize='lg'>
            If this helped you to write better OKRs, please share this blog with
            others. Let me know if you have any feedback by reaching out on
            <Link href='https://www.linkedin.com/in/andreysaf/'> LinkedIn</Link>
            .
          </Text>
        </VStack>
      </Container>
      <Footer />
    </Layout>
  );
};

export default WebViewer;
