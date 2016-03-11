import nodeResolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'

export default {
  entry: 'output/Main/index.js',
  format: 'cjs',
  plugins: [
    nodeResolve(),
    commonJs()
  ],
  dest: 'bundle-cjs.js'
}
