const { indexTemplate } = require('./lib/conversion-tools.js');

module.exports = {
  dimensions: true,
  icon: true,
  memo: true,
  ref: true,
  prettier: true,
  typescript: true,
  svgProps: {
    preserveAspectRatio: 'xMidYMid meet'
  },
  indexTemplate
};
