import React from 'react'
import { Meta } from '@storybook/react/types-6-0';

import { Container } from '../Layout';

import BaseTypography, { Heading } from './Typography';


export default {
  title: 'Atoms/Typography',
  component: BaseTypography,
  argTypes: {

  }
} as Meta;

export const HeadingStory = () => <Container>
  <Heading variant="h1">Mountain UI library</Heading>
  <Heading variant="h2">Mountain UI library</Heading>
  <Heading variant="h3">Mountain UI library</Heading>
  <Heading variant="h4">Mountain UI library</Heading>
  <Heading variant="h5">Mountain UI library</Heading>
  <Heading variant="h6">Mountain UI library</Heading>
  <BaseTypography fontSize="body">Mountain UI library</BaseTypography>
  <BaseTypography fontSize="secondaryBody">Mountain UI library</BaseTypography>
  <BaseTypography fontSize="sub">Mountain UI library</BaseTypography>
  <BaseTypography fontSize="caption">Mountain UI library</BaseTypography>
</Container>

HeadingStory.storyName = 'Heading'

HeadingStory.parameters = {
  jest: ['Typography.test.js'],
};
