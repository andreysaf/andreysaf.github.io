import React from 'react';
import { Box, Flex, Image, Text, Heading, Card, CardBody, CardFooter, Stack, Link, Spacer } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const blogCard = ({
  title,
  desc,
  date,
  imagePath,
  imageAlt,
  external,
  link,
}) => {
  return (
    <Link href={link} isExternal={external}>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={imagePath}
            alt={imageAlt}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}{
              external
                ? <ExternalLinkIcon mx='5px' />
                : <div></div>
            }</Heading>
            <Text noOfLines={[1, 2, 3]}>
              {desc}
            </Text>
            
          </Stack>
        </CardBody>
        <CardFooter>
            <Box as="span" color="gray.600" fontSize="sm">
              {date}
            </Box>
        </CardFooter>
      </Card>
      <Spacer />
    </Link>
  );
};

export default blogCard;