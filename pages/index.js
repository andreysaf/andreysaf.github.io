import Head from 'next/head';
import {
  Box,
  Center,
  Wrap,
  WrapItem,
  Avatar,
  Heading,
  Stack,
  useBreakpointValue,
  Container,
  Link,
} from '@chakra-ui/react';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Underline } from 'grommet-icons';

const Home = () => {
  const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const subHeadingSize = useBreakpointValue({ base: 'md', md: 'xl' });

  return (
    <Layout>
      <Head>
        <title>
          Andrey Safonov - Head of Product, Technical Product Manager
        </title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='https://andreysafonov.com/' />
        <meta
          name='Description'
          content='Andrey Safonov is a technical product manager and leads a team of product managers at PDFTron. BASc in Computer Engineering with minor in Business Management.'
        />
      </Head>
      <Navbar />
      <Box w='100%' p={16}>
        <Center>
          <Stack spacing={6}>
            <Wrap>
              <WrapItem pl={4}>
                <Avatar
                  size={avatarSize}
                  name='Andrey Safonov'
                  src='/profile.jpg'
                />
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Heading as='h1' size={headingSize} pl={4}>
                  Andrey Safonov
                </Heading>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Heading as='h2' size={subHeadingSize} pl={4}>
                  Head of Product @PDFTron
                </Heading>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                  I am a product manager who started my career as a software
                  engineer before transitioning to consulting, solution
                  engineering, and then product. I enjoy working directly with
                  users to understand the underlying pain and building products
                  that solve that pain.
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                  My day-to-day is spent listening to users, prototyping with
                  designers, designing APIs with developers, creating content
                  with marketing and enabling the sales team.
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                  Explore some of the{' '}
                  <Link href='/cases' style={{ textDecoration: 'underline' }}>
                    example initiatives
                  </Link>{' '}
                  that I have delivered or{' '}
                  <Link href='/blog' style={{ textDecoration: 'underline' }}>
                    read blogs
                  </Link>{' '}
                  about product management.
                </Container>
              </WrapItem>
            </Wrap>
          </Stack>
        </Center>
      </Box>

      <Footer />
    </Layout>
  );
};

export default Home;
