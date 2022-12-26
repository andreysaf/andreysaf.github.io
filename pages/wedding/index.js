import Head from 'next/head';
import React from 'react';
import {
  Heading,
  Image,
  Text,
  Container,
  VStack,
  Flex,
  Box,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import Layout from '../../components/layout';

const Wedding = () => {
  return (
    <Layout>
      <Head>
        <title>Andrey & Donna</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='noindex,nofollow' />
        <meta name='Description' content='Andrey & Donna.' />
        <link rel='stylesheet' href='/wedding/wedding.css' />
        <link
          rel='stylesheet'
          href='https://use.typekit.net/inm4jev.css'
        ></link>
      </Head>
      <Container
        fontFamily='playfair-display, serif'
        fontWeight='400'
        textColor='#846D00'
        backgroundColor='#DEDAD7'
        maxWidth='100%'
        padding='0'
      >
        <VStack
          paddingTop='40px'
          spacing='2'
          alignItems='center'
          justifyContent='center'
          height='100vh'
          backgroundImage="linear-gradient(to bottom, rgba(222, 218, 215, 0.1), rgba(222, 218, 215, 1)),
    url('/wedding/background.jpg')"
          backgroundSize='cover'
          backgroundPosition='center center'
          backgroundRepeat={'no-repeat'}
        >
          <Heading
            as='h1'
            className='headline'
            textTransform='uppercase'
            textAlign='center'
            fontSize='8xl'
            fontFamily='playfair-display, serif'
          >
            Andrey & Donna
          </Heading>
          <Text
            as='p'
            className='headline'
            fontSize='lg'
            padding='5px'
            textAlign={'center'}
          >
            January 2, 2023 | Canmore, AB
          </Text>
        </VStack>
      </Container>
      <Container
        maxW={'7xl'}
        fontFamily='playfair-display, serif'
        fontWeight='400'
        textColor='#846D00'
        backgroundColor='#DEDAD7'
      >
        <VStack paddingTop='80px' spacing='2' alignItems='flex-start'>
          <Heading
            as='h1'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
          >
            Location
          </Heading>
          <Link
            href='https://goo.gl/maps/bfCjxLY8fx3mipwB7'
            isExternal
            paddingTop='20px'
          >
            <Text fontSize='lg'>A Bear & Bison Canadian Country Inn</Text>
            <Text fontSize='md'>705 Benchlands Trail, Canmore, AB T1W 3G9</Text>
          </Link>
        </VStack>
        <VStack paddingTop='80px' spacing='2' alignItems='flex-start'>
          <Heading
            as='h1'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
          >
            Schedule
          </Heading>
          <TableContainer width='100%' whiteSpace='unset' paddingTop='20px'>
            <Table variant='simple' border='none'>
              <Thead>
                <Tr>
                  <Th
                    fontFamily='playfair-display, serif'
                    fontWeight='400'
                    textColor='#846D00'
                    fontSize={{ base: '12px', md: '18px' }}
                    whiteSpace='nowrap'
                  >
                    January 1
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>16:00</Td>
                  <Td>
                    Hotel Check-in{' '}
                    <Text fontSize='sm'>
                      Available from 4 PM onwards.
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>18:00</Td>
                  <Td>Welcome Dinner </Td>
                </Tr>
              </Tbody>
              <Thead>
                <Tr>
                  <Th
                    fontFamily='playfair-display, serif'
                    fontWeight='400'
                    textColor='#846D00'
                    fontSize={{ base: '12px', md: '18px' }}
                    whiteSpace='nowrap'
                  >
                    January 2
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>9:00</Td>
                  <Td>Breakfast</Td>
                </Tr>
                <Tr>
                  <Td>14:30</Td>
                  <Td>
                    Local Tastings
                  </Td>
                </Tr>
                <Tr>
                  <Td>15:15</Td>
                  <Td>
                    Refreshments
                  </Td>
                </Tr>
                <Tr>
                  <Td>16:00</Td>
                  <Td>
                    Ceremony
                    <Text fontSize='sm'>
                      Please dress appropriately for 10-15 minutes of sitting outdoors.
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>16:30</Td>
                  <Td>Cocktails</Td>
                </Tr>
                <Tr>
                  <Td>17:30</Td>
                  <Td>Reception</Td>
                </Tr>
              </Tbody>
              <Thead>
                <Tr>
                  <Th
                    fontFamily='playfair-display, serif'
                    fontWeight='400'
                    textColor='#846D00'
                    fontSize={{ base: '12px', md: '18px' }}
                    whiteSpace='nowrap'
                  >
                    January 3
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>9:00</Td>
                  <Td>Breakfast</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
        <VStack paddingTop='80px' spacing='2' alignItems='flex-start'>
          <Heading
            as='h1'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
          >
            Wedding Party
          </Heading>
          <Flex wrap='wrap'>
            <Box padding='20px'>
              <Image
                borderRadius='full'
                boxSize='150px'
                src='/wedding/jane.jpg'
                alt='Maid of honour'
              />
            </Box>
            <Box flex='1' minWidth='300px'>
              <Text fontSize='lg' textTransform='uppercase' paddingTop='20px'>
                Best of Honour
              </Text>
              <Text fontSize='md'>
                Jane is our Maid of Honour. She is also our Best Man, Flower Girl, and Ring Bearer — a combined wedding party super-role we call Best of Honour. During our ceremony, you will find her standing squarely in front of us, holding a large bouquet of flowers, two gold rings, and a basket of petals which she will intermittently toss towards us.
              </Text>
            </Box>
          </Flex>
        </VStack>
        <VStack
          paddingTop='80px'
          spacing='2'
          alignItems='flex-start'
          paddingBottom='40px'
        >
          <Heading
            as='h1'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
          >
            FAQ
          </Heading>
          <Text fontSize='lg' textTransform='uppercase' paddingTop='20px'>
            Dresscode
          </Text>
          <Text fontSize='md'>
            Semi-formal suggested for the ceremony and reception. Casual for all
            other events. Please refrain from wearing a red qipao.
          </Text>
          <Text fontSize='lg' textTransform='uppercase'>
            Gifts
          </Text>
          <Text fontSize='md'>
            We do not have a registry or honeymoon fund. Your presence and well
            wishes are present enough. Sentimental cards will be gratefully
            accepted.
          </Text>
          <Text fontSize='lg' textTransform='uppercase'>
            Accomodation
          </Text>
          <Text fontSize='md'>
            Accommodation at or near the venue will be on us, for the nights
            before and after the wedding.
          </Text>
          <Text fontSize='lg' textTransform='uppercase'>
            Getting there
          </Text>
          <Text fontSize='md'>
            We recommend first flying to Calgary. From the Calgary Airport (YYC), you may rent a car or take a bus/shuttle
            to Canmore.{' '}
          </Text>
          <Text fontSize='lg' textTransform='uppercase'>
            What to pack
          </Text>
          <Text fontSize='md'>
            Most importantly - warm winter clothing and footwear! You may also
            wish to bring a bathing suit for the outdoor hot tub.
          </Text>
          <Text fontSize='lg' textTransform='uppercase'>
            Photos
          </Text>
          <Text fontSize='md'>
            You are welcome to take photos anytime you like, however, we ask
            that you please avoid obstructing our professional photographers,
            Cat and Alex.
          </Text>
          <Text fontSize='lg' textTransform='uppercase'>
            Perfume
          </Text>
          <Text fontSize='md'>
            Please refrain from use of heavily scented products.
          </Text>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Wedding;
