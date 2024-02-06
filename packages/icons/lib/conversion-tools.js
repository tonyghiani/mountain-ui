const path = require('path');
const { pipe } = require('@mountain-ui/utils');
const t = require('@babel/types');

exports.indexTemplate = function indexTemplate(filePaths) {
  const exportEntries = filePaths.map(renameExport);
  return exportEntries.join('\n');
};

exports.template = function template(variables, { tpl }) {
  const { imports, interfaces, componentName, props, jsx, exports } = variables;

  const allImports = addImports(imports);
  const implementation = wrapWithIcon(jsx);

  props[0] = makeTypedProp({ name: 'props', type: 'MntIconProps' });

  return tpl`${allImports};

${interfaces};

const ${componentName} = (${props}) => (
  ${implementation}
);

${exports};
  `;
};

/************************************************************/

function renameExport({ path: filePath }) {
  const basename = path.basename(filePath, path.extname(filePath));
  const exportName = pipe(
    cleanFromSvg,
    renameHorizontal,
    renameVertical,
    shiftNumbersToEnd
  )(basename);

  return `export { default as ${exportName} } from './${basename}'`;
}

function cleanFromSvg(name) {
  return name.replace(/svg/i, '');
}

const START_WITH_NUMBER = /^\d+/i;
function shiftNumbersToEnd(name) {
  const [initialNumber] = name.match(START_WITH_NUMBER) || [];
  return initialNumber !== undefined ? name.replace(initialNumber, '').concat(initialNumber) : name;
}

function renameHorizontal(name) {
  if (!name.endsWith('H')) return name;
  return name.slice(0, -1).concat('Horizontal');
}

function renameVertical(name) {
  if (!name.endsWith('V')) return name;
  return name.slice(0, -1).concat('Vertical');
}

function wrapWithIcon(jsx) {
  return t.JSXElement(
    t.JSXOpeningElement(t.JSXIdentifier('MntIcon'), [t.JSXSpreadAttribute(t.identifier('props'))]),
    t.JSXClosingElement(t.JSXIdentifier('MntIcon')),
    [jsx]
  );
}

function addImports(imports) {
  return [...imports, makeImport({ names: ['MntIcon', 'MntIconProps'], path: '../Icon' })];
}

function makeImport({ names, path }) {
  return t.importDeclaration(
    names.map(name => t.importSpecifier(t.identifier(name), t.identifier(name))),
    t.stringLiteral(path)
  );
}

function makeTypedProp({ name, type }) {
  return {
    ...t.identifier(name),
    typeAnnotation: {
      type: 'TypeAnnotation',
      typeAnnotation: {
        type: 'GenericTypeAnnotation',
        id: t.identifier(type),
        typeParameters: null
      }
    }
  };
}
