module.exports = {
  extends: ['../../.eslintrc.js', 'plugin:react/recommended', 'prettier/react'],
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off'
  },
  settings: {
    react: { version: 'detect' }
  }
};
