import React from 'react';

import Heading from './Heading';

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading,
  argTypes: {}
};

export const HeadingStory = ({ text, ...args }) => <Heading {...args}>{text}</Heading>;

HeadingStory.storyName = 'Heading';

HeadingStory.args = {
  text: 'Mountain UI library'
};

HeadingStory.parameters = {
  jest: ['Typography.test.js']
};
