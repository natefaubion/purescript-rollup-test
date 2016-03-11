import nodeResolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'

export default {
  entry: 'output/Main/index.js',
  format: 'iife',
  moduleName: 'Main',
  plugins: [
    nodeResolve(),
    commonJs()
  ],
  dest: 'bundle-iife.js'
}
