/* eslint-disable no-underscore-dangle */
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import clear from 'rollup-plugin-clear';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const Resolver = resolve({
  extensions: ['.mjs', '.ts', '.tsx', '.json', '.js', '.jsx'],
  browser: true,
});
export default [
  {
    input: 'src/ui/index.ts',
    external: [
      'styled-components',
      'react',
      'react-router-dom',
      'react-i18next',
    ],
    output: [
      {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'lib/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      image(),
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**', 'src/examples/**'],
        presets: ['@babel/preset-react'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      alias({
        entries: [
          {
            find: 'components',
            replacement: path.resolve(__dirname, 'src/components'),
          },
          {
            find: 'hooks',
            replacement: path.resolve(__dirname, 'src/hooks'),
          },
          {
            find: 'types',
            replacement: path.resolve(__dirname, 'src/types'),
          },
          {
            find: 'utils',
            replacement: path.resolve(__dirname, 'src/utils'),
          },
          {
            find: 'icons',
            replacement: path.resolve(__dirname, 'src/components/icons'),
          },
          {
            find: 'interfaces',
            replacement: path.resolve(__dirname, 'src/interfaces'),
          },
          {
            find: 'helpers',
            replacement: path.resolve(__dirname, 'src/helpers'),
          },
          {
            find: '@',
            replacement: path.resolve(__dirname, 'src'),
          },
        ],
        Resolver,
      }),
      clear({
        targets: ['./lib'],
        watch: true,
      }),
    ],
  },
];
