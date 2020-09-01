Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
      result = context.fn();
  }
  else {
      var args = [];
      for (var i = 0, len = arr.length; i < len; i++) {
          args.push('arr[' + i + ']');
      }
      result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result;
}
// call

Function.prototype.call2 = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }

  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}
// 测试一下
// var foo = {
//     value: 1
// };

// function bar(name, age) {
//     console.log(name)
//     console.log(age)
//     console.log(this.value);
// }

// bar.call2(foo, 'kevin', 18); 
// 一直有个疑问，eval中的字符串和args中的字符串，试了下  '' + 数组，把数组转成了逗号相隔的字符串
// 这两个主要是字符串的拼接，然后eval解析字符串




Function.prototype.call3 = function(context){
  context.fn = this
  let args = []
  // call的第一个参数是this
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  // 将所要执行的语句转为字符串的形式，eval会去解析并执行
  eval('context.fn(' + args + ')')
  delete context.fn
}

Function.prototype.apply3 = function (arg){
  // apply使用的是数组，不需要通过arguments获取
}