import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { List } from './List';
import { Text } from '../Typography';
import { ListItem } from '../ListItem';

const meta = {
  title: 'Atoms/List',
  component: List,
  tags: ['autodocs']
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Mountain UI library',
    dense: false,
    horizontal: false
  },
  render: ({ children, ...args }) => (
    <List {...args}>
      <ListItem>
        <Text>{children}</Text>
      </ListItem>
      <ListItem>
        <Text>{children}</Text>
      </ListItem>
      <ListItem>
        <Text>{children}</Text>
      </ListItem>
      <ListItem>
        <Text>{children}</Text>
      </ListItem>
    </List>
  )
};
