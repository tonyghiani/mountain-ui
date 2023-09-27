import { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'Atoms/Typography/Text',
  component: Text,
  tags: ['autodocs']
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: "Mountain UI",
    variant: 'primary',
    bold: false,
    gradient: {
      from: 'from-red-500',
      to: 'to-yellow-500',
    },
    truncate: false,
    uncopyable: false,
    underline: false,
  }
};
