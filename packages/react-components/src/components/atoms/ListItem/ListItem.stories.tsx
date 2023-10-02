import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Typography';

import { ListItem } from './ListItem';

const meta = {
  title: 'Atoms/ListItem',
  component: ListItem,
  tags: ['autodocs']
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Mountain UI library'
  },
  render: ({ children, ...args }) => (
    <ListItem {...args} icon={<div>📚</div>}>
      <Text>{children}</Text>
    </ListItem>
  )
};
