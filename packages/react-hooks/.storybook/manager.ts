import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    fontBase: '"Avenir", sans-serif',
    fontCode: 'monaco',
    brandTitle: 'Mountain UI',
    brandUrl: 'https://react-hooks.mountain-ui.com',
    brandTarget: '_self'
  })
});
