import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0';

import theme from '../../../defaultTheme'

import { BaseTypography, TypographyProps } from './Typography';

console.log(theme);

export default {
  title: 'Atoms/Typography',
  component: BaseTypography,
  argTypes: {}
} as Meta;

const Template: Story<TypographyProps> = args => <BaseTypography {...args} >Mountain UI</BaseTypography>;

export const Basic = Template.bind({});

Basic.args = {
  fontSize: 'body'
};


Basic.parameters = {
  jest: ['Typography.test.js'],
};