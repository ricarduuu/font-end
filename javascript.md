## javascript 
### 主要的设计模式
### 主要的算法
### 堆、栈、树、在计算机中的应用（数据结构）
- 数组，需要一段连续的存储空间，方便查询，删除和插入比较耗时，因为需要移动其他元素
- 栈，特殊的线性表，先进后出，常用于实线递归方面的
- 队列，特殊的线性表，先进先出，是和多线程阻塞队列
- 链表，可用于线性/非线性的数据结构，占用空间比较大，查询麻烦，比较适用于数据量较小，比较频繁插入、删除的（涉及到的元素改动比较少）
- 树，二叉树是一种比较有用的折中方案，它添加，删除元素都很快，并且在查找方面也有很多的算法优化，所以，二叉树既有链表的好处，也有数组的好处，是两者的优化方案，在处理大批量的动态数据方面非常有用。
- 堆
- 图
- 散列表

### 继承
- 1原型链
- 2构造函数
- 3组合继承(1 + 2)
- 4寄生式继承
- es6 类

### 作用域
#### [prototype __proto__ constructor](./proto)
### 闭包
- 是作用域链的一种应用。
- 可以通过闭包实现一个包含，私有变量 / 暴露给外层的api    的模块
- 当嵌套的内部函数引用了外部函数的变量时就产生了闭包
* 通过chrome工具得知: 闭包本质是内部函数中的一个对象, 这个对象中包含引用的变量属性
#### 作用:
* 延长局部变量的生命周期
* 让函数外部能操作内部的局部变量

### [继承](./继承.md)
### 模块
- 对amd cmd es6 commonjs的理解
- amd cmd ------- define /require, amd require前置，cmd（sea.js）require就近, amd是一种前置依赖，如果说你定义的函数中需要什么模块需要是现在 定义的数组中引入，在回调函数里面加载，
CMD 是一种依赖就近，在什么地方使用就在什么地方引入，即用即反，是一种同步的概念
- commonjs CommonJS的核心思想就是通过 require 方法来同步加载所要依赖的其他模块，然后通过 exports 或者 module.export 来导出需要暴露的接口。输出的是一个值的拷贝， 是在运行时加载的
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

##### eventLoop 浏览器/node
- timer 对应setTimeOut  setInterval
- I/O callbacks,大多数的回调方法在这个阶段执行，除了timers、close和setImmediate事件的回调函数。fs.readFile的回调是放在poll阶段来执行的
- idle，prepare：仅仅在内部使用，我们不管它。
- poll：轮询，不断检查有没有新的I/O事件，事件环可能会在这里阻塞。1)如果有到期的定时器，那么就执行定时器的回调方法。2)处理poll阶段对应的事件队列（以下简称poll队列）里的事件。

当事件循环到达poll阶段时，如果这时没有要处理的定时器的回调方法，则会进行下面的判断：1.如果poll队列不为空，则事件循环会按照顺序遍历执行队列中的回调函数，这个过程是同步的。2.如果poll队列为空，会接着进行如下的判断：①如果当前代码定义了setImmediate方法，事件循环会离开poll阶段，然后进入check阶段去执行setImmediate方法定义的回调方法。②如果当前代码并没有定义setImmediate方法，那么事件循环可能会进入等待状态，并等待新的事件出现，这也是该阶段为什么会被命名为poll（轮询）的原因。此外，还会不断检查是否有相关的定时器超时，如果有，就会跳转到timers阶段，然后执行对应的回调。
- check 处理setImmediate事件的回调,setImmediate是一个特殊的定时器方法，它占据了事件循环的一个阶段，整个check阶段就是为setImmediate方法而设置的。一般情况下，当事件循环到达poll阶段后，就会检查当前代码是否调用了setImmediate，但如果一个回调函数是被setImmediate方法调用的，事件循环就会跳出poll阶段而进入check阶段。


###### process.nextTick
process.nextTick的回调函数是由事件循环调用的，
无论node处于什么阶段都会，在阶段结束，清空 nextTick队列
###### process.nextTick vs setImmediate ？？？？/
- setImmediate的事件会在当前事件循环的结尾触发，对应的回调方法会在当前事件循环的末尾（check）执行。由于process.nextTick会在当前操作完成后立刻执行，因此总会在setImmediate之前执行
- 当有递归的异步操作时只能使用setImmediate，不能使用process.nextTick，前面讲process.nextTick时已经验证过这个问题了，就是递归调用process.nextTck会出现call stack溢出的情况

###### setImmediate setTimeout
- 当代码中同时出现这两个方法，我们已经知道了setImmediate方法会在poll阶段结束后执行，而setTimeout会在规定的时间到期后执行，由于无法预测执行代码时事件循环当前处于哪个阶段，
- 但是如果将二者放在一个IO操作的callback中，则永远是setImmediate先执行