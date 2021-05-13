import React from 'react';
import { Box, Container, Grid, Paragraph, useTheme } from '@mountain-ui/react-components';

import useMediaQuery from './useMediaQuery';

export default {
  title: 'Hooks/useMediaQuery',
  component: useMediaQuery
};

export const Basic = () => {
  const { mediaQueries } = useTheme();

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
      <Grid gridGap={2} gridTemplateColumns={['1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']} mt={3}>
        {Object.keys(medias).map((name, i) => (
          <Box key={i}>
            <Box
              display='flex'
              borderRadius={3}
              border='1px solid'
              flexDirection='column'
              borderColor='primary.light'
              overflow='hidden'
            >
              <Box bg='primary.light' p={2}>
                <Paragraph strong textAlign='center'>
                  {name}
                </Paragraph>
              </Box>
              <Box p={2}>
                <Paragraph strong textAlign='center'>
                  {medias[name].toString()}
                </Paragraph>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useMediaQuery.test.js']
};
