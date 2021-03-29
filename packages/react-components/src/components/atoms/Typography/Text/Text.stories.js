import React from 'react';

import Text from './Text';

export default {
  title: 'Atoms/Typography/Text',
  component: Text
};

export const TextStory = args => <Text {...args} />;

TextStory.storyName = 'Text';

TextStory.args = {
  children: 'Mountain UI library'
};

TextStory.parameters = {
  jest: ['Typography.test.js']
};
