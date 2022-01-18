import React from 'react';
import { Box, Container, Paragraph } from '@mountain-ui/doc-tools';

import useMediaQuery from './useMediaQuery';

export default {
  title: 'Hooks/useMediaQuery',
  component: useMediaQuery
};

export const Basic = () => {
  const mediaQueries = {
    mobile: 'screen and (min-width: 1px) and (max-width: 512px)',
    tablet: 'screen and (min-width: 513px) and (max-width: 1024px)',
    desktop: 'screen and (min-width: 1025px) and (max-width: 1536px)',
    wideScreen: 'screen and (min-width: 1537px)'
  };

  const medias = {
    isMobile: useMediaQuery(mediaQueries.mobile),
    isTablet: useMediaQuery(mediaQueries.tablet),
    isDesktop: useMediaQuery(mediaQueries.desktop),
    'isMobile or isTablet': useMediaQuery(mediaQueries.mobile, mediaQueries.tablet)
  };

  return (
    <Container padding={4}>
      <Paragraph mb={2} fontStyle='oblique'>
        Try to resize the window to see the flags changing.
      </Paragraph>
      <Box
        display='grid'
        gridGap={2}
        gridTemplateColumns={['1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}
        mt={3}
      >
        {Object.keys(medias).map((name, i) => (
          <Box key={i}>
            <Box
              display='flex'
              borderRadius={12}
              border='1px solid'
              flexDirection='column'
              borderColor='hsl(206, 84%, 60%)'
              overflow='hidden'
              width={300}
            >
              <Box bg='hsl(206, 84%, 60%)' p={2}>
                <Paragraph fontSize={3} strong textAlign='center' color='#FFFFFF'>
                  {name}
                </Paragraph>
              </Box>
              <Paragraph strong textAlign='center' p={2}>
                {medias[name].toString()}
              </Paragraph>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useMediaQuery.test.js']
};
