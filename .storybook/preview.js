import { withTests } from '@storybook/addon-jest';
import results from '../coverage/.jest-test-results.json';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [withTests({ results })];
