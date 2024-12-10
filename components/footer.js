import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  Link,
} from '@chakra-ui/react';
import { Github, Linkedin, Medium, Youtube } from 'grommet-icons';

const SocialButton = ({ children, label, href }) => {
  return <Link href={href} isExternal>{children}</Link>;
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
        <Stack direction={'column'} p={2}>
          <Link href='/'>
            <Text>Andrey Safonov</Text>
          </Link>
        </Stack>

        <Stack direction={'column'} spacing={6} p={2}>
          <Link href='/portfolio'>
            <Heading size='xs'>Portfolio</Heading>
          </Link>
          <Link href='/blog'>
            <Heading size='xs'>Blog</Heading>
          </Link>
        </Stack>
        <Stack direction={'row'} spacing={8} p={2}>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/andreysaf/'}
          >
            <Linkedin
              color={useColorModeValue('#2d3848', 'white')}
              size='medium'
            />
          </SocialButton>
          <SocialButton label={'GitHub'} href={'https://github.com/andreysaf'}>
            <Github
              color={useColorModeValue('#2d3848', 'white')}
              size='medium'
            />
          </SocialButton>

          <SocialButton label={'Medium'} href={'https://andreysaf.medium.com/'}>
            <Medium
              color={useColorModeValue('#2d3848', 'white')}
              size='medium'
            />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
