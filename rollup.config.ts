import rollupPluginReplace from '@rollup/plugin-replace';
import rollupPluginTypescript from '@rollup/plugin-typescript';
import { type Plugin, type RollupOptions } from 'rollup';
import rollupPluginAutoExternal from 'rollup-plugin-auto-external';
import rollupPluginDts from 'rollup-plugin-dts';

import pkg from './package.json' assert { type: 'json' };

const common = {
  input: 'src/index.ts',

  output: {
    sourcemap: false,
  },

  external: [],

  treeshake: {
    annotations: true,
    moduleSideEffects: [],
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },
} satisfies RollupOptions;

const runtimes = {
  ...common,

  output: [
    {
      ...common.output,
      file: pkg.exports.import,
      format: 'esm',
    },
    {
      ...common.output,
      file: pkg.exports.require,
      format: 'cjs',
    },
  ],

  plugins: [
    rollupPluginAutoExternal(),
    rollupPluginTypescript({
      tsconfig: 'tsconfig.build.json',
    }),
    rollupPluginReplace({
      values: {
        'import.meta.vitest': 'undefined',
      },
    }),
  ],
} satisfies RollupOptions;

const types = {
  ...common,

  output: [
    {
      ...common.output,
      file: pkg.exports.types.import,
      format: 'esm',
    },
    {
      ...common.output,
      file: pkg.exports.types.require,
      format: 'cjs',
    },
  ],

  plugins: [
    rollupPluginDts({
      tsconfig: 'tsconfig.build.json',
    }),
  ] as Plugin[],
} satisfies RollupOptions;

export default [runtimes, types];
