import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import polyfills from 'rollup-plugin-node-polyfills';

export default {
  input: 'src/L.TileLayer.PouchDBCached.js',
  output: {
    file: 'dist/L.TileLayer.PouchDBCached.iife.js',
    format: 'iife',
    name: 'LeafletPouchDBCached',
    sourcemap: true,
    globals:
    {
      leaflet: 'L',
      pouchdb: 'PouchDB'
    },
  },
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    json(),
    polyfills()
  ]
};