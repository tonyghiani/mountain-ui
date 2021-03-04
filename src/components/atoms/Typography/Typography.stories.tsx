import React from 'react'
import { Meta } from '@storybook/react/types-6-0';

import { Container } from '../Layout';

import BaseTypography, { Heading, Paragraph, Text } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: BaseTypography,
  argTypes: {

  }
} as Meta;

interface Args {
  text: string;
}

export const HeadingStory = ({ text }: Args) => <Container>
  <Heading variant="h1">{text}</Heading>
  <Heading variant="h2">{text}</Heading>
  <Heading variant="h3">{text}</Heading>
  <Heading variant="h4">{text}</Heading>
  <Heading variant="h5">{text}</Heading>
  <Heading variant="h6">{text}</Heading>
</Container>

HeadingStory.storyName = 'Heading'
HeadingStory.args = {
  text: 'Mountain UI library'
}
HeadingStory.parameters = {
  jest: ['Typography.test.js'],
};

export const TextStory = ({ text }: Args) => <Container>
  <Text variant="primary" fontSize="body">{text}</Text>
  <Text variant="secondary" fontSize="secondaryBody">{text}</Text>
  <Text variant="caption" fontSize="sub">{text}</Text>
</Container>

TextStory.storyName = 'Text'
TextStory.args = {
  text: 'Mountain UI library'
}
TextStory.parameters = {
  jest: ['Typography.test.js'],
};

export const ParagraphStory = ({ text }: Args) => <Container>
  <Paragraph variant="primary" fontSize="body">{text}</Paragraph>
  <Paragraph variant="secondary" fontSize="secondaryBody">{text}</Paragraph>
  <Paragraph variant="caption" fontSize="sub">{text}</Paragraph>
</Container>

ParagraphStory.storyName = 'Paragraph'
ParagraphStory.args = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
ParagraphStory.parameters = {
  jest: ['Typography.test.js'],
};
