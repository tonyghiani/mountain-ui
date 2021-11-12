import React from 'react';

import Tag from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag
};

export const TagStory = args => <Tag {...args} />;

TagStory.storyName = 'Tag';

TagStory.args = {
  children: '#mountain-ui'
};

TagStory.parameters = {
  jest: ['Tag.test.js']
};
