import { withTests } from '@storybook/addon-jest';
import results from '../coverage/.jest-test-results.json';
import ThemeProvider from '../src/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  withTests({ results }),
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];
