import {
  Box,
  SimpleGrid,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  Link,
} from '@chakra-ui/react';
import { Github, Linkedin, Medium, Youtube } from 'grommet-icons';

const SocialButton = ({ children, label, href }) => {
  return <Link href={href}>{children}</Link>;
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      width={'100%'}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={{ base: 4, md: 8 }}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'left', md: 'center' }}
      >
        <Stack direction={'column'}>
          <Link href="/">
            <Text>Andrey Safonov</Text>
          </Link>
        </Stack>

        <Stack direction={'column'}>
          <Heading size="xs">Products</Heading>
          <Link href="/webviewer">
            <Text>WebViewer</Text>
          </Link>
          <Link href="/webviewerVideo">
            <Text>WebViewer Video</Text>
          </Link>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'GitHub'} href={'https://github.com/andreysaf'}>
            <Github
              color={useColorModeValue('#2d3848', 'white')}
              size="medium"
            />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/andrey-safonov1/'}
          >
            <Linkedin
              color={useColorModeValue('#2d3848', 'white')}
              size="medium"
            />
          </SocialButton>
          <SocialButton label={'Medium'} href={'https://andreysaf.medium.com/'}>
            <Medium
              color={useColorModeValue('#2d3848', 'white')}
              size="medium"
            />
          </SocialButton>
          <SocialButton
            label={'YouTube'}
            href={'https://www.youtube.com/c/PDFTronSDK'}
          >
            <Youtube
              color={useColorModeValue('#2d3848', 'white')}
              size="medium"
            />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}