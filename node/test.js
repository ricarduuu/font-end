// setTimeout(()=>{
//   console.log("time1");
//   process.nextTick(()=>{
//       console.log("nextTick2");
//   });
// });
// console.log("start")
// process.nextTick(()=>{
//   console.log("nextTick1");
//   setTimeout(()=>{
//       console.log("time2");
//   });
// });
// //
// //start nextTick1 time1 time2 nextTick2 //node11尽量和浏览器的相同
// //start nextTick1 time1 nextTick2 time2 //node10会出现这种输出上

setTimeout(function(){
  console.log('timeout');
},0)
setImmediate(function(){
  console.log('immediate');
})

//在node环境中，多次执行上面的代码，就会发现如下两种结果：
