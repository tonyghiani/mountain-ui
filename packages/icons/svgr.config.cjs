const { indexTemplate, template } = require('./lib/conversion-tools.cjs');

module.exports = {
  dimensions: true,
  ext: 'tsx',
  icon: true,
  expandProps: false,
  prettier: true,
  ref: true,
  typescript: true,
  svgProps: {
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet'
  },
  indexTemplate,
  template
};
