import React from 'react';
import { withTests } from '@storybook/addon-jest';
import results from '../coverage/.jest-test-results.json';
import { Container, ThemeProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  withTests({ results }),
  Story => (
    <ThemeProvider>
      <Container>
        <Story />
      </Container>
    </ThemeProvider>
  )
];
