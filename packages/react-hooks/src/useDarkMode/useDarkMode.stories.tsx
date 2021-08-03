import React from 'react';
import { Box, Button, Container, Grid, Paragraph } from '@mountain-ui/react-components';

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
        borderRadius={3}
        border='1px solid'
        flexDirection='column'
        borderColor='primary.light'
        overflow='hidden'
        width={300}
      >
        <Box bg='primary.light' p={2}>
          <Paragraph fontSize={3} strong textAlign='center' color='text.light'>
            Body has dark mode class: {isDarkMode.toString()}
          </Paragraph>
        </Box>
        <Grid gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setDarkMode(true)} width={1}>
            Enable
          </Button>
          <Button onClick={() => setDarkMode(false)} width={1}>
            Disable
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useDarkMode.test.js']
};
