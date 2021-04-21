import React from 'react';
import { Mountains } from '@mountain-ui/icons';

import Icon from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: 'color'
      }
    },
    variant: {
      control: {
        type: 'radio'
      }
    },
    fontSize: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 2
      },
      defaultValue: 64
    }
  }
};

export const Basic = args => (
  <Icon {...args}>
    <Mountains />
  </Icon>
);

Basic.parameters = {
  jest: ['Icon.test.js']
};
