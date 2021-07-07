import React from 'react';
import { Box, Button, Container, Grid, Paragraph } from '@mountain-ui/react-components';

import useBoolean from './useBoolean';

export default {
  title: 'Hooks/useBoolean',
  component: useBoolean
};

export const Basic = () => {
  const [value, { on, off, toggle }] = useBoolean();

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
        <Grid gridTemplateColumns='repeat(3, 1fr)' gridGap={2} p={3}>
          <Button onClick={on} width={1}>
            On
          </Button>
          <Button onClick={off} width={1}>
            Off
          </Button>
          <Button onClick={toggle} width={1}>
            Toggle
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useBoolean.test.js']
};
