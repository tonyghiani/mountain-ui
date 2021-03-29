module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/coverage/',
  transform: {
    '.(js|ts|tsx)': ['ts-jest']
  }
};
