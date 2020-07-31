const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 5000,
    contentBase: path.join(__dirname, "dist"),
    open: true,
    compress: false
  },
  entry: {
    main: './src/index.ts',
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
      { test: /\.js$/, use: 'syncLoader'},
      { test: /\.css$/, use: 'styleLoader'},
      { test: /\.ts$/, use: 'ts-loader'},
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',//模板文件地址
      filename: 'index.html',//指定打包后的文件名字
      hash: true //也可给其生成一个hash值, 解决缓存问题

  }),
  ],
  optimization:{
    runtimeChunk: true
  },
}