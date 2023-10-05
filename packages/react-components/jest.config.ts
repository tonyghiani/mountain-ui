import { pathsToModuleNameMapper } from 'ts-jest';

import baseConfig from '../../jest.config.base.js';

import packageJson from './package.json';
import tsConfig from './tsconfig.json';

export default {
  ...baseConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/jest.setup.js'],
  moduleDirectories: ['node_modules', 'tests'],
  displayName: packageJson.name,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsConfig.compilerOptions.paths),
    '\\.(css)$': '<rootDir>/tests/__mocks__/styleMock.js'
  },
  modulePaths: ['<rootDir>']
};
