const path = require('path');
const { lstatSync, readdirSync } = require('fs');

const baseConfig = require('./jest.config.base');

const basePath = path.resolve(__dirname, 'packages');
const packages = readdirSync(basePath).filter(name => {
  return lstatSync(path.join(basePath, name)).isDirectory();
});

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  projects: packages.map(name => `<rootDir>/packages/${name}`),
  moduleNameMapper: packages.reduce(
    (acc, name) => ({
      ...acc,
      [`@mountain-ui/${name}(.*)$`]: `<rootDir>/packages/./${name}/src/$1`
    }),
    {}
  )
};
