import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntGrid } from '../Layout';

import { BUTTON_COLORS, BUTTON_VARIANTS, MntButton, MntButtonColor, MntButtonVariant } from './Button';

const colors = Object.keys(BUTTON_COLORS) as MntButtonColor[]
const variants = Object.keys(BUTTON_VARIANTS) as MntButtonVariant[]

const meta = {
  title: 'Atoms/MntButton',
  component: MntButton,
  tags: ['autodocs'],
} satisfies Meta<typeof MntButton>;

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
      <MntGrid columns={6} justifyItems='center' alignItems='center'>
        {variants.map(variant => <MntButton key={variant} {...args} variant={variant} />)}
      </MntGrid>
    )
  }
};

export const Color: Story = {
  render: () => {
    return (
      <MntGrid columns={6} justifyItems='center' alignItems='center'>
        {colors.map(color => variants.map(variant => <MntButton key={`${variant}-${color}`} color={color} variant={variant} >{color}</MntButton>))}
      </MntGrid>
    )
  }
};
