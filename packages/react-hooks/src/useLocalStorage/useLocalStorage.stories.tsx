import React from 'react';
import { Box, Button, Container, Grid, Paragraph } from '@mountain-ui/react-components';

import useLocalStorage from './useLocalStorage';

export default {
  title: 'Hooks/useLocalStorage',
  component: useLocalStorage
};

export const Basic = () => {
  const [value, setValue] = useLocalStorage('my_favorite_food', '🍖');

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
            Stored value: {value}
          </Paragraph>
          <Paragraph fontSize={0} strong textAlign='center' color='text.light'>
            Refresh the page to retrieve your stored value.
          </Paragraph>
        </Box>
        <Grid gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setValue('🍕')} width={1}>
            Store a 🍕
          </Button>
          <Button onClick={() => setValue('🍔')} width={1}>
            Store a 🍔
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useLocalStorage.test.js']
};
