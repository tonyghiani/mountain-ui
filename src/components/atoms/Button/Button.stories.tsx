import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

// const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Basic: Story<ButtonProps> = (args) => <Button {...args}>Click</Button>;

Basic.args = {
  backgroundColor: 'red'
};

Basic.parameters = {
  jest: ['Button.test.js'],
};