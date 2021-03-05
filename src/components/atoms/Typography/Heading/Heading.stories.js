import React from 'react';

import Heading from './Heading';

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading
};

export const HeadingStory = args => <Heading {...args} />;

HeadingStory.storyName = 'Heading';

HeadingStory.args = {
  children: 'Mountain UI library'
};

HeadingStory.parameters = {
  jest: ['Typography.test.js']
};
