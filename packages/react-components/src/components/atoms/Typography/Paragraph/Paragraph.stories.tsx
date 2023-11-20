import { Meta, StoryObj } from '@storybook/react';

import { Main as TextMainStory } from '../Text/Text.stories'

import { MntParagraph } from './Paragraph';

const meta = {
  title: 'Atoms/Typography/MntParagraph',
  component: MntParagraph,
  tags: ['autodocs']
} satisfies Meta<typeof MntParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    ...TextMainStory.args,
    children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    gradient: undefined
  }
};
