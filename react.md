### context
- 主要用于解决组件中多层props传递，比如常用的locale  theme 和一些缓存数据
- 可以使用组件组合的方法代替， 将组件从第一层传递下去
- 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。匹配不到的时候 defaultValue才会生效
- 避免context。provider渲染触发子组件重新渲染，可以将 provider.value放到state中去
- context.consumer传递context值 