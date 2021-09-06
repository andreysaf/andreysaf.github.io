import React from 'react';
import { Box, Image, useBreakpointValue, Link } from '@chakra-ui/react';

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
      <Box maxW={useBreakpointValue({ base: "320px", md: "sm" })} borderWidth="1px" m={2} borderRadius="lg" overflow="hidden">
        <Image src={imagePath} alt={imageAlt} />

        <Box p={useBreakpointValue({ base: 3, md: 6 })}>
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
