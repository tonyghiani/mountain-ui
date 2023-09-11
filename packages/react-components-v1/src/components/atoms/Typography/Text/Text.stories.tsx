import React from 'react';

import Text, { TextProps } from './Text';

export default {
  title: 'Atoms/Typography/Text',
  component: Text
};

export const TextStory = (args: TextProps) => <Text {...args} />;

TextStory.storyName = 'Text';

TextStory.args = {
  children: 'Mountain UI library'
};

TextStory.parameters = {
  jest: ['Typography.test.js']
};
