import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from 'rollup-plugin-json';
import shebang from 'rollup-plugin-shebang';
import flow from 'rollup-plugin-flow';

export default [
  {
    input: 'cli/index.js',
    output: [
      {
        file: 'dist/monsters.js',
        format: 'cjs',
        name: 'monsters',
        exports: 'named'
      }
    ],
    plugins: [
      flow(),
      peerDepsExternal(),
      babel({
        babelrc: false,
        plugins: [
          'transform-object-rest-spread',
          'transform-class-properties',
          'transform-flow-strip-types'
        ],
        presets: ['es2015-rollup'],
        exclude: ['node_modules/**','data/*.json']
      }),
      resolve({
        module: false,
        main: true,
        preferBuiltins: true,
      }),
      commonjs({
        namedExports: {
          'node_modules/lodash/lodash.js': [
            'set', 'pick', 'sample', 'groupBy','isNumber'
          ]
        }
      }),
      filesize(),
      json(),
      shebang()
    ]
  }
];
