import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/webpack-browser-plugin.ts',
  format: 'cjs',
  plugins: [
    typescript()
  ],
  dest: 'lib/index.js'
};
