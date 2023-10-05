import baseConfig from '../../jest.config.base';

import packageJson from './package.json';

export default {
  ...baseConfig,
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'tests'],
  displayName: packageJson.name,
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock']
};
