import React from 'react';
import { Box, AspectRatio, Image, Text, Heading, Card, CardBody, CardFooter, Stack, Link, Spacer } from '@chakra-ui/react';
import { StarIcon, ExternalLinkIcon } from '@chakra-ui/icons';

const gitCard = ({
  title,
  desc,
  stars,
  external,
  link,
}) => {
  return (
    <Link href={link} isExternal={external}>
      <Card maxW='sm'>
        <CardBody>
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
              <StarIcon
                color='teal.500'
              /> {stars} stars
            </Box>
        </CardFooter>
      </Card>
      <Spacer />
    </Link>
  );
};

export default gitCard;