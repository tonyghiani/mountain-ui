import React from 'react';
import { Box, Container, Paragraph } from '@mountain-ui/react-components';

import usePrefersDarkMode from './usePrefersDarkMode';

export default {
  title: 'Hooks/usePrefersDarkMode',
  component: usePrefersDarkMode
};

export const Basic = () => {
  const isDarkMode = usePrefersDarkMode();

  return (
    <Container padding={4}>
      <Box
        display='flex'
        borderRadius={3}
        border='1px solid'
        flexDirection='column'
        borderColor='primary.light'
        overflow='hidden'
        width={300}
      >
        <Box bg='primary.light' p={2}>
          <Paragraph fontSize={3} strong textAlign='center' color='text.light'>
            Dark mode preference enabled: {isDarkMode.toString()}
          </Paragraph>
        </Box>
        <Box>
          <Paragraph strong textAlign='center' >
            Switch your mode in the system preferences to see how it detects the mode.
          </Paragraph>
        </Box>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['usePrefersDarkMode.test.js']
};
