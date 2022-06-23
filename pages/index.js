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
                  Director of Product @PDFTron
                </Heading>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                  I am a B2B2C product manager who started my career as a
                  software engineer then transitioned to consulting, sales
                  engineering and then product. I manage a portfolio of products
                  and lead a team of five talented product managers at PDFTron.
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
