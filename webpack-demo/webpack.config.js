const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    // loader路径查找顺序从左往右
    modules: ['node_modules', './']
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'syncLoader'}
    ]
  }
}