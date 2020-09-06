import Head from 'next/head';
import {
  Grommet,
  grommet,
  Box,
  Avatar,
  Anchor,
  Heading,
  Text,
  Paragraph,
  Button,
} from 'grommet';
import { Github, Linkedin, Medium } from 'grommet-icons';
import Layout from '../components/layout';
import Link from 'next/link';

const background1 = { dark: 'light-1', light: 'dark-1' };
const background2 = { dark: 'light-2', light: 'dark-2' };
const background3 = { dark: 'light-3', light: 'dark-3' };

const Home = () => {
  return (
    <Layout>
      <Grommet theme={grommet}>
        <Head>
          <title>Andrey Safonov - Solutions Engineer</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="Description"
            content="Andrey Safonov is a senior solutions engineer and a fullstack developer at PDFTron. BASc in Computer Engineering with minor in Business Management."
          />
        </Head>

        <Box
          direction="column"
          pad="large"
          fill={true}
          height="large"
          align="center"
          alignContent="center"
          background="#37846B"
        >
          <Avatar size="xlarge" src="/profile.jpg" />
          <Heading
            margin="none"
            alignSelf="center"
            responsive={true}
            size="medium"
          >
            Andrey Safonov
          </Heading>
          <Text alignSelf="center" responsive={true} size="xlarge">
            Solutions Engineer/Architect @PDFTron
          </Text>
          <Box
            direction="row"
            pad="medium"
            gap="medium"
            alignContent="center"
            align="center"
          >
            <Box>
              <Anchor
                href="https://github.com/andreysaf"
                label="Check out my code"
                margin="small"
                icon={<Github />}
              />
              <Anchor
                href="https://www.linkedin.com/in/andrey-safonov1/"
                label="Connect with me"
                margin="small"
                icon={<Linkedin />}
              />
              <Anchor
                href="https://medium.com/@safonand"
                label="Read my blogs"
                margin="small"
                icon={<Medium />}
              />
            </Box>
          </Box>
        </Box>
        <Box
          direction="column"
          pad="xlarge"
          fill={true}
          height="large"
          gap="medium"
          background={background1}
          align="center"
          alignContent="center"
        >
          <Heading margin="none" responsive={true} size="medium">
            About
          </Heading>
          <Paragraph responsive={true} size="large" margin="none">
            I am an energetic, enthusiastic person who creates solutions.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            I’ve delivered multiple successful projects, using the agile
            software development process, that are used by thousands of people
            every day. With my customer-centric skillset, I create valuable
            relationships with my clients and development team.
          </Paragraph>
        </Box>
        <Box
          direction="column"
          pad="xlarge"
          fill={true}
          height="large"
          gap="medium"
          background={background2}
          align="center"
        >
          <Heading margin="none" responsive={true} size="medium">
            Projects
          </Heading>
          <Box>
            <Heading margin="none" responsive={true} size="small">
              eTaxBC
            </Heading>
            <Paragraph responsive={true} size="large">
              Lead Implementation Consultant for building an online platform for
              taxpayers to make payments and file returns for the Ministry of
              Finance, British Columbia.
            </Paragraph>
          </Box>
          <Box>
            <Heading margin="none" responsive={true} size="small">
              PDFTron's WebViewer
            </Heading>
            <Paragraph responsive={true} size="large">
              Technical Product Manager on a redesign of PDFTron's flagship
              product. I worked with a team of developers and designers to
              create an improved, modern experience based on user and
              stakeholder feedback.
            </Paragraph>
            <Link href="/webviewer">
              <Anchor>Read more about the project</Anchor>
            </Link>
          </Box>
          <Box>
            <Heading margin="none" responsive={true} size="small">
              WebViewer Video
            </Heading>
            <Paragraph responsive={true} size="large">
              Product Owner for WebViewer Video. Created a new product for
              annotating videos frame by frame. Maintaining product backlog,
              overseeing development and collecting customer feedback to drive
              new feature development.
            </Paragraph>
            <Link href="/webviewerVideo">
              <Anchor>Read more about the project</Anchor>
            </Link>
          </Box>
        </Box>
      </Grommet>
    </Layout>
  );
};

export default Home;
