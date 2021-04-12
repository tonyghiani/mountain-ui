module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>', '<rootDir>/src'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/coverage/',
  testMatch: [
    '<rootDir>/{src,tests}/**/*.test.js',
    '<rootDir>/{src,tests}/**/*.test.ts',
    '<rootDir>/{src,tests}/**/*.test.tsx'
  ],
  transform: {
    '.(ts|tsx)': ['ts-jest']
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
