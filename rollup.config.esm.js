import { defineConfig } from 'vite';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import alias from '@rollup/plugin-alias';

export default {
  input: 'src/L.TileLayer.PouchDBCached.js',
  output: {
    file: 'dist/L.TileLayer.PouchDBCached.esm.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
     alias({
      entries: [
        { find: 'events', replacement: 'rollup-plugin-node-polyfills/polyfills/events.js' }
      ]
    }),
    resolve(
      { 
        browser: true, 
        preferBuiltins: false 
      }),
      commonjs({
        transformMixedEsModules: true
      }),
      json(),
      nodePolyfills()
  ],
  external: []
};