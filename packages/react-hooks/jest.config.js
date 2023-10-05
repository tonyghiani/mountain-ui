const baseConfig = require('../../jest.config.base');
const packageJson = require('./package.json');

module.exports = {
  ...baseConfig,
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'tests'],
  displayName: packageJson.name,
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock']
};
