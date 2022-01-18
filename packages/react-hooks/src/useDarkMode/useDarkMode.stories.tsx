import React from 'react';
import { Box, Button, Container, Paragraph } from '@mountain-ui/doc-tools';

import useDarkMode from './useDarkMode';

export default {
  title: 'Hooks/useDarkMode',
  component: useDarkMode
};

export const Basic = () => {
  const [isDarkMode, setDarkMode] = useDarkMode({ darkModeClassName: 'dark-mode' });

  return (
    <Container padding={4}>
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
            Body has dark mode class: {isDarkMode.toString()}
          </Paragraph>
        </Box>
        <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setDarkMode(true)} width={1}>
            Enable
          </Button>
          <Button onClick={() => setDarkMode(false)} width={1}>
            Disable
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useDarkMode.test.js']
};
