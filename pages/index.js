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

const Home = () => {
  const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const subHeadingSize = useBreakpointValue({ base: 'md', md: 'xl' });

  return (
    <Layout>
      <Head>
        <title>
          Andrey Safonov - Director of Product, Technical Product Manager
        </title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='https://andreysafonov.com/' />
        <meta
          name='Description'
          content='Andrey Safonov is a product manager lead and leads a team of product managers at PDFTron. BASc in Computer Engineering with minor in Business Management.'
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
                  I started my career as a software engineer, developing text collaboration software. Later, I worked as an implementation consultant for the Ministry of Finance, where I built an online tax portal that continues to serve 5 million taxpayers to this day. Currently, I hold the position of Director of Product, leading a team of 5 product managers. Our focus is on building UI components, and APIs for document management, used by millions of developers around the world and powering applications like DocuSign, Dropbox and thousands more.
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                  Check out some of my{' '}
                  <Link href='/blog' style={{ textDecoration: 'underline' }}>
                    blogs
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
