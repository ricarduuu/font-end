## javascript 
### 继承
- 1原型链
- 2构造函数
- 3组合继承(1 + 2)
- 4寄生式继承
- es6 类

### 作用域

### 闭包
- 是作用域链的一种应用。
- 可以通过闭包实现一个包含，私有变量 / 暴露给外层的api    的模块
- 当嵌套的内部函数引用了外部函数的变量时就产生了闭包
* 通过chrome工具得知: 闭包本质是内部函数中的一个对象, 这个对象中包含引用的变量属性
#### 作用:
* 延长局部变量的生命周期
* 让函数外部能操作内部的局部变量


### 模块
- 对amd cmd es6 commonjs的理解
- amd cmd ------- define /require, amd require前置，cmd（sea.js）require就近
- commonjs CommonJS的核心思想就是通过 require 方法来同步加载所要依赖的其他模块，然后通过 exports 或者 module.exports 来导出需要暴露的接口。输出的是一个值的拷贝， 是在运行时加载的
- es6moudule 是在编译的时候输出，并且是值引用。
#### 寄生组合式继承(还得翻下书)
- 构造函数，只new一次， 同时构造函数可以传递参数
- 原型链
- 子的constructor指向自己
- 组合函数中，构造函数需要执行两次，一次内部调用，一次在原型中

#### es6 类
- constructor 可以实现和构造行数一样的传递参数
- static 静态变量，只有类本身可以调用，类似  构造函数的 自由属性，不会被继承
- 公有属性和方法，写入构造函数的原型中，
- 公有方法中，定义属性描述符，configurable(可配置---》可删除) enumerable(可枚举) writable(可篡改)

##### 枚举
- for..in循环
- Object.keys方法
- JSON.stringify方法