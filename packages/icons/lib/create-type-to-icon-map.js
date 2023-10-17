const fse = require('fs-extra');
const path = require('path');
const { pipe, toLowerCaseFirst } = require('@mountain-ui/utils');
const { renameHorizontal, renameVertical, shiftNumbersToEnd } = require('./conversion-tools');

function createTypeToIconMap() {
  const iconsDirPath = path.join(process.cwd(), 'src', 'icons');
  const files = fse.readdirSync(iconsDirPath, 'utf8');

  const typesToIcon = files
    .filter(file => file !== 'index.tsx')
    .reduce((typesMap, file) => {
      const filename = file.replace(/\.[^/.]+$/, '');
      const type = pipe(
        renameHorizontal,
        renameVertical,
        shiftNumbersToEnd,
        toLowerCaseFirst
      )(filename);
      typesMap[type] = pipe(renameHorizontal, renameVertical, shiftNumbersToEnd)(filename);
      return typesMap;
    }, {});

  const targetFile = path.join(process.cwd(), 'src', 'typesToIconMap.ts');

  return writeFile(
    targetFile,
    `
export const typesToIconMap = ${JSON.stringify(typesToIcon, null, 2)} as const;

export type MntIconType = keyof typeof typesToIconMap;
`
  );
}
createTypeToIconMap();

/******* Helpers ********/

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
