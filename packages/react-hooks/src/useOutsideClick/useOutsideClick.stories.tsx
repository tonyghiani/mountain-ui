import React, { useRef } from 'react';
import { Box, Container, Text } from '@mountain-ui/react-components';

import useOutsideClick from './useOutsideClick';

export default {
  title: 'Hooks/useOutsideClick',
  component: useOutsideClick
};

export const Basic = () => {
  const containerRef = useRef();
  useOutsideClick(containerRef, () => alert('Click outside registered'), 'mousedown');

  return (
    <Container padding={4}>
      <Box
        ref={containerRef}
        display='flex'
        justifyContent='center'
        alignItems='center'
        width={400}
        height={200}
        backgroundColor='blue.300'
        borderRadius={3}
        p={3}
      >
        <Text strong color='light' fontSize={5}>
          Click anywhere outside the box to run the event callback!
        </Text>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useOutsideClick.test.js']
};
