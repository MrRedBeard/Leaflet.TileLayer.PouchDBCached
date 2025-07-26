import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import polyfills from 'rollup-plugin-node-polyfills';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/L.TileLayer.PouchDBCached.js',
  output: {
    file: 'dist/L.TileLayer.PouchDBCached.umd.js',
    format: 'umd',
    name: 'LeafletPouchDBCached',
    banner: `/*! LeafletPouchDBCached v${pkg.version} */`,
    sourcemap: true,
    inlineDynamicImports: true,
    globals:
    {
      leaflet: 'L'
    },
  },
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs({
      include: /node_modules/,
      transformMixedEsModules: true
    }),
    json(),
    polyfills()
  ]
};