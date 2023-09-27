import type { Preview } from '@storybook/react';

import '../src/styles/main.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        date: /Date$/,
        select: /as$/
      }
    }
  }
};

export default preview;
