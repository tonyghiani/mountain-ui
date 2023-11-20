import React, { useRef } from 'react';
import { Container, Heading } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useEventListener from './useEventListener';

const meta = {
  title: 'Hooks/useEventListener',
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {};


function Demo() {
  const textRef = useRef(null);

  useEventListener('click', () => alert('Click anywhere'));
  useEventListener('click', () => alert('Click on specific text item'), textRef);

  return (
    <Container >
      <div className="flex flex-col gap-2 items-center justify-center overflow-hidden h-screen w-full">
        <Heading className="mb-3">Interact with the page to trigger events</Heading>
        <Heading className="mb-3">
          Click anywhere to run the event callback attached to window!
        </Heading>
        <Heading ref={textRef}>
          Click this text to run the event callback attached to it!
        </Heading>
      </div>
    </Container>
  );
};
