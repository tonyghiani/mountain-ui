import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0';

import { BaseTypography, Heading as HeadingComponent, HeadingProps, TypographyProps } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: BaseTypography,
  argTypes: {

  }
} as Meta;

const HeadingTemplate: Story<HeadingProps> = args => <HeadingComponent {...args} />

export const Heading = () => <>
  {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(variant => <HeadingTemplate key={variant} variant={variant}>Mountain UI component library</HeadingTemplate>)}
</>


Heading.args = {
};


Heading.parameters = {
  jest: ['Typography.test.js'],
};