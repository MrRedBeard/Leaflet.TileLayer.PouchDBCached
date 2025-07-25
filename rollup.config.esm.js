import { defineConfig } from 'vite';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import alias from '@rollup/plugin-alias';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/L.TileLayer.PouchDBCached.js',
  output: {
    file: 'dist/L.TileLayer.PouchDBCached.esm.js',
    format: 'esm',
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
        include: /node_modules/,
        transformMixedEsModules: true
      }),
      json(),
      nodePolyfills()
  ],
  external: []
};