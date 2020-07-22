
### webpack-----------基础配置
- [webpack4模块运行机制](https://zhuanlan.zhihu.com/p/79706247)
- [要点](https://segmentfault.com/a/1190000021699105)
-  [解析](https://juejin.im/post/5e1ca214518825265c24874b)
- [系列](https://juejin.im/user/57c91b3b165abd0068db89c2/posts)
- [分析生成后的bundle文件](https://juejin.im/post/5d4a4644f265da03ab423767)
#### plugin
- 看下什么样的css需要抽离，什么样的不需要------公共模块/私有模块/不变/多变
- webpack-dev-server/devServer,用于启动一个本地的服务器, 热更新
- html-webpack-plugin  
- mini-css-extract-plugin 抽离成但文件，就不再需要 style-loader
- 压缩css js/放在optimization下面
- cleanWebpackPlugin / 每次打包删除dist下的目录
- copyWebpackPlugin //// 将一些没有已来到但是有需要输出到  dist文件中的
- webpack.BannerPlugin('core by gxb') 代码首部添加版权
- webpack-merge 混合一些公共配置和 测试/预发/线上环境的
### loader
- css-loader，
- style-loader，主要用于将处理好的css用各种方式引入到  文件中去，需要搭配使用，注意使用的顺序
- babel-loader
- es7转es6的语法的配置
- file-loader / 处理图片
- url-loader / file-loader的升级版
### 常见配置
- 配置多入口。出口配置一个占位的名字
- devtool :'source-map' ------- 是否生成。map文件便于错误查找，一般用于开发环境
- watchOptions： 配置监听打包
- 处理跨域 devServer proxy
#### resolve 用于给出文件查找的优先级
- alias: 别名，简化文件引入的路径
- extensions: [] ,引入文件如果没有后缀，会按照数组中的顺序查找

### 优化
- 对于一些确定的文件，没有其他引入的 

    module: {
      noParse: /jquery|lodash/,
    }
-  include/exclude，缩小目标的范围，加快文件的查找速度
- 多线程打包happypack 据说可以多进程打包，提高速度但是还没用过
- 这里需要@babel/plugin-syntax-dynamic-import用于 解析识别import()动态导入语法
- hmr [url](https://www.webpackjs.com/plugins/hot-module-replacement-plugin/),
- DllPlugin动态链接库/dll已经被废弃了，用于 保证一些大型的包在开发过程中不会被重复打包，使用 
- 抽取公共代码------特别是针对多入口文件optimization.splitChunks
- 如何通过webpack来改善浏览器缓存进行性能优化  知识点： manifest runtime 
#### optimization.splitChunks 详解

### [手写tapble](https://juejin.im/post/5f0494e2e51d4534c4551c67?utm_source=gold_browser_extension#heading-27)
### 手写简单webpack

### 生成的文件
####  bubdle/ 
####  __weboack_require__ / 
####  module的缓存
