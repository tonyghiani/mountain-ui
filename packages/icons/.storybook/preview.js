import React from 'react';
import { withTests } from '@storybook/addon-jest';
import { Container } from '@mountain-ui/doc-tools';

let results = null;
try {
  if (process.env.NODE_ENV === 'testing') {
    results = require('../coverage/.jest-test-results.json');
  }
} catch (error) {
  console.warn(`
  It is possible you did not generate a static report for your tests.
  Try to run the script

    yarn test:json

  to fix this issue.
  `);
}

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  results && withTests({ results }),
  Story => (
    <Container marginTop={32}>
      <Story />
    </Container>
  )
].filter(Boolean);
