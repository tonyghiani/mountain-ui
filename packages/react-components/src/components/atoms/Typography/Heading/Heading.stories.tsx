import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntBox, MntGrid } from '../../Layout';
import { MntText } from '../Text';
import { Main as TextMainStory } from '../Text/Text.stories';

import { HEADING_VARIANTS, MntHeading, MntHeadingVariant } from './Heading';

const variants = Object.keys(HEADING_VARIANTS) as MntHeadingVariant[];

const meta = {
  title: 'Atoms/Typography/MntHeading',
  component: MntHeading,
  tags: ['autodocs']
} satisfies Meta<typeof MntHeading>;

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
      <MntGrid className='gap-4'>
        {variants.map(variant => (
          <MntBox key={variant}>
            <MntText variant='secondary'>{variant.toUpperCase()} - bold</MntText>
            <MntHeading key={variant} {...args} variant={variant} />
          </MntBox>
        ))}
      </MntGrid>
    );
  }
};
