import { defineConfig } from 'rollup';

const config = defineConfig([
  {
    input: 'src/htmlminifier.js',
    output: {
      file: 'dist/htmlminifier.cjs',
      format: 'cjs',
      exports: 'named'
    },
    external: ['clean-css', '@swc/core', 'entities', 'relateurl']
  }
]);

export default config;
