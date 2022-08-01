import Head from 'next/head';
import React from 'react';
import {
  Heading,
  Image,
  Text,
  Container,
  VStack,
  Button,
  ButtonGroup,
  UnorderedList,
  ListItem,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

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
          backgroundImage='/wedding/wedding_background.png'
          backgroundSize='100%'
          backgroundRepeat={'no-repeat'}
        >
          <Image
            objectFit='cover'
            src='/wedding/logo.svg'
            alt='Logo of the wedding'
            padding={10}
          />
          <Heading
            as='h1'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
          >
            Andrey & Donna
          </Heading>
          <Heading
            as='h2'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
            padding='5px'
            textAlign={'center'}
          >
            Invite you to celebrate their impending marriage
          </Heading>
          <Heading
            as='h2'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
            padding='10px'
          >
            January 2, 2023 | Canmore, AB
          </Heading>
          <Text as='p' fontSize='lg' textTransform='uppercase'>
            4:00 PM | Bear & Bison Inn | 705 Benchlands Trail
          </Text>
          <Link href='https://forms.gle/2XjUeGw2TswFSS6y9' isExternal paddingTop='30px'>
            <Button
              backgroundColor='#A18607'
              textColor='#fff'
              fontFamily='playfair-display, serif'
              fontWeight='400'
              fontSize='24px'    
            >
              RSVP
            </Button>
          </Link>
        </VStack>
      </Container>
      <Container
        maxW={'7xl'}
        fontFamily='playfair-display, serif'
        fontWeight='400'
        textColor='#846D00'
        backgroundColor='#DEDAD7'
      >
        <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
          <Heading
            as='h1'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
          >
            Schedule
          </Heading>
          <TableContainer width='100%' whiteSpace='unset'>
            <Table variant='simple' border='none'>
              <Thead>
                <Tr>
                  <Th
                    fontFamily='playfair-display, serif'
                    fontWeight='400'
                    textColor='#846D00'
                    fontSize='18px'
                  >
                    January 1, 2023
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>16:00</Td>
                  <Td>
                    Hotel Check-in{' '}
                    <Text fontSize='sm'>
                      Check-in is available from 4 PM onwards.
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>18:00</Td>
                  <Td>
                    Welcome Dinner{' '}
                    <Text fontSize='sm'>
                      We welcome you to join us for a casual meal in our
                      townhome at 21-1022 Rundleview Drive.
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
              <Thead>
                <Tr>
                  <Th
                    fontFamily='playfair-display, serif'
                    fontWeight='400'
                    textColor='#846D00'
                    fontSize='18px'
                  >
                    January 2, 2023
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>9:00</Td>
                  <Td>Breakfast</Td>
                </Tr>
                <Tr>
                  <Td>11:00</Td>
                  <Td>Spa Day OR Winter Hike</Td>
                </Tr>
                <Tr>
                  <Td>14:30</Td>
                  <Td>
                    Local Tastings
                    <Text fontSize='sm'>Beer, whiskey, and charcuterie.</Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>15:15</Td>
                  <Td>
                    Refreshments
                    <Text fontSize='sm'>
                      Coffee, tea, cookies, hot chocolate
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>16:00</Td>
                  <Td>Ceremony</Td>
                </Tr>
                <Tr>
                  <Td>17:00</Td>
                  <Td>Cocktails</Td>
                </Tr>
                <Tr>
                  <Td>18:00</Td>
                  <Td>Reception</Td>
                </Tr>
              </Tbody>
              <Thead>
                <Tr>
                  <Th
                    fontFamily='playfair-display, serif'
                    fontWeight='400'
                    textColor='#846D00'
                    fontSize='18px'
                  >
                    January 3, 2023
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>9:30</Td>
                  <Td>Breakfast</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
        <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
          <Heading
            as='h1'
            textTransform='uppercase'
            fontFamily='playfair-display, serif'
          >
            Location
          </Heading>
          <Link href='https://goo.gl/maps/bfCjxLY8fx3mipwB7' isExternal>
            <Text fontSize='lg'>A Bear & Bison Canadian Country Inn</Text>
            <Text fontSize='md'>705 Benchlands Trail, Canmore, AB T1W 3G9</Text>
          </Link>
        </VStack>
        <VStack
          paddingTop='40px'
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
          <Text fontSize='lg' textTransform='uppercase'>
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
            We do not have a registry: your presence and well wishes are present
            enough. Sentimental cards will be gratefully accepted.
          </Text>
          <Text fontSize='lg' textTransform='uppercase'>
            Accomodation
          </Text>
          <Text fontSize='md'>
            If you travel to Canmore in the winter for us, we will do our best
            to host you. Accommodation at or near the venue will be on us, for
            the nights before and after the wedding. Please RSVP accordingly.
          </Text>
          <Text fontSize='lg' textTransform='uppercase'>
            Getting there
          </Text>
          <Text fontSize='md'>
            Canmore is on Highway 1, about an hour west of Calgary. Driving from
            Vancouver necessitates crossing several mountain passes which
            frequently close due to snowstorms, etc. If you are not experienced
            with winter conditions, we recommend first flying to Calgary. From
            the Calgary Airport (YYC), you may rent a car or take a bus/shuttle
            to Canmore. If you have difficulty arranging transportation, please
            contact us for assistance.{' '}
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
            Cat and Alex. Wedding and photo booth photos will be posted on this
            website once available!
          </Text>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Wedding;
