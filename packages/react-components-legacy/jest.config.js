const baseConfig = require('../../jest.config.base');
const packageJson = require('./package.json');

module.exports = {
  ...baseConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/jest.setup.js'],
  moduleDirectories: ['node_modules', 'tests'],
  name: packageJson.name,
  displayName: packageJson.name,
  moduleNameMapper: {
    'mui-testing-tools': '<rootDir>/tests/mui-testing-tools.js'
  }
};
