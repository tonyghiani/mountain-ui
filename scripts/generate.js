const fse = require('fs-extra');
const inquirer = require('inquirer');

const BASE_DIR = process.cwd();
let COMPONENT_DIR;

/**
 * Set listeners
 */
process.stdin.on('keypress', (_, { name }) => name === 'escape' && process.exit());

/**
 * Script execution
 */
(async () => {
  const { type, name } = await askComponentDetails();
  assertName(name);
  const componentTypeFolder = `${type}s`;
  const componentName = capitalize(name);

  COMPONENT_DIR = `${BASE_DIR}/src/components/${componentTypeFolder}/${componentName}`;

  await Promise.all([
    createIndex(componentName),
    createComponent(componentName),
    createStory(componentName, type),
    createTest(componentName)
  ]);

  console.log(`\n🚀 The ${componentName} component has been correctly created`);
})();

/********************************************/

/**
 * Questions
 */
async function askComponentDetails() {
  console.log();
  return inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What type of component are you going to create?',
      choices: ['atom', 'molecule', 'organism']
    },
    {
      type: 'input',
      name: 'name',
      message: `Type the component name: `
    }
  ]);
}

/**
 * Helper functions
 */
function writeFile(path, body) {
  return fse
    .outputFile(path, body.trim())
    .then(() => console.log(`✅ Created ${path}`))
    .catch(err => {
      console.error(`❌ Failure creating ${path}`);
      console.error(err);
      process.exit(1);
    });
}

function assertName(name) {
  if (!name) {
    console.error('The component name must be defined');
    process.exit(1);
  }

  const wordsOnlyRegex = /^[\w]+$/;
  if (!wordsOnlyRegex.test(name)) {
    console.error('The component name must contain letters or underscore only');
    process.exit(1);
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function pluralize(text) {
  return `${text}s`;
}

/**
 * Files creation
 */
function createIndex(name) {
  const COMPONENT_ENTRY = `${COMPONENT_DIR}/index.ts`;
  return writeFile(
    COMPONENT_ENTRY,
    `
export { default } from './${name}'
export * from './${name}';
`
  );
}

function createComponent(name) {
  const COMPONENT_IMPLEMENTATION = `${COMPONENT_DIR}/${name}.tsx`;
  return writeFile(
    COMPONENT_IMPLEMENTATION,
    `
import React from 'react';

export interface ${name}Props {
  /**
   * TODO: add prop description
   */
  firstProp: boolean;
}

/**
 * TODO: add component description headline
 */
export const ${name}: React.FC<${name}Props> = () => {
  return <span>Here goes the implementation</span>
};

${name}.displayName = '${name}';

export default ${name};
`
  );
}

function createStory(name, type) {
  const COMPONENT_IMPLEMENTATION = `${COMPONENT_DIR}/${name}.stories.tsx`;
  const group = pluralize(capitalize(type));
  return writeFile(
    COMPONENT_IMPLEMENTATION,
    `
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0';

import ${name}, { ${name}Props } from './${name}';

export default {
  title: '${group}/${name}',
  component: ${name},
  argTypes: {}
} as Meta;

const Template: Story<${name}Props> = args => <${name} {...args} />;

export const Basic = Template.bind({});

Basic.args = {};


Basic.parameters = {
  jest: ['${name}.test.js'],
};
`
  );
}

function createTest(name) {
  const COMPONENT_IMPLEMENTATION = `${COMPONENT_DIR}/${name}.test.js`;
  return writeFile(
    COMPONENT_IMPLEMENTATION,
    `
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import initStoryshots from '@storybook/addon-storyshots';

import { Basic } from './${name}.stories';

initStoryshots();

describe('${name}', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<Basic {...Basic.args} />);
    expect(container).toBeInTheDocument();
  });
});  
`
  );
}
