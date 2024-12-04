import React from 'react';
import { useBoolean } from '@mountain-ui/react-hooks';
import { Meta, StoryObj } from '@storybook/react';
import { MntBox, MntButton } from 'src/components/atoms';

import { MntModal } from './Modal';

const meta = {
  title: 'Molecules/MntModal',
  component: MntModal,
  tags: ['autodocs']
} satisfies Meta<typeof MntModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
  render: () => {
    const [isOpen, { on, off }] = useBoolean();

    return (
      <>
        <MntButton onClick={on}>Open modal!</MntButton>
        <MntModal isOpen={isOpen} onClose={off}>
          <MntBox className='flex'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </MntBox>
        </MntModal>
      </>
    );
  }
};
