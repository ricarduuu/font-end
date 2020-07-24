### 关于拖拽编辑器中难点的memo
- [蚂蚁金服关于这方面的文章](https://zhuanlan.zhihu.com/p/92469406)
- 参考资料 moveablejs  
- [react-dragline](https://github.com/zcued/react-dragline)  
- [drawio](https://github.com/jgraph/drawio), svg绘制流程图
- [云凤蝶](https://www.zhihu.com/search?type=content&q=%E4%BA%91%E5%87%A4%E8%9D%B6)
####  拖拽，是数据的拷贝还是整体的移动
- 正常的通过draggable="true"移动的时候，原位会有一个残影留在那里
- 直接移动，不存在拷贝，这种可能是鼠标按下后，目标随着鼠标的偏移一起移动

####  拖拽过程中，线的对齐和吸附
- 先动手去做，做个简单的线的提示，看下 效果、和性能、看看会不会造成卡顿
- 每个拖拽目标含有六条线，横向三条，纵向三条
- 吸附的条件，在某一区间内，移动较大的距离，吸附上去
- 在极端的情况下会出现六条线，在 拖拽的目前周围有四个目标，并且边线，中心线对齐
- 是否能使用webgl gpu渲染，代替频繁的dom操作