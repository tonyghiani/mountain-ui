const path = require('path');
const { pipe } = require('@mountain-ui/utils');

exports.indexTemplate = function indexTemplate(filePaths) {
  const exportEntries = filePaths.map(renameExport);
  return exportEntries.join('\n');
};

exports.template = function template(api, opts, data) {
  const { template, types } = api;
  const { imports, interfaces, componentName, props, jsx, exports } = data;

  const plugins = makePlugins(opts);
  const allImports = addImports(types, imports);
  const implementation = wrapWithIcon(types, jsx);

  props[0] = makeTypedProp(types, { name: 'props', type: 'IconPresetProps' });

  const typeScriptTpl = template.smart({ plugins });

  return typeScriptTpl.ast`${allImports}

${interfaces}

function ${componentName} (${props}) {
  return ${implementation}
}

${exports}
  `;
};

/************************************************************/

function renameExport(filePath) {
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

function wrapWithIcon(t, jsx) {
  return t.JSXElement(
    t.JSXOpeningElement(t.JSXIdentifier('Icon'), [t.JSXSpreadAttribute(t.identifier('props'))]),
    t.JSXClosingElement(t.JSXIdentifier('Icon')),
    [jsx]
  );
}

function addImports(t, imports) {
  return [...imports, makeImport(t, { names: ['Icon', 'IconPresetProps'], path: '../Icon' })];
}

function makeImport(t, { names, path }) {
  return t.importDeclaration(
    names.map(name => t.importSpecifier(t.identifier(name), t.identifier(name))),
    t.stringLiteral(path)
  );
}

function makeTypedProp(t, { name, type }) {
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

function makePlugins(opts) {
  const plugins = ['jsx'];
  if (opts.typescript) plugins.push('typescript');
  return plugins;
}
