import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntParagraph } from '../Typography/Paragraph';

import { MntCode } from './Code';

const meta = {
  title: 'Atoms/MntCode',
  component: MntCode,
  tags: ['autodocs']
} satisfies Meta<typeof MntCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: () => (
    <MntParagraph>
      MntCode component for displaying and styling <MntCode>variables names</MntCode>, describe some{' '}
      <MntCode>keywords</MntCode> and much more.
    </MntParagraph>
  )
};
