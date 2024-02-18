import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntGrid } from '../Layout';

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  MntButton,
  MntButtonColor,
  MntButtonSize,
  MntButtonVariant
} from './Button';

const colors = Object.keys(BUTTON_COLORS) as MntButtonColor[];
const sizes = Object.keys(BUTTON_SIZES) as MntButtonSize[];
const variants = Object.keys(BUTTON_VARIANTS) as MntButtonVariant[];

const meta = {
  title: 'Atoms/MntButton',
  component: MntButton,
  tags: ['autodocs']
} satisfies Meta<typeof MntButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Mountain UI',
    color: 'primary',
    disabled: false,
    rounded: false,
    variant: 'shade'
  }
};

export const Variant: Story = {
  args: {
    color: 'primary'
  },
  render: args => {
    return (
      <MntGrid columns={6} justifyItems='center' alignItems='center'>
        {variants.map(variant => (
          <MntButton key={variant} {...args} variant={variant}>
            {variant}
          </MntButton>
        ))}
      </MntGrid>
    );
  }
};

export const Size: Story = {
  render: () => {
    return (
      <MntGrid columns={3} justifyItems='center' alignItems='center'>
        {sizes.map(size => (
          <MntButton key={size} size={size}>
            Button with size &quot;{size}&quot;
          </MntButton>
        ))}
      </MntGrid>
    );
  }
};

export const Color: Story = {
  render: () => {
    return (
      <MntGrid columns={6} justifyItems='center' alignItems='center'>
        {colors.map(color =>
          variants.map(variant => (
            <MntButton key={`${variant}-${color}`} color={color} variant={variant}>
              {color}
            </MntButton>
          ))
        )}
      </MntGrid>
    );
  }
};

const TestIcon = () => (
  <span className='text-current text-lg'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
    >
      <path d='m20.34 9.32-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78'></path>
    </svg>
  </span>
);

export const Icons: Story = {
  render: () => {
    return (
      <MntGrid columns={3} justifyItems='center' alignItems='center'>
        <MntButton leftIcon={<TestIcon />}>Mountain</MntButton>
        <MntButton rightIcon={<TestIcon />}>Mountain</MntButton>
        <MntButton leftIcon={<TestIcon />} rightIcon={<TestIcon />}>
          Mountain
        </MntButton>
      </MntGrid>
    );
  }
};
