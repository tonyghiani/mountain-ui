const { indexTemplate } = require('./lib/conversion-tools.js');

module.exports = {
  ext: 'tsx',
  icon: true,
  expandProps: true,
  titleProp: true,
  typescript: true,
  svgProps: {
    'data-name': '',
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet'
  },
  indexTemplate
};
