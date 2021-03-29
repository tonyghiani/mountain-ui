module.exports = {
  extends: '../../.babelrc.js',
  presets: ['@babel/react'],
  plugins: [
    [
      'babel-plugin-styled-components',
      { ssr: true, displayName: true, fileName: false, pure: true }
    ]
  ]
};
