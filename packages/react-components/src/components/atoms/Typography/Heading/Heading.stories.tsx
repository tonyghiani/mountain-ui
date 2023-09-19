import React from 'react';

import { Text } from '../Text';
import Heading from './Heading';

import tailwindConfig from '../../../../../tailwind.config.cjs';

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading
};

export const HeadingStory = args => {
  const theme = tailwindConfig.theme;

  return (
    <>
      <div>
        <Text variant='secondary'>H1 - {theme.fontSize.h1} - bold</Text>
        <Heading {...args} variant='h1' />
      </div>
      <div>
        <Text variant='secondary'>H2 - {theme.fontSize.h2} - bold</Text>
        <Heading {...args} variant='h2' />
      </div>
      <div>
        <Text variant='secondary'>H3 - {theme.fontSize.h3} - bold</Text>
        <Heading {...args} variant='h3' />
      </div>
      <div>
        <Text variant='secondary'>H4 - {theme.fontSize.h4} - bold</Text>
        <Heading {...args} variant='h4' />
      </div>
      <div>
        <Text variant='secondary'>H5 - {theme.fontSize.h5} - bold</Text>
        <Heading {...args} variant='h5' />
      </div>
      <div>
        <Text variant='secondary'>H6 - {theme.fontSize.h6} - bold</Text>
        <Heading {...args} variant='h6' />
      </div>
    </>
  );
};

HeadingStory.storyName = 'Heading';

HeadingStory.args = {
  children: 'Mountain UI library'
};

HeadingStory.parameters = {
  jest: ['Typography.test.js']
};
