### 继承
- prototype 
- __proto__ 指向的是原型链
- costructor 指向的是构造函数

### 共同性
- __proto__ constuctor 是对象独有的
- prototype是 函数独有的
### [track](https://juejin.im/post/6844903816874164232)
### code
    

    // 此处应该有一张图来
    function foo() {}
    let f1 = new foo();
    // f1 是个对象 __proto__ constuctor
    // foo是个对象也是个函数 __proto__ constuctor prototype
    // constructor
    f1.constructor === foo
    foo.consructor === Function
    Function.constructor === Function
    // __proto__ 对象中的
    f1.__proto__ === foo.prototype
    foo.prototype.__proto__ === Object.prototype
    Object.prototype.__proto__ === null
    // __proto__ 函数对象中的
    foo.__proto__ === Function.prototype
    Function.prototype.__proto__ === Object.prototype
    Object.prototype.constructor===Object
    




#### qs 有了 __proto__ 为什么还需要prototype
- foo.__proto__ === Function.prototype
- foo.prototype.__proto__ === Object.prototype
- Object.prototype.__proto__ === null
- Object.constructor === Function
- __proto__ 保证了实例可以访问到构造函数原型中定义的属性和方法
- __proto__ 为隐式原型，隐式原型指向创建这个对象的函数(constructor)的prototype