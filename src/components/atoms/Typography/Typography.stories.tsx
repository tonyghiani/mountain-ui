import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0';

import { BaseTypography, Heading as HeadingComponent, TypographyProps } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: BaseTypography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ],
      },
    }
  }
} as Meta;

const Template: Story<TypographyProps> = args => <BaseTypography {...args}>Mountain UI</BaseTypography>;

export const Basic = Template.bind({});

Basic.args = {};

const HeadingTemplate = args => <HeadingComponent {...args}>Mountain UI</HeadingComponent>;

export const Heading = HeadingTemplate.bind({});

Heading.args = {
  variant: 'h1'
};


Basic.parameters = {
  jest: ['Typography.test.js'],
};