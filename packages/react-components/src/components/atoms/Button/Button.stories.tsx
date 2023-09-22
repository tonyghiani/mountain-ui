import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Button, { BUTTON_COLORS, BUTTON_VARIANTS, ButtonColor, ButtonVariant } from './Button';
import { Grid } from '../Layout';

const colors = Object.keys(BUTTON_COLORS) as ButtonColor[]
const variants = Object.keys(BUTTON_VARIANTS) as ButtonVariant[]

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio', options: variants
    },
    color: {
      control: 'inline-radio', options: colors
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
  },
} satisfies Meta<typeof Button>;

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'shade',
    color: 'primary',
    children: 'Mountain UI',
  }
};

export const Variant: Story = {
  args: {
    color: 'primary',
    children: 'Mountain UI',
  },
  render: (args) => {
    return (
      <Grid columns={6}>
        {variants.map(variant => <Button key={variant} {...args} variant={variant} />)}
      </Grid>
    )
  }
};

export const Color: Story = {
  render: () => {
    return (
      <Grid columns={6} justifyContent='center' alignItems='center'>
        {colors.map(color => variants.map(variant => <Button key={`${variant}-${color}`} color={color} variant={variant} >{color}</Button>))}
      </Grid>
    )
  }
};

Variant.parameters = {
  jest: ['Button.test.js']
};
