const { indexTemplate } = require('./scripts/conversion-tools.js');

module.exports = {
  ext: 'tsx',
  icon: true,
  expandProps: false,
  typescript: true,
  svgProps: {
    'data-name': '',
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet'
  },
  indexTemplate
};
