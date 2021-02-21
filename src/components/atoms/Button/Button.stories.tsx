import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {}
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Click</Button>;

export const Basic = Template.bind({})

Basic.args = {};

Basic.parameters = {
  jest: ['Button.test.js'],
};