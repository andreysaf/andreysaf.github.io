import React from 'react';
import { Box, Image, Badge, Text, Button, Flex, Link } from '@chakra-ui/react';

const blogCard = ({
  title,
  desc,
  date,
  imagePath,
  imageAlt,
  readOnMedium,
  link,
}) => {
  return (
    <Link href={link}>
      <Box maxW="sm" borderWidth="1px" m={2} borderRadius="lg" overflow="hidden">
        <Image src={imagePath} alt={imageAlt} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Box noOfLines={3}>
            <Box as="span" color="gray.600" fontSize="sm">
              {desc}
            </Box>
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" color="gray.600" fontSize="sm">
              {date}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default blogCard;
