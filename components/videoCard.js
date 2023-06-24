import React from 'react';
import { Text, Heading, Divider, Card, CardBody, AspectRatio, Stack, Link, Spacer } from '@chakra-ui/react';

const videoCard = ({
  title,
  desc,
  videoEmbed,
  videoTitle,
  link,
}) => {
  return (
      <Card maxW='sm'>
        <CardBody>
        <AspectRatio maxW='331px' ratio={16 / 9}>
          <iframe
            title={videoTitle}
            src={videoEmbed}
            allowFullScreen
          />
          </AspectRatio>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text noOfLines={[1, 2, 3]}>
              {desc}
            </Text>
          </Stack>
        </CardBody>
      </Card>
  );
};

export default videoCard;