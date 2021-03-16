module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/changelog',
    '@semantic-release/github',
    '@semantic-release/git'
  ],
  branch: [
    'master',
    'next',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ]
};
