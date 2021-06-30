const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');

module.exports = merge(webpackBaseConfig, {
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, '..', 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js',
    library: 'VGEditor',
    libraryTarget: 'umd'
  },
  devtool: 'cheap-module-eval-source-map'
});
