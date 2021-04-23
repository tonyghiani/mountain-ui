const { indexTemplate, template } = require('./lib/conversion-tools.js');

module.exports = {
  dimensions: true,
  ext: 'tsx',
  icon: true,
  expandProps: false,
  memo: true,
  prettier: true,
  ref: true,
  typescript: true,
  svgProps: {
    preserveAspectRatio: 'xMidYMid meet',
    fill: 'currentColor'
  },
  indexTemplate,
  template
};
