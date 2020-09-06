import Head from 'next/head';
import {
  Grommet,
  grommet,
  Box,
  Image,
  Heading,
  Paragraph,
  Anchor,
} from 'grommet';
import { Github, Linkedin, Medium } from 'grommet-icons';
import Layout from '../components/layout';
import Link from 'next/link';

const background1 = { dark: 'light-1', light: 'dark-1' };
const background2 = { dark: 'light-2', light: 'dark-2' };
const background3 = { dark: 'light-3', light: 'dark-3' };

const WebViewerVideo = () => {
  return (
    <Layout>
      <Grommet theme={grommet}>
        <Head>
          <title>WebViewer Video - Andrey Safonov - Product Owner</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="Description" content="Andrey Safonov - technical product owner and WebViewer Video." />
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
            WebViewer Video
          </Heading>
          <Image
            fit="contain"
            fill="horizontal"
            src="/video.png"
            alt="Webviewer Video UI screenshoot"
          />
          <Heading margin="none" responsive={true} size="small">
            Background
          </Heading>
          <Paragraph responsive={true} size="large" margin="none">
            PDFTron offers SDKs to edit, view, and annotate PDFs, images, and MS
            Office documents. Video is quite popular format in document
            management systems, virtual data rooms as well as design and
            marketing asset management. Until WebViewer Video, prospects and
            customers would have to find a different vendor to cover video
            format. With multiple vendors, users would get different UI
            experiences, as well as a different set of annotation tools to
            complete the same tasks. From the development perspective, it would
            also mean maintaining several SDKs, different backend setup for
            annotation storage, user roles and permission management.
          </Paragraph>
          <Heading margin="none" responsive={true} size="small">
            My Role
          </Heading>
          <Paragraph responsive={true} size="large" margin="none">
            - Put together product vision to create a unified experience across
            most popular formats including video to provide users with a
            consistent behaviour for viewing and annotating.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Created product backlog and prioritized must-have features for the
            first release.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Lead a team of designers and developers to create the minimum
            viable product.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Conducted user experience testing with prospects and existing
            customers to receive feedback and plan features for the next
            release.
          </Paragraph>
          <Heading margin="none" responsive={true} size="small">
            Results
          </Heading>
          <Paragraph responsive={true} size="large" margin="none">
            - All existing customers that deal with the video format purchased
            WebViewer Video addon upon renewal.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - WebViewer Video addon is now part of all the new deals if prospect
            deals with the video format.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - Users are now enjoying consistent behaviour across all document
            formats without the need to retrain themselves when switching
            between different file formats.
          </Paragraph>
          <Paragraph responsive={true} size="large" margin="none">
            - It is easier to maintain annotation storage and scale the
            application as the number of users grows.
          </Paragraph>
          <Link href="/">
            <Anchor>Back to the main page</Anchor>
          </Link>
        </Box>
      </Grommet>
    </Layout>
  );
};

export default WebViewerVideo;
