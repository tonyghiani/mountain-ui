import { Meta, StoryObj } from '@storybook/react';

import { MntContainer } from './Container';

const meta = {
  title: 'Atoms/Layout/MntContainer',
  component: MntContainer,
  tags: ['autodocs']
} satisfies Meta<typeof MntContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {
  args: {
    className: 'h-32 border-4 border-dashed border-blue-600',
    size: 'article'
  }
};

export const Large: Story = {
  args: {
    className: 'h-32 border-4 border-dashed border-blue-600',
    size: 'large'
  }
};

export const Wide: Story = {
  args: {
    className: 'h-32 border-4 border-dashed border-blue-600',
    size: 'wide'
  }
};

export const Ultra: Story = {
  args: {
    className: 'h-32 border-4 border-dashed border-blue-600',
    size: 'ultra'
  }
};
