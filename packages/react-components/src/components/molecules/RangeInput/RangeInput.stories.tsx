import React, { useState } from 'react';
import { Direction } from 'react-range';
import { Meta, StoryObj } from '@storybook/react';

import { MntRangeInput } from './RangeInput';

const meta = {
  title: 'Molecules/MntRangeInput',
  component: MntRangeInput,
  tags: ['autodocs'],
  parameters: {
    /**
     * Disable since it uses an internal ref which is set to null, the suggested approach doesn't work
     * https://www.npmjs.com/package/@storybook/addon-storyshots#using-createnodemock-to-mock-refs
     */
    storyshots: { disable: true }
  }
} satisfies Meta<typeof MntRangeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: <MntRangeInput.Thumb />,
    values: [3000],
    min: 1000,
    max: 5000,
    step: 1,
    allowOverlap: null,
    onChange: null,
    onFinalChange: null,
    renderMark: null,
    draggableTrack: false,
    disabled: false,
    rtl: false,
    direction: Direction.Right
  },
  render: ({ values: initialValues, ...args }) => {
    const [values, setValues] = useState(initialValues);
    return <MntRangeInput {...args} values={values} onChange={setValues} />;
  }
};
