import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';
import { Box } from '../Layout';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs']
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: '#mountain-ui',
    size: 'm',
  },
};

export const Size: Story = {
  args: {
    children: '#mountain-ui'
  },
  render: (args) => (
    <Box className='flex gap-4'>
      <Tag {...args} size='xs' />
      <Tag {...args} size='s' />
      <Tag {...args} size='m' />
      <Tag {...args} size='l' />
      <Tag {...args} size='xl' />
    </Box>
  )
};

export const Status: Story = {
  args: {
    children: '#mountain-ui'
  },
  render: (args) => (
    <Box className='flex gap-4'>
      <Tag {...args} size='m' status='success' />
      <Tag {...args} size='m' status='warning' />
      <Tag {...args} size='m' status='error' />
    </Box>
  )
};
