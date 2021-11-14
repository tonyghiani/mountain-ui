import React from 'react';

import { Box } from '../';

import Tag from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag
};

export const TagStory = args => (
  <Box display='flex' gap={4}>
    <Tag {...args} size='XS' />
    <Tag {...args} size='S' />
    <Tag {...args} size='M' />
    <Tag {...args} size='L' />
    <Tag {...args} size='XL' />
  </Box>
);

TagStory.storyName = 'Tag';

TagStory.args = {
  children: '#mountain-ui'
};

TagStory.parameters = {
  jest: ['Tag.test.js']
};
