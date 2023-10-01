import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { HEADING_VARIANTS, Heading, HeadingVariant } from './Heading';
import { Text } from '../Text';
import { Box, Grid } from '../../Layout';

import { Main as TextMainStory } from '../Text/Text.stories'
import tailwindConfig from '../../../../../tailwind.config.cjs';

const variants = Object.keys(HEADING_VARIANTS) as HeadingVariant[];

const meta = {
  title: 'Atoms/Typography/Heading',
  component: Heading,
  tags: ['autodocs']
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    ...TextMainStory.args,
    children: 'Mountain UI',
    variant: 'h1'
  }
};

export const All: Story = {
  args: {
    children: 'Mountain UI'
  },
  render: args => {
    return (
      <Grid className='gap-4'>
        {variants.map(variant => (
          <Box>
            <Text variant='secondary'>{variant.toUpperCase()} - {tailwindConfig.theme.fontSize[variant]} - bold</Text>
            <Heading key={variant} {...args} variant={variant} />
          </Box>
        ))}
      </Grid>
    );
  }
};
