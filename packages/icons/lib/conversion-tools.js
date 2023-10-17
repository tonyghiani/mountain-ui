const path = require('path');
const { pipe } = require('@mountain-ui/utils');

exports.indexTemplate = function indexTemplate(filePaths) {
  const exportEntries = filePaths.map(renameExport);
  return exportEntries.join('\n');
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

module.exports = {
  renameHorizontal,
  renameVertical,
  shiftNumbersToEnd
};
