import React, { useRef } from 'react';
import { Box, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useOutsideClick from './useOutsideClick';

const meta = {
  title: 'Hooks/useOutsideClick',
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
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
        backgroundColor='hsl(206, 84%, 60%)'
        borderRadius={16}
        p={3}
      >
        <Text strong color='#FFFFFF' fontSize={5}>
          Click anywhere outside the box to run the event callback!
        </Text>
      </Box>
    </Container>
  );
};
