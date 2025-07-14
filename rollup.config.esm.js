import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
  input: 'src/L.TileLayer.PouchDBCached.js',
  output: {
    file: 'dist/L.TileLayer.PouchDBCached.esm.js',
    format: 'esm'
  },
  plugins: [
    resolve({ browser: false, preferBuiltins: false }),
    commonjs(),
    json(),
    nodePolyfills()
  ],
  external: []
};