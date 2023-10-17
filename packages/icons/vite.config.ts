import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import viteTsconfigPaths from 'vite-tsconfig-paths';

import packageJson from './package.json';

export default defineConfig(() => ({
  plugins: [react(), macrosPlugin(), viteTsconfigPaths()],
  define: {
    'process.env': {}
  },
  build: {
    minify: false,
    lib: {
      entry: [resolve('src', 'index.ts'), resolve('src', 'icons', 'index.tsx')],
      name: 'Mountain UI React icons',
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
      external: ['react/jsx-runtime', ...Object.keys(packageJson.peerDependencies)]
    }
  }
}));
