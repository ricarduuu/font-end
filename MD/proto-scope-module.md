##  继承、作用域、闭包、模块这，这几个概念怎样结合在一起
### proto 
- [draw](https://github.com/ricarduuu/draw)   -- proto,可以通过[在线编辑工具](https://app.diagrams.net/)打开

### 作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期。
- 变量作用域
- 函数作用域
- 块级作用域
- 嵌套作用域形成了作用域链
- 局部作用域
#### 静态作用域/词法作用域
- 词法作用域指变量的作用域不是执行时决定而是在定义时决定，也就是说通过静态分析就能确定，词法作用域取决于源码，因此词法作用域也叫做静态作用域。

### 闭包
- 闭包 有待完善 重新理解一次
- 函数和对其周围状态（词法环境）的引用捆绑在一起构成闭包。 mdn 
- 在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外函数中声明的变量，当通过调用以恶搞外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包，比如外部函数 foo，那么这些变量的集合就称为 foo 函数的闭包。
- 方便对入参做一些统一的处理
- for循环中的 闭包问题
- 改为let后每次循环都会重新 声明变量，变量的初始值（JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。）


### 模块
### 区别与联系
- 原型链存在于作用域内，作用域用于查找是否存在某个变量，原型链用于查找是否存在对象的某个属性
- 每个闭包都有自己的词法作用域
- 在函数的创建执行过程中，作用域链会被保存在内部属性中

### 执行上下文
-   每个执行上下文中，都有三个元素，变量对象、作用域链、this
#### 变量对象
- 变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。
- 在全局中，他就是全局对象
- 函数在激活的时候，函数上下文的变量对象初始化只包括 Arguments 对象，在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值，在代码执行阶段，会再次修改变量对象的属性值


### 课外知识   [reference](https://github.com/mqyqingfeng/Blog/issues/7) 好难懂啊哈哈哈哈
- 在语言的基本类型之外还存在着一种规范类型，它们的作用是用来描述语言底层行为逻辑，并不会存在于实际的代码中，比如referencw，它与this 的指向有着密切的关联。
- 深入的了解有助于理解下面的这段代码

    var value = 1;

    var foo = {
      value: 2,
      bar: function () {
        return this.value;
      }
    }
    console.log((false || foo.bar)()); // 1

- Reference 的构成，由三个组成部分，分别是：base value，referenced name，strict reference
- 我们简单的理解的话：base value 就是属性所在的对象或者就是 EnvironmentRecord，它的值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种。referenced name 就是属性的名称。




        var foo = 1
        // 对应的referencej就是
        Reference={
          base: environmentRecord,
          name: 'foo',
          strict: false
        }




        var foo = {
        bar: function () {
          return this;
            }
        };
        
        foo.bar(); // foo

        // bar对应的Reference是：
        var BarReference = {
            base: foo,
            propertyName: 'bar',
            strict: false
        };


- reference中的方法比如 GetBase 和 IsPropertyReference。GetBase用于返回reference中的base value,IsPropertyReference: 如果 base value 是一个对象，就返回true。
- 还有 GetValue 返回对象属性真正的值，但是要注意：调用 GetValue，返回的将是具体的值，而不再是一个 Reference，这个很重要，这个很重要，这个很重要。
#### 根据使用场景来解释this （但是还是不能完全解释清楚this的变化的）
- 1、作为对象调用时，指向该对象 obj.b(); // 指向obj
- 2、作为函数调用, var b = obj.b; b(); // 指向全局window
- 3、作为构造函数调用 var b = new Fun(); // this指向当前实例对象
- 4、作为call与apply调用 obj.b.apply(object, []); // this指向当前的object
