import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
  entry: 'src/webpack-browser-plugin.js',
  format: 'cjs',
  plugins: [
    json(),
    babel()
  ],
  dest: 'lib/index.js'
};
