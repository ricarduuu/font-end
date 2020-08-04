
console.log('--3222222222---')
module.exports = function (source, map, meta) {
  console.log(typeof(source))
  if (source.indexOf('{/n')){
    console.log('----666---')
    // 可以生成hash 添加在css的类名后面同时要添加到 html中的类相关的标签里
    source = source + '.a{color: #aaa;}'
  }
  console.log('css>>>>', source, map, meta)
  return source
}
