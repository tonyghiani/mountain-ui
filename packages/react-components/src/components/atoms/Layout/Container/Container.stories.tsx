import Container from './Container';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Layout/Container',
  component: Container,
} satisfies Meta<typeof Container>;

export default meta

type Story = StoryObj<typeof meta>;

export const ContainerStory: Story = {
  args: {
    children: 'This is the content of a container component',
    className: 'h-screen border-4 border-dashed border-blue-600'
  },
};

ContainerStory.storyName = 'Container';

ContainerStory.parameters = {
  jest: ['Layout.test.js']
};
