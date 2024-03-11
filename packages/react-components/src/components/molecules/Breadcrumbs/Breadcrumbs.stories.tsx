import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntText } from '../../atoms/Typography';

import { MntBreadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Molecules/MntBreadcrumbs',
  component: MntBreadcrumbs,
  tags: ['autodocs']
} satisfies Meta<typeof MntBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    separator: '/',
    children: [
      <MntText key='home'>Home</MntText>,
      <MntText key='blog'>Blog</MntText>,
      <MntText key='post'>A design system called Mountain UI</MntText>
    ]
  }
};
