import React from 'react';

import { Box, Heading } from '..';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input
};

export const InputStory = args => (
  <Box>
    <Heading variant='h2' mb={5}>
      Input sizes
    </Heading>
    <Box display='flex' gap={4}>
      <Input {...args} size='XS' />
      <Input {...args} size='S' />
      <Input {...args} size='M' placeholder='Search'>
        😀
      </Input>
      <Input {...args} size='L' />
      <Input {...args} size='XL' />
    </Box>
    <Heading variant='h2' mb={5}>
      Input status
    </Heading>
    <Box display='flex' gap={4}>
      <Input {...args} size='M' status='default' />
      <Input {...args} size='M' status='success' />
      <Input {...args} size='M' status='warning' />
      <Input {...args} size='M' status='error' />
    </Box>
    <Heading variant='h2' mb={5}>
      Input with label
    </Heading>
    <Box display='flex' gap={4}>
      <Input {...args} size='M' label='Name' caption='Your name is nice!' status='success' />
      <Input {...args} size='M' label='Age' caption='Something wrong' status='error' />
    </Box>
  </Box>
);

InputStory.storyName = 'Input';

InputStory.parameters = {
  jest: ['Input.test.js']
};
