import React from 'react';

import { Grid } from '../Layout';

import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

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
  render: () => <Grid className="grid-cols-5">
    <Input size='xs' placeholder='Input with xs size' />
    <Input size='s' placeholder='Input with s size' />
    <Input size='m' placeholder='Input with m size' />
    <Input size='l' placeholder='Input with l size' />
    <Input size='xl' placeholder='Input with xl size' />
  </Grid>
};

export const Status: Story = {
  render: () => <Grid columns={4}>
    <Input status='default' placeholder='Input with default status' />
    <Input status='success' placeholder='Input with success status' />
    <Input status='warning' placeholder='Input with warning status' />
    <Input status='error' placeholder='Input with error status' />
  </Grid>
};

export const Decoration: Story = {
  render: () => <Grid columns={4}>
    <Input value={30} type="number" status='success' label="Age" caption="Your age was correctly saved" />
    <Input value="Marco Antonio Ghiani" status='error' label="Name" caption="Oh no, your name seems too long!" />
  </Grid>
};
