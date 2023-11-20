import baseConfig from '../../jest.config.base';

import packageJson from './package.json';

export default {
  ...baseConfig,
  testEnvironment: 'jsdom',
  displayName: packageJson.name
};
