import React from 'react';

import { MntGrid } from '../Layout';

import { MntInput } from './Input';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/MntInput',
  component: MntInput,
  tags: ['autodocs']
} satisfies Meta<typeof MntInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    caption: '',
    label: 'Input label',
    size: 'm',
    status: 'default'
  },
};

export const Size: Story = {
  render: () => <MntGrid className="grid-cols-5">
    <MntInput size='xs' placeholder='Input with xs size' />
    <MntInput size='s' placeholder='Input with s size' />
    <MntInput size='m' placeholder='Input with m size' />
    <MntInput size='l' placeholder='Input with l size' />
    <MntInput size='xl' placeholder='Input with xl size' />
  </MntGrid>
};

export const Status: Story = {
  render: () => <MntGrid columns={4}>
    <MntInput status='default' placeholder='Input with default status' />
    <MntInput status='success' placeholder='Input with success status' />
    <MntInput status='warning' placeholder='Input with warning status' />
    <MntInput status='error' placeholder='Input with error status' />
  </MntGrid>
};

export const Decoration: Story = {
  render: () => <MntGrid columns={4}>
    <MntInput value={30} type="number" status='success' label="Age" caption="Your age was correctly saved" />
    <MntInput value="Marco Antonio Ghiani" status='error' label="Name" caption="Oh no, your name seems too long!" />
  </MntGrid>
};
