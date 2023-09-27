import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';

import Grid, { GRID_COLUMNS, GridColumns } from './Grid';

const meta = {
  title: 'Atoms/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta

type Story = StoryObj<typeof meta>;

const GridItem = () => <Box className='w-16 h-16 bg-blue-400 rounded' />

export const Main: Story = {
  args: {
    columns: 2,
    justifyItems: 'center',
    alignItems: 'center',
    className: 'w-full h-96'
  },
  render: ({ columns, ...props }) => (
    <Grid columns={columns} {...props}>
      {[...Array(+columns)].map((_el, id) => (
        <GridItem key={id} />
      ))}
    </Grid >
  )
}

export const Columns: Story = {
  args: {
    justifyItems: 'center',
    alignItems: 'center',
    className: 'w-full h-32'
  },
  render: (args) => (
    <Grid>
      {Object.keys(GRID_COLUMNS).map((cols) => {
        return <Grid key={cols} columns={+cols as GridColumns} {...args}>
          {[...Array(+cols)].map((_el, id) => (
            <GridItem key={id} />
          ))}
        </Grid>
      })}
    </Grid >
  )
};