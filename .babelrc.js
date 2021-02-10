const cjs = process.env.BABEL_ENV === 'cjs';
const isTest = process.env.NODE_ENV === 'testing';

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: isTest ? 'commonjs' : false, loose: true }],
    '@babel/preset-typescript',
    '@babel/react'
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      { ssr: true, displayName: true, fileName: false, pure: true }
    ],
    cjs && ['@babel/transform-modules-commonjs', { loose: true }],
    [
      '@babel/transform-runtime',
      {
        useESModules: !cjs
      }
    ]
  ].filter(Boolean)
};
