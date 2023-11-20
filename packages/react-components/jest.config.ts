import baseConfig from '../../jest.config.base.js';

import packageJson from './package.json';

export default {
  ...baseConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/jest.setup.ts'],
  moduleDirectories: ['node_modules', 'tests'],
  displayName: packageJson.name,
  moduleNameMapper: {
    'mnt-internals': '<rootDir>/src/internals',
    '\\.(css)$': '<rootDir>/tests/__mocks__/styleMock.js'
  },
  modulePaths: ['<rootDir>']
};
