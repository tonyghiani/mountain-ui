import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from '../Typography/Paragraph';

import { Code } from './Code';

const meta = {
  title: 'Atoms/Code',
  component: Code,
  tags: ['autodocs']
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: () => (
    <Paragraph>
      Code component for displaying and styling <Code>variables names</Code>, describe some{' '}
      <Code>keywords</Code> and much more.
    </Paragraph>
  )
};
