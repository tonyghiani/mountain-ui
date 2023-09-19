import React from 'react';

import { Box } from '../';

import Tag from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag
};

export const TagStory = args => (
  <Box display='flex' gap={4}>
    <Tag {...args} size='XS' status='success' onClick={() => {}} />
    <Tag {...args} size='S' status='success' />
    <Tag {...args} size='M' status='success' />
    <Tag {...args} size='L' status='success' />
    <Tag {...args} size='XL' status='success' />
  </Box>
);

TagStory.storyName = 'Tag';

TagStory.args = {
  children: '#mountain-ui'
};

TagStory.parameters = {
  jest: ['Tag.test.js']
};
