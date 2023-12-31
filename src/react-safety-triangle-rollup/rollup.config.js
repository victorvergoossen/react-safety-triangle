import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.module,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.main,
      format: 'esm',
      sourcemap: true
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    json(),
    copy({
      targets: [
        { src: './README.md', dest: 'build' },
        { src: './examples/*', dest: 'build/examples' },
      ]
    }),
  ],
};
