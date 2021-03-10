import React from 'react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
};

export const Primary = args => <Button {...args}>Click</Button>;

Primary.args = {
  variant: 'success'
};

export const Outline = args => <Button {...args}>Click</Button>;

Outline.args = {
  variant: 'outline'
};

Primary.parameters = Outline.parameters = {
  jest: ['Button.test.js']
};
