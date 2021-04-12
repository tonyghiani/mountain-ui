const fs = require('fs');
const fse = require('fs-extra');
const inquirer = require('inquirer');
const printHeader = require('../../../scripts/printHeader');

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

  printHeader(`🏗 Creating ${componentName} component`);
  await Promise.all([
    createIndex(componentName),
    createComponent(componentName),
    createStory(componentName, type),
    createTest(componentName)
  ]);
  await addToIndex(type);

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
function writeFile(path, body, options = { trim: true }) {
  const data = options.trim ? body.trim() : body;
  return fse
    .outputFile(path, data, options)
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
export { default as ${name} } from './${name}'
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
  const COMPONENT_STORY = `${COMPONENT_DIR}/${name}.stories.tsx`;
  const group = pluralize(capitalize(type));
  return writeFile(
    COMPONENT_STORY,
    `
import React from 'react'

import ${name} from './${name}';

export default {
  title: '${group}/${name}',
  component: ${name}
};

export const Basic = args => <${name} {...args} />;

Basic.parameters = {
  jest: ['${name}.test.js'],
};
`
  );
}

function createTest(name) {
  const COMPONENT_TEST = `${COMPONENT_DIR}/${name}.test.tsx`;
  return writeFile(
    COMPONENT_TEST,
    `
import React from 'react';
import { render } from 'mui-testing-tools';

import ${name} from './${name}';

describe('${name}', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<${name} />);
    expect(container).toBeInTheDocument();
  });
});  
`
  );
}

function addToIndex(type) {
  const group = pluralize(type);
  const GROUP_DIR = `${BASE_DIR}/src/components/${group}`;
  const GROUP_ENTRYPOINT = `${BASE_DIR}/src/components/${group}/index.ts`;

  fs.unlinkSync(GROUP_ENTRYPOINT);

  const groupList = fs.readdirSync(GROUP_DIR).filter(dir => !dir.startsWith('.'));

  return writeFile(
    GROUP_ENTRYPOINT,
    groupList.reduce(
      (list, name) =>
        list.concat(
          `
export * from './${name}';  
  `
        ),
      ''
    )
  );
}
