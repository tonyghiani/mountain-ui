import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import viteTsconfigPaths from 'vite-tsconfig-paths';

import packageJson from './package.json';

export default defineConfig(() => ({
  plugins: [macrosPlugin(), viteTsconfigPaths()],
  build: {
    minify: false,
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'Mountain UI Utils',
      fileName: (_format, name) => `${name}.js`
    },
    rollupOptions: {
      output: [
        {
          dir: 'dist/esm',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        {
          dir: 'dist/cjs',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ],
      external: [
        ...Object.keys(packageJson.dependencies).map(dep => new RegExp(dep)), // don't bundle dependencies
        /^node:.*/ // don't bundle built-in Node.js modules (use protocol imports!),
      ]
    }
  }
}));
