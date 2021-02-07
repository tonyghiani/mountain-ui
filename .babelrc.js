const cjs = process.env.BABEL_ENV === 'cjs';

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, loose: true }],
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
