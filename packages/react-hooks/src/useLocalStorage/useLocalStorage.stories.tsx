import React from 'react';
import { Box, Button, Container, Paragraph } from '@mountain-ui/doc-tools';

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
        borderRadius={12}
        border='1px solid'
        flexDirection='column'
        borderColor='hsl(206, 84%, 60%)'
        overflow='hidden'
        width={300}
      >
        <Box bg='hsl(206, 84%, 60%)' p={2}>
          <Paragraph fontSize={3} strong textAlign='center' color='#FFFFFF'>
            Stored value: {value1}
          </Paragraph>
          <Paragraph fontSize={3} strong textAlign='center' color='#FFFFFF'>
            Refresh the page to retrieve your stored value.
          </Paragraph>
        </Box>
        <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setValue1('🍕')} width={1}>
            Store a 🍕
          </Button>
          <Button onClick={() => setValue1('🍔')} width={1}>
            Store a 🍔
          </Button>
        </Box>
      </Box>
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
            Stored value: {value2}
          </Paragraph>
          <Paragraph fontSize={3} strong textAlign='center' color='#FFFFFF'>
            Refresh the page to retrieve your stored value.
          </Paragraph>
        </Box>
        <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setValue2('🥐')} width={1}>
            Store a 🥐
          </Button>
          <Button onClick={() => setValue2('🥘')} width={1}>
            Store a 🥘
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useLocalStorage.test.js']
};
