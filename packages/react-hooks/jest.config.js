const baseConfig = require('../../jest.config.base');
const packageJson = require('./package.json');

module.exports = {
  ...baseConfig,
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'tests'],
  name: packageJson.name,
  displayName: packageJson.name,
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock']
};
