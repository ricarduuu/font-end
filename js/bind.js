// bind
/*
 *  返回一个愿函数的拷贝
 *  this的绑定
 * 可以传入参数
 * 
*/

Function.prototype.bind1 =  Function.prototype.bind ||  function(context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  // 通过apply实现函数执行，并且合并了参数
  var fBound = function () {
      var bindArgs = Array.prototype.slice.call(arguments);
      console.log(this instanceof fBound , '0-----')
      // this instanceof fBound一直不理解，
      return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  // 为什么要指定prototype
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;

}

// 第一波没看懂