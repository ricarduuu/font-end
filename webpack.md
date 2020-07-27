
### webpack-----------基础配置
- [webpack4模块运行机制](https://zhuanlan.zhihu.com/p/79706247)
- [要点](https://segmentfault.com/a/1190000021699105)
-  [解析](https://juejin.im/post/5e1ca214518825265c24874b)
- [系列](https://juejin.im/user/57c91b3b165abd0068db89c2/posts)
- [分析生成后的bundle文件](https://juejin.im/post/5d4a4644f265da03ab423767)
####  webpack的打包链路
- 
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
##### plugin的神明周期
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

### 优化 （性能优化配置其实是对功能的眼神，理解了原理才能知道 什么地方该怎么优化）
#### 优化开发体验
-  include/exclude，缩小目标的范围，加快文件的查找速度
- 多线程打包happypack 据说可以多进程打包，提高速度但是还没用过
- hmr [url](https://www.webpackjs.com/plugins/hot-module-replacement-plugin/),
- treeShaking 可以筛选出来 es6模块中是否被使用的代码，第三方的话，需要引入的模块是es6的


#### 优化输出质量
- 区分环境，线上禁止日志/压缩代码（UglifyJsPlugin）缩短变量名字 去除无用的代码，混淆代码
- 压缩es6代码，某些环境下对es6的代码支持性非常好，例如最新版的 Chrome、ReactNative 的引擎 JavaScriptCore，UglifyES
- 压缩css  cssnano,需要开启 css-loader 的 minimize 选项。
- 对于一些确定的文件，没有其他引入的 

    module: {
      noParse: /jquery|lodash/,
    }
- 这里需要@babel/plugin-syntax-dynamic-import用于 解析识别import()动态导入语法
- DllPlugin动态链接库/dll已经被废弃了，用于 保证一些大型的包在开发过程中不会被重复打包，使用 
- 抽取公共代码------特别是针对多入口文件optimization.splitChunks
- 如何通过webpack来改善浏览器缓存进行性能优化  知识点： manifest runtime 
##### cdn
- 静态资源的导入 URL 需要变成指向 CDN 服务的绝对路径的 URL 而不是相对于 HTML 文件的 URL。
- 静态资源的文件名称需要带上有文件内容算出来的 Hash 值，以防止被缓存。
- 不同类型的资源放到不同域名的 CDN 服务上去，以防止资源的并行加载被阻塞。
- output.publicPath 中设置 JavaScript 的地址。
- css-loader.publicPath 中设置被 CSS 导入的资源的的地址。
- WebPlugin.stylePublicPath 中设置 CSS 文件的地址。
- 只有在生产环境中可以生效，加上--display-used-exports可以看到 有哪些函数被打包进去
####  比较容易想到的问题及其技术关联的地方
#### 异步加载
- （异步加载相关的api和要点）
- 原理
- 异步加载的代码会放在一个全局变量中去
- 异步加载的核心其实是使用类jsonp的方式，通过动态创建script的方式实现异步加载。
- 就是利用的 jsonp 的实现原理加载模块，只是在这里并不是从 server 拿数据而是从其他模块中，不还是要jsonp请求服务器中的bundlejs的代码
- 1 加载入口 js 文件,__webpack_require__(__webpack_require__.s = 0)
- 2 执行入口 js 文件：modules[moduleId].call(module.exports, module, module.exports, webpack_require);
- 3 由于上述代码分别__webpack_require__.e了0 和 1，分别使用类jsonp的方式异步加载对应 chunk，并缓存到 promise 的 resolve 中，并标记对应 chunk 已经加载*
- 4 调用对应 chunk 模块时会在 window 上注册一个 webpackJsonp 数组，window['webpackJsonp'] = window['webpackJsonp'] || []。并且执行push操作。由于push操作是使用webpackJsonpCallback进行重写的，所以每当执行push的时候就会触发webpackJsonpCallback. webpackJsonpCallback 标记对应 chunk 已经加载并执行代码。
#### webpack打包速度的问题，
- 
#### optimization.splitChunks 详解

### [手写tapble](https://juejin.im/post/5f0494e2e51d4534c4551c67?utm_source=gold_browser_extension#heading-27)
### 手写简单webpack

### 生成的文件
####  bunddle/ 
####  __weboack_require__ 
- __weboack_require__是对require 重新包裹了一层，主要用于加载js文件
- __webpack_require__.r方法主要是标识该模块为es模块
- __webpack_require__.d方法是提供Getter给导出的方法、变量
- __webpack_require__.e 此方法是异步加载模块？？？？？
####  module的缓存



