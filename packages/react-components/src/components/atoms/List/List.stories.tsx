import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntList } from './List';
import { MntText } from '../Typography';
import { MntListItem } from '../ListItem';

const meta = {
  title: 'Atoms/MntList',
  component: MntList,
  tags: ['autodocs']
} satisfies Meta<typeof MntList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Mountain UI library',
    dense: false,
    horizontal: false
  },
  render: ({ children, ...args }) => (
    <MntList {...args}>
      <MntListItem>
        <MntText>{children}</MntText>
      </MntListItem>
      <MntListItem>
        <MntText>{children}</MntText>
      </MntListItem>
      <MntListItem>
        <MntText>{children}</MntText>
      </MntListItem>
      <MntListItem>
        <MntText>{children}</MntText>
      </MntListItem>
    </MntList>
  )
};
