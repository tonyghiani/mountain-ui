import React from 'react';

import Box from '../Box';

import Grid, { GRID_COLUMNS, GridColumns } from './Grid';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Layout/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta

type Story = StoryObj<typeof meta>;

const GridItem = () => <Box className='h-36 bg-blue-400 rounded' />

export const GridStory: Story = {
  render: () => (
    <Grid>
      {Object.keys(GRID_COLUMNS).map((cols) => {
        return <Grid key={cols} columns={+cols as GridColumns}>
          {[...Array(+cols)].map((_el, id) => (
            <GridItem key={id} />
          ))}
        </Grid>
      })}
    </Grid>
  )
};

GridStory.storyName = 'Grid';

GridStory.parameters = {
  jest: ['Layout.test.js']
};
