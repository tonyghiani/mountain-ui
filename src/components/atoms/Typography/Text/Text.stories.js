import React from 'react';

import Text from './Text';

export default {
  title: 'Atoms/Typography/Text',
  component: Text
};

export const TextStory = ({ text }) => (
  <>
    <Text variant='primary'>{text}</Text>
    <Text variant='secondary'>{text}</Text>
    <Text variant='caption'>{text}</Text>
  </>
);

TextStory.storyName = 'Text';

TextStory.args = {
  text: 'Mountain UI library'
};

TextStory.parameters = {
  jest: ['Typography.test.js']
};
