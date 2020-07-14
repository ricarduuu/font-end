function track() {
  // 收集依赖
  
}
function trigger() {
  // 触发更新
}

function effect(fn, option) {
  // 副作用
  // computed是一个特殊的effect

}
const  baseHandler = {
  get(target, key) {
    const res = target[key];
    // 收集依赖
    track(target, key);
    return res;
  },
  set(target, key, val) {
    const info = {
      oldValue: target[key],
      newValue: val
    }
  }
}
// proxy reflect
function reactive(target) {
  // target 变成响应式
  const observerd = new Proxy(target, baseHandler)
  return observerd
}
