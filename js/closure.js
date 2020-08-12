//  第二个 a2执行的时候篡改了 全局的nAdd
var nAdd;
var t = function() {
    var n = 99;
    nAdd = function() {
    	 n++;
    }
    var t2 = function() {
    	console.log(n)
    }
    return t2;
};

var a1 = t();
var a2 = t();

nAdd();

a1(); //99
a2(); //100

// 1
/*
 * @1 首先创建了全局执行上下、 全局对象、全局作用域，全局上下文被雅茹执行栈  
 ECStack = [
        globalContext
    ];
 * @2 全局上下文初始化

    globalContext = {
        VO: [global],
        Scope: [globalContext.VO],
        this: globalContext.VO
    }
  * 初始化的同时，checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]

    checkscope.[[scope]] = [
      globalContext.VO
    ];
  * 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈

    ECStack = [
        checkscopeContext,
        globalContext
    ];
    // 后面还有不少
*/
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
// 用自己的话来说上述代码就是按部就班的，压入执行栈，作用域嵌套

//  2
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
// 每个执行上下文包括三个重要的属性，执行上下文又分为 进入执行上下文 和 代码执行，https://github.com/mqyqingfeng/Blog/issues/5，代码执行后会对变量对象产生影响
// 变量对象(Variable object，VO)存储了在上下文中定义的变量和函数声明。
// 作用域链(Scope chain) 变量对象存贮于作用域链中
// this
// 2代码与1的区别是，checkscope先从执行栈中弹出后，才压入f函数，再执行完f，弹出f
// 　这个时候checkscope被执行栈弹出它的 执行上下文已经被销毁了，但是它的变量对象被保存在内存里面