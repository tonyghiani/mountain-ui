const path = require('path');
const { pipe, toLowerCaseFirst } = require('@mountain-ui/utils');

function indexTemplate(filePaths) {
  return `import { lazy } from 'react';

export const typesToIconMap = {
  ${filePaths
    .map(({ path: filePath }) => {
      const basename = path.basename(filePath, path.extname(filePath));
      const iconType = pipe(
        cleanFromSvg,
        renameHorizontal,
        renameVertical,
        toLowerCaseFirst
      )(basename);
      return `${iconType}: lazy(() => import('./${basename}')),`;
    })
    .join('\n\t')}
} as const;

export type MntIconType = keyof typeof typesToIconMap;`;
}

function cleanFromSvg(name) {
  return name.replace(/svg/i, '');
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
  cleanFromSvg,
  indexTemplate
};
