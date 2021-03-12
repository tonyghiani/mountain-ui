import React from 'react';

import { Box } from '../../Layout';
import { Text } from '../Text';

import Heading from './Heading';

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading
};

export const HeadingStory = args =>
  console.log(args) || (
    <Box gap={3}>
      <Box>
        <Text variant='secondary'>H1 - 3.8rem - bold</Text>
        <Heading {...args} variant='h1' wrapped />
      </Box>
      <Box>
        <Text variant='secondary'>H2 - 3.1rem - bold</Text>
        <Heading {...args} variant='h2' />
      </Box>
      <Box>
        <Text variant='secondary'>H3 - 2.4rem - bold</Text>
        <Heading {...args} variant='h3' />
      </Box>
      <Box>
        <Text variant='secondary'>H4 - 2rem - bold</Text>
        <Heading {...args} variant='h4' />
      </Box>
      <Box>
        <Text variant='secondary'>H5 - 1.6rem - bold</Text>
        <Heading {...args} variant='h5' />
      </Box>
      <Box>
        <Text variant='secondary'>H6 - 1.3rem - bold</Text>
        <Heading {...args} variant='h6' />
      </Box>
    </Box>
  );

HeadingStory.storyName = 'Heading';

HeadingStory.args = {
  children: 'Mountain UI library'
};

HeadingStory.parameters = {
  jest: ['Typography.test.js']
};
