import React from 'react';
import { Box, Button, Container, Grid, Paragraph } from '@mountain-ui/react-components';

import useLocalStorage from './useLocalStorage';

export default {
  title: 'Hooks/useLocalStorage',
  component: useLocalStorage
};

export const Basic = () => {
  const [value1, setValue1] = useLocalStorage('my_favorite_food', '🍖');
  const [value2, setValue2] = useLocalStorage('my_favorite_food', '🧅');

  return (
    <Container padding={4} display='flex' gap={4}>
      <Box
        display='flex'
        borderRadius={3}
        border='1px solid'
        flexDirection='column'
        borderColor='blue.400'
        overflow='hidden'
        width={300}
      >
        <Box bg='blue.400' p={2}>
          <Paragraph fontSize={3} strong textAlign='center' color='light'>
            Stored value: {value1}
          </Paragraph>
          <Paragraph fontSize={0} strong textAlign='center' color='light'>
            Refresh the page to retrieve your stored value.
          </Paragraph>
        </Box>
        <Grid gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setValue1('🍕')} width={1}>
            Store a 🍕
          </Button>
          <Button onClick={() => setValue1('🍔')} width={1}>
            Store a 🍔
          </Button>
        </Grid>
      </Box>
      <Box
        display='flex'
        borderRadius={3}
        border='1px solid'
        flexDirection='column'
        borderColor='blue.400'
        overflow='hidden'
        width={300}
      >
        <Box bg='blue.400' p={2}>
          <Paragraph fontSize={3} strong textAlign='center' color='light'>
            Stored value: {value2}
          </Paragraph>
          <Paragraph fontSize={0} strong textAlign='center' color='light'>
            Refresh the page to retrieve your stored value.
          </Paragraph>
        </Box>
        <Grid gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setValue2('🥐')} width={1}>
            Store a 🥐
          </Button>
          <Button onClick={() => setValue2('🥘')} width={1}>
            Store a 🥘
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
