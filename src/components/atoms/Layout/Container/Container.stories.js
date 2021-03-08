import React from 'react';

import Container from './Container';

export default {
  title: 'Atoms/Layout/Container',
  component: Container
};

export const ContainerStory = args => <Container {...args} />;

ContainerStory.storyName = 'Container';

ContainerStory.args = {
  children: 'This is the content of a container component',
  height: '100vh',
  border: '3px dashed blue'
};

ContainerStory.parameters = {
  jest: ['Layout.test.js']
};
