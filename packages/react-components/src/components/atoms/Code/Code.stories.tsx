import React from 'react';

import { Paragraph } from '../Typography/Paragraph';

import Code from './Code';

export default {
  title: 'Atoms/Code',
  component: Code
};

export const CodeStory = args => (
  <Paragraph>
    The <Code {...args}>Code</Code> component is used to hightlight code keywords. The{' '}
    <Code {...args}>Code</Code> component is used to hightlight code keywords. The{' '}
    <Code {...args}>Code</Code> component is used to hightlight code keywords.
  </Paragraph>
);

CodeStory.storyName = 'Code';

CodeStory.parameters = {
  jest: ['Code.test.js']
};
