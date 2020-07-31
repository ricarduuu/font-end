### ts不熟悉的地方记录。。。
[参考资料](https://typescript.bootcss.com/interfaces.html)
- enum 枚举 还是不熟
- void   undefined null
- 默认 undefined  null是
- 一个ininterface 可以extends多个接口  逗号隔开
#### 类型断言(绕开一些不合适的检查)
 
- as
#### 泛型
- 大多数情况下，编译器可以推断出值的类型，在一些复杂的情况下，推断不出来是需要泛型的，T作为一个类型参数传递给函数

    function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
    }


- T[]是一种表示方法 还可以使用 Array<T>

