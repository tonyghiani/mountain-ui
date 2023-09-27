import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, BUTTON_COLORS, BUTTON_VARIANTS, ButtonColor, ButtonVariant } from './Button';
import { Grid } from '../Layout';

const colors = Object.keys(BUTTON_COLORS) as ButtonColor[]
const variants = Object.keys(BUTTON_VARIANTS) as ButtonVariant[]

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Mountain UI',
    color: 'primary',
    disabled: false,
    variant: 'shade',
  }
};

export const Variant: Story = {
  args: {
    color: 'primary',
    children: 'Mountain UI',
  },
  render: (args) => {
    return (
      <Grid columns={6} justifyItems='center' alignItems='center'>
        {variants.map(variant => <Button key={variant} {...args} variant={variant} />)}
      </Grid>
    )
  }
};

export const Color: Story = {
  render: () => {
    return (
      <Grid columns={6} justifyItems='center' alignItems='center'>
        {colors.map(color => variants.map(variant => <Button key={`${variant}-${color}`} color={color} variant={variant} >{color}</Button>))}
      </Grid>
    )
  }
};
