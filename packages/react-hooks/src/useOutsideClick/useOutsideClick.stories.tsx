import React, { useRef } from 'react';
import { Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useOutsideClick from './useOutsideClick';

const meta = {
  title: 'Hooks/useOutsideClick',
  component: Demo
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const containerRef = useRef();
  useOutsideClick(containerRef, () => alert('Click outside registered'), 'mousedown');

  return (
    <Container>
      <Card ref={containerRef} className='p-4'>
        <Text>Click anywhere outside the box to run the event callback!</Text>
      </Card>
    </Container>
  );
}
