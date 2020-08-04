[webpack](./webpack.md)
### 生成的文件(需要从小到大分析，自己写一个demo慢慢添加内容，拆解生成后的文件，循序渐进到自己当前的项目，去分析)
####  main.js
-执行了window['webpackJsonp'].push方法
- 传参 [['main'], {路径: function,  路径: function,.....}, [["./src/index.js","runtime~main"]]],对于参数的理解还未知
- 对于参数的理解 data[0] ==> chunkIds  data[1] ==> moreModules data[2] ==> executeModules   /// chunkIds 和moreModules的区别
####  __weboack_require__ , 没怎么理解，等后面看看别的再回头看看
- __weboack_require__是对require 重新包裹了一层，主要用于加载js文件
- __weboack_require__.m 
- __webpack_require__.r方法主要是通过 Symbol.toStringTa的存在与否标识该模块为es模块,
- __weboack_require__.c   module的缓存
- __weboack_require__.d harmony exports,感觉就是 default exports，供Getter给导出的方法、变量
- __weboack_require__.t没看懂
- __weboack_require__.n
- __weboack_require__.o 判断是不是自有属性
- __webpack_require__.p public path应该是 配置中的资源位置


      	        __webpack_require__.r = function(exports) {
        /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/ 		}
        /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 	};


- __webpack_require__.e 此方法是异步加载模块？？？？？
####  module的缓存
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
- webpackJsonpCallback

- eval拆解
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ 
    __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
    /* harmony export (binding) */ 
    __webpack_require__.d(__webpack_exports__, "Second", function() { return Second; });
    /* harmony import */ 
    var _third__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third */ "./src/third.js");
    //first.js
    class First {
      say() {
        Object(_third__WEBPACK_IMPORTED_MODULE_0__["default"])('First')
    }}
    let first = new First()
    class Second {
      say() {        
        console.log('Second')    
      }}
      //# sourceURL=webpack:///./src/first.js?");






