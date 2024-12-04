import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MntBox } from '../Box';

import { GRID_COLUMNS, MntGrid, MntGridColumns } from './Grid';

const meta = {
  title: 'Atoms/Layout/MntGrid',
  component: MntGrid,
  tags: ['autodocs']
} satisfies Meta<typeof MntGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

const GridItem = () => <MntBox className='w-16 h-16 bg-blue-400 rounded' />;

export const Main: Story = {
  args: {
    columns: 2,
    justifyItems: 'center',
    alignItems: 'center',
    className: 'w-full h-96'
  },
  render: ({ columns, ...props }) => (
    <MntGrid columns={columns} {...props}>
      {[...Array(+columns)].map((_el, id) => (
        <GridItem key={id} />
      ))}
    </MntGrid>
  )
};

export const Columns: Story = {
  args: {
    justifyItems: 'center',
    alignItems: 'center',
    className: 'w-full h-32'
  },
  render: args => (
    <MntGrid>
      {Object.keys(GRID_COLUMNS).map(cols => {
        return (
          <MntGrid key={cols} columns={+cols as MntGridColumns} {...args}>
            {[...Array(+cols)].map((_el, id) => (
              <GridItem key={id} />
            ))}
          </MntGrid>
        );
      })}
    </MntGrid>
  )
};
