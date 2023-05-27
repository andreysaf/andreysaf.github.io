import React from 'react';
import { Box, Image, Text, Heading, Divider, Card, CardBody, CardFooter, Stack, Link, Spacer } from '@chakra-ui/react';

const blogCard = ({
  title,
  desc,
  date,
  imagePath,
  imageAlt,
  link,
}) => {
  return (
    <Link href={link}>
      <Card maxW='sm' m={2}>
        <CardBody>
          <Image
            src={imagePath}
            alt={imageAlt}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
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