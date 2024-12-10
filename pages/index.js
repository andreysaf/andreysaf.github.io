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
  Button,
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
      <Box w='100%' p={12}>
        <Center>
          <Stack spacing={3}>
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
                <Heading as='h1' size={headingSize} pl={4} pb={4}>
                  Andrey Safonov
                </Heading>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                I’m Andrey, a seasoned product leader passionate about building innovative solutions that move the needle. 
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                Currently, I’m the <b>Head of Product and Development</b> at Aspire Software, where I lead a global team of 50 product managers, designers, engineering managers, and developers across the Environment, Health & Safety, and Nuclear Energy sectors. Aspire operates as the software division of Valsoft, a holding company focused on acquiring and growing businesses for the long term. In my role, I drive product and acquisition strategy to expand product portfolios, scale product and development teams, and enhance customer satisfaction by delivering high-quality products, features, and experiences.
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                Previously, I was <b>Head of Product</b> at Apryse (formerly PDFTron), a leading document SDK trusted by Adobe, DocuSign, Microsoft, NASA, and thousands of other organizations. Joining during its early startup days, I built the product team from the ground up, growing it to include 10 product managers and 4 product designers. I played a pivotal role in scaling the product portfolio, launching multiple 0-to-1 products, expanding distribution through marketplaces like Salesforce and Appian, and spearheading strategic acquisitions. These efforts contributed to Apryse’s growth and success through two private equity exits.
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                I’m deeply passionate about technological innovation. I’m also building <a target="_blank" href='https://safas.io/' style={{ textDecoration: 'underline' }}>Safas.io</a>, a startup dedicated to securing video communication against deepfakes and video injection attacks.
                </Container>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Container>
                  <Link href={'https://www.linkedin.com/in/andreysaf/'}>
            <Button
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'green.400'}
              href={'https://www.linkedin.com/in/andreysaf/'}
              _hover={{
                bg: 'green.300',
              }}
            >
              Get in touch
            </Button>
          </Link>
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
