### 关于拖拽编辑器中难点的memo
- [蚂蚁金服关于这方面的文章](https://zhuanlan.zhihu.com/p/92469406)，应该是写了为啥不用canvas
- [云凤蝶自由画布之道：分层模型](https://zhuanlan.zhihu.com/p/97768853)
- 参考资料 moveablejs  
- [react-dragline](https://github.com/zcued/react-dragline)  
- [drawio](https://github.com/jgraph/drawio), svg绘制流程图，源码electron还没有debug，不知道怎么做的
- [云凤蝶](https://www.zhihu.com/search?type=content&q=%E4%BA%91%E5%87%A4%E8%9D%B6) 据说有会员版，简单版啥都看不出来，辣鸡
- [konvajs](https://konvajs.org/docs/sandbox/Canvas_Editor.html) canvas + 移动
####  拖拽，是数据的拷贝还是整体的移动
- 正常的通过draggable="true"移动的时候，原位会有一个残影留在那里
- 直接移动，不存在拷贝，这种可能是鼠标按下后，目标随着鼠标的偏移一起移动
- 移动又有transform / position:absolute
- 先后拖拽存在包含与被包含、覆盖与被覆盖的关系

####  拖拽过程中，线的对齐和吸附
- 每一个可拖拽的对象需要存储的数据（含有六条线，横向三条，纵向三条）目前方案，线是不会绘制在每个拖拽对象上的，在对象上只动态存储计算可能存在的线的位置
- 线主要在，外层，放在可拖拽物体的周围
- 先动手去做，做个简单的线的提示，看下 效果、和性能、看看会不会造成卡顿,元素比较多的情况下，算法效率，多久对比一次
- 吸附的条件，在某一区间内，移动较大的距离，吸附上去
- 在极端的情况下会出现六条线，在 拖拽的目前周围有四个目标，并且边线，中心线对齐
- 是否能使用webgl gpu渲染，代替频繁的dom操作 [webgl dsl](https://juejin.im/post/5f03d4126fb9a07ea01a0909) 项目还没跑起来看，涉及的东西蛮多的前后端 mysql/mongodb