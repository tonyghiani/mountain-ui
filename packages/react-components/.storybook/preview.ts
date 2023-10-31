import type { Preview } from '@storybook/react';

// import { excluded } from './exclude';
import '../src/styles/tailwind.base.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      exclude: ['as', 'ref', 'key'],
      expanded: true,
      matchers: {
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'hsl(0, 0%, 98%)' },
        { name: 'dark', value: 'hsl(210, 14%, 9%)' }
      ]
    }
  }
};

export default preview;
