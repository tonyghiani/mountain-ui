module.exports = {
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  trailingComma: 'none',
  overrides: [
    {
      files: '*.html',
      options: { parser: 'babel' }
    }
  ]
};