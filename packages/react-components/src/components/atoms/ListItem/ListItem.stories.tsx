import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntText } from '../Typography';

import { MntListItem } from './ListItem';

const meta = {
  title: 'Atoms/MntListItem',
  component: MntListItem,
  tags: ['autodocs']
} satisfies Meta<typeof MntListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Mountain UI library'
  },
  render: ({ children, ...args }) => (
    <MntListItem {...args} icon={<div>📚</div>}>
      <MntText>{children}</MntText>
    </MntListItem>
  )
};
