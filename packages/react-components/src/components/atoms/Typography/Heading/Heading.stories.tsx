import React from 'react';

import { Box } from '../../Layout';
import { Text } from '../Text';

import Heading from './Heading';

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading
};

export const HeadingStory = args => (
  <>
    <Box>
      <Text variant='secondary'>H1 - 3rem - bold</Text>
      <Heading {...args} variant='h1' />
    </Box>
    <Box>
      <Text variant='secondary'>H2 - 2.5rem - bold</Text>
      <Heading {...args} variant='h2' />
    </Box>
    <Box>
      <Text variant='secondary'>H3 - 2.1rem - bold</Text>
      <Heading {...args} variant='h3' />
    </Box>
    <Box>
      <Text variant='secondary'>H4 - 1.7rem - bold</Text>
      <Heading {...args} variant='h4' />
    </Box>
    <Box>
      <Text variant='secondary'>H5 - 1.4rem - bold</Text>
      <Heading {...args} variant='h5' />
    </Box>
    <Box>
      <Text variant='secondary'>H6 - 1.2rem - bold</Text>
      <Heading {...args} variant='h6' />
    </Box>
  </>
);

HeadingStory.storyName = 'Heading';

HeadingStory.args = {
  children: 'Mountain UI library'
};

HeadingStory.parameters = {
  jest: ['Typography.test.js']
};
