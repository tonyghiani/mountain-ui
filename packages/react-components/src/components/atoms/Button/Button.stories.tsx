import React from 'react';

import { Grid } from '../Layout';
import { Text } from '../Typography';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
};

export const All = () => (
  <Grid gridTemplateRows='repeat(2, 1fr)' gridAutoFlow='column' gridGap={2} alignItems='center'>
    <Text strong textAlign='center'>
      Primary
    </Text>
    <Button variant='primary'>Click</Button>
    <Text strong textAlign='center'>
      Outline
    </Text>
    <Button variant='outline'>Click</Button>
    <Text strong textAlign='center'>
      Success
    </Text>
    <Button variant='success'>Click</Button>
    <Text strong textAlign='center'>
      Warning
    </Text>
    <Button variant='warning'>Click</Button>
    <Text strong textAlign='center'>
      Error
    </Text>
    <Button variant='error'>Click</Button>
    <Text strong textAlign='center'>
      Disabled
    </Text>
    <Button variant='primary' disabled>
      Click
    </Button>
  </Grid>
);

All.parameters = {
  jest: ['Button.test.js']
};
