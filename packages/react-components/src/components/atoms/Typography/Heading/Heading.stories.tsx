import React from 'react';

import { useTheme } from '../../../../hooks';
import { Box } from '../../Layout';
import { Text } from '../Text';

import Heading from './Heading';

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading
};

export const HeadingStory = args => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Text variant='secondary'>H1 - {theme.fontSizes.h1} - bold</Text>
        <Heading {...args} variant='h1' />
      </Box>
      <Box>
        <Text variant='secondary'>H2 - {theme.fontSizes.h2} - bold</Text>
        <Heading {...args} variant='h2' />
      </Box>
      <Box>
        <Text variant='secondary'>H3 - {theme.fontSizes.h3} - bold</Text>
        <Heading {...args} variant='h3' />
      </Box>
      <Box>
        <Text variant='secondary'>H4 - {theme.fontSizes.h4} - bold</Text>
        <Heading {...args} variant='h4' />
      </Box>
      <Box>
        <Text variant='secondary'>H5 - {theme.fontSizes.h5} - bold</Text>
        <Heading {...args} variant='h5' />
      </Box>
      <Box>
        <Text variant='secondary'>H6 - {theme.fontSizes.h6} - bold</Text>
        <Heading {...args} variant='h6' />
      </Box>
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
