import React from 'react';
import { Box, Button, Container, Grid, Paragraph } from '@mountain-ui/react-components';

import useFontSize from './useFontSize';

export default {
  title: 'Hooks/useFontSize',
  component: useFontSize
};

export const Basic = () => {
  const [fontSize, setFontSize] = useFontSize();

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
            Font size variable: {fontSize}
          </Paragraph>
        </Box>
        <Grid gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setFontSize(12)} width={1}>
            Descrease
          </Button>
          <Button onClick={() => setFontSize(20)} width={1}>
            Increase
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useFontSize.test.js']
};
