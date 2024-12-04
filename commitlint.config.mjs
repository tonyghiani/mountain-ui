import lernaConfig from '@commitlint/config-lerna-scopes';

export default {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
  rules: {
    'scope-enum': async () => {
      const pkgs = await lernaConfig.utils.getPackages();
      return [2, 'always', ['root', 'release', ...pkgs]];
    }
  }
};
