const path = require('path');

function indexTemplate(filePaths) {
  const exportEntries = filePaths.map(renameExport);
  return exportEntries.join('\n');
}

function renameExport({ path: filePath }) {
  const basename = path.basename(filePath, path.extname(filePath));
  const exportName = cleanFromSvg(basename);
  return `export { default as ${exportName} } from './${basename}'`;
}

function cleanFromSvg(name) {
  return name.replace(/svg/i, '');
}

module.exports = {
  cleanFromSvg,
  indexTemplate
};
