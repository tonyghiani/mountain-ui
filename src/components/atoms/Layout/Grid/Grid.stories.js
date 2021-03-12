import React from 'react';

import BaseLayout from '../Box';

import Grid from './Grid';

export default {
  title: 'Atoms/Layout/Grid',
  component: Grid
};

export const GridStory = args => (
  <Grid {...args}>
    <Grid gridTemplateColumns='repeat(3, 1fr)' {...args}>
      {[...Array(3)].map((_el, id) => (
        <BaseLayout key={id} height={150} bg='accent.primary.normal' borderRadius={3} />
      ))}
    </Grid>
    <Grid gridTemplateColumns='repeat(4, 1fr)' {...args}>
      {[...Array(4)].map((_el, id) => (
        <BaseLayout key={id} height={150} bg='accent.primary.normal' borderRadius={3} />
      ))}
    </Grid>
    <Grid gridTemplateColumns='repeat(6, 1fr)' {...args}>
      {[...Array(6)].map((_el, id) => (
        <BaseLayout key={id} height={150} bg='accent.primary.normal' borderRadius={3} />
      ))}
    </Grid>
  </Grid>
);

GridStory.storyName = 'Grid';

GridStory.args = {
  gridGap: 2
};

GridStory.parameters = {
  jest: ['Layout.test.js']
};
