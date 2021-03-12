module.exports = {
  collectCoverage: true,
  coverageReporters: ['json'],
  moduleDirectories: ['node_modules', 'tests'],
  setupFilesAfterEnv: ['./tests/jest.setup.js'],
  testMatch: ['<rootDir>/{src,tests}/**/*.test.js'],
  transform: {
    '.(js|ts|tsx)': '<rootDir>/node_modules/ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
