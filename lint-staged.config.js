module.exports = {
  'package.json': ['yarn lint:package'],
  '*.{js,ts,tsx}': 'eslint --cache --fix',
  '*.{js,ts,css,md}': 'prettier --write --ignore-unknown'
};
