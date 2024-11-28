import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntBox } from '../Layout';

import { MntTag } from './Tag';

const meta = {
  title: 'Atoms/MntTag',
  component: MntTag,
  tags: ['autodocs']
} satisfies Meta<typeof MntTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: '#mountain-ui',
    size: 'm'
  }
};

export const Size: Story = {
  args: {
    children: '#mountain-ui'
  },
  render: args => (
    <MntBox className='flex gap-4'>
      <MntTag {...args} size='xs' />
      <MntTag {...args} size='s' />
      <MntTag {...args} size='m' />
      <MntTag {...args} size='l' />
      <MntTag {...args} size='xl' />
    </MntBox>
  )
};

export const Status: Story = {
  args: {
    children: '#mountain-ui'
  },
  render: args => (
    <MntBox className='flex gap-4'>
      <MntTag {...args} size='m' status='success' />
      <MntTag {...args} size='m' status='warning' />
      <MntTag {...args} size='m' status='error' />
    </MntBox>
  )
};
