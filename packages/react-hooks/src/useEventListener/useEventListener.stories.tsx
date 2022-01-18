import React, { useRef } from 'react';
import { Box, Container, Heading } from '@mountain-ui/doc-tools';

import useEventListener from './useEventListener';

export default {
  title: 'Hooks/useEventListener',
  component: useEventListener
};

export const Basic = () => {
  const textRef = useRef(null);

  useEventListener('click', () => alert('Click anywhere'));
  useEventListener('click', () => alert('Click on specific text item'), textRef);

  return (
    <Container padding={4}>
      <Box width={1} height='100vh' overflow='hidden' justifyContent='center' alignItems='center'>
        <Heading mb={3}>Interact with the page to trigger events</Heading>
        <Heading mb={3} as='h2'>
          Click anywhere to run the event callback attached to window!
        </Heading>
        <Heading ref={textRef} as='h2'>
          Click this text to run the event callback attached to it!
        </Heading>
      </Box>
    </Container>
  );
};

Basic.args = {};

Basic.parameters = {
  jest: ['useEventListener.test.js']
};
