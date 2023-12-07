import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntGrid } from '../../Layout';

import { MntText, MntTextVariant, TEXT_VARIANTS } from './Text';

const variants = Object.keys(TEXT_VARIANTS) as MntTextVariant[]

const meta = {
  title: 'Atoms/Typography/MntText',
  component: MntText,
  tags: ['autodocs']
} satisfies Meta<typeof MntText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: "Mountain UI",
    variant: 'primary',
    bold: false,
    truncate: false,
    uncopyable: false,
    underline: false,
  }
};

export const Variant: Story = {
  args: {
    bold: false,
    truncate: false,
    uncopyable: false,
    underline: false,
  },
  render: (args) => {
    return (
      <MntGrid columns={3} justifyItems='center' alignItems='center'>
        {variants.map(variant => <MntText key={variant} {...args} variant={variant}>{variant} text</MntText>)}
      </MntGrid>
    )
  }
};