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
                <Container>
                I am Andrey, Director of Product at Apryse (previously PDFTron). With over 10 years of experience in the tech industry, I have a unique background that includes experience as a software engineer, consultant, solutions engineer, and product manager.  
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                I currently lead a team of 5 PMs and also act as the PM for two products. We build Document SDKs and UI components used by millions of developers.  
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                I joined PDFTron when it was in the start-up stage and became the first PM. I built the product team from 0 and scaled the product by building several 0-1 products, adding distribution channels through marketplaces like Salesforce and Appian, and driving M&A strategy with 8 acquisitions.
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                  Check out my <Link href='/portfolio' style={{ textDecoration: 'underline' }}>portfolio</Link>.
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
