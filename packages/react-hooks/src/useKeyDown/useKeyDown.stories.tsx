import React from 'react';
import { Container, Heading } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useKeyDown from './useKeyDown';

const meta = {
  title: 'Hooks/useKeyDown',
  component: Demo
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  useKeyDown('Enter', () => alert('Press Enter'));
  useKeyDown('f', ev => ev.metaKey && alert('Press Cmd+f'));

  return (
    <Container>
      <div className='flex flex-col gap-2 items-center justify-center overflow-hidden h-screen w-full'>
        <Heading className='mb-3'>Interact with the keyboard to trigger events</Heading>
        <Heading className='mb-3'>Press Enter to trigger an alert</Heading>
        <Heading>Press Cmd+f to trigger an alert</Heading>
      </div>
    </Container>
  );
}
