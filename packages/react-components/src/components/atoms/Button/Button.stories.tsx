import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

import { BUTTON_COLORS, BUTTON_VARIANTS } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'inline-radio', options: Object.keys(BUTTON_COLORS)
    },
    variant: {
      control: 'inline-radio', options: Object.keys(BUTTON_VARIANTS)
    },
  },
} satisfies Meta<typeof Button>;

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Shade: Story = {
  args: {
    variant: 'shade',
    color: 'primary',
    children: 'Mountain UI',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Mountain UI',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'primary',
    children: 'Mountain UI',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    color: 'primary',
    children: 'Mountain UI',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Mountain UI',
  },
};

Shade.parameters = {
  jest: ['Button.test.js']
};
