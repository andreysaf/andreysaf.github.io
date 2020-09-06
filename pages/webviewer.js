import Head from 'next/head';
import {
  Grommet,
  grommet,
  Box,
  Image,
  Heading,
  Paragraph,
  Anchor
} from 'grommet';
import { Github, Linkedin, Medium } from 'grommet-icons';
import Layout from '../components/layout';
import Link from 'next/link';

const background1 = { dark: 'light-1', light: 'dark-1' };
const background2 = { dark: 'light-2', light: 'dark-2' };
const background3 = { dark: 'light-3', light: 'dark-3' };

const WebViewer = () => {
  return (
    <Layout>
      <Grommet theme={grommet}>
        <Head>
          <title>PDFTron's WebViewer Redesign - Andrey Safonov - Product Manager</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="Description"
            content="Andrey Safonov - technical product manager and PDFTron's WebViewer UI redesign."
          />
        </Head>

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
            PDFTron's WebViewer Redesign
          </Heading>
          <Image fit="contain" fill="horizontal" src="/webviewer.png" alt="Webviewer UI screenshoot" />
          <Heading margin="none" responsive={true} size="small">
            Background
          </Heading>
          <Paragraph responsive={true} size="large" margin="none">
            WebViewer is PDFtron's flagship product. The UI was not updated
            for years, and customers and prospects were becoming
            dissatisfied. Several deals were lost. I put together a team
            of developers and designers to redesign WebViewer.
          </Paragraph>
          <Heading margin="none" responsive={true} size="small">
            My Role
          </Heading>
          <Paragraph responsive={true} size="large" margin="none">
            - Organized a team of talented designers and developers to update the look and feel.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Reached out to existing customers to gather feedback from their users.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Managed all internal stakeholders to agree on designs and timelines.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Held daily meetings to track the progress and review the feedback.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Helped developers with the implementation of the designs to meet the deadline.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Conducted user experience tests to confirm the design decisions.
          </Paragraph>
          <Heading margin="none" responsive={true} size="small">
            Results
          </Heading>
          <Paragraph responsive={true} size="large" margin="none">
            - Deals were no longer lost due to dated UI and prospects preferred our UI over competitors.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - The new UI was rearchitected to be more lightweight, performant and allowed for easier product updates.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - The number of weekly downloads on npm went up by 50% after the update.
          </Paragraph>
          <Link href="/"><Anchor>Back to the main page</Anchor></Link>
        </Box>
      </Grommet>
    </Layout>
  );
};

export default WebViewer;
