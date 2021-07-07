import React from 'react';
import { Box, Button, Container, Paragraph } from '@mountain-ui/react-components';

import useToggle from './useToggle';

export default {
  title: 'Hooks/useToggle',
  component: useToggle
};

export const Basic = () => {
  const [value, toggle] = useToggle();

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
            {value.toString().toUpperCase()}
          </Paragraph>
        </Box>
        <Box p={3}>
          <Button onClick={toggle} width={1}>
            Toggle
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useToggle.test.js']
};
