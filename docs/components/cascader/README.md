# Cascader 级联选择器

## 引入

```bash
import {Cascader} from 'wwz-ui'
```

## 预览

<ClientOnly>
<cascader-demo/>
</ClientOnly>


## 代码

此例代码较多，在这里只贴 Html 部分的代码，如想查看完整示例请点击下方按钮。

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/2pv237k0mp?fontsize=14)

```vue

<!-- 同步版本 -->
<z-cascader :source="source" :selected.sync="selected">
    <z-button>{{selectedString || '&nbsp;'}}</z-button>
</z-cascader>

<!-- 异步版本 -->
 <z-cascader :source.sync="artists" :selected.sync="selected2" :loadData="loadData">
    <z-button>{{selectedString2 || '&nbsp;'}}</z-button>
</z-cascader>
```

:::tip
由于该组件是自适应内部元素宽高的，所以建议给 `Cascader` 内部的内容固定高度，或者给一个如 `&nbsp` 的占位符来防止出现不必要的 Bug。
::: 


## API

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| source | 传入要渲染的数据，异步版本需添加 `.sync` 修饰符 | 对象 | - |
| selected | 已选中的数组，要添加 `.sync` 才能被组件内部影响 | 对象 | - |
| loadData | 传此项开启异步加载，第一个参数是点击节点的数据，包含 id 等，第二个参数是函数，用作把数据传回给组件 | 函数 | - | 
| isLeaf | 如果 source 中的某一项 isLeaf === true ，将不展示 箭头 | Boolean | - |
### loadData 写法示例

```
loadData(node, updateSource) {
    let {id} = node
    ajax(xxx).then(res => { // 你的 ajax 方法
        updataSource(res.data)  // 将会把取到的数据作为点击项的 children ，并展示在后面
    })
}
```

### source 数据格式示例

```js
// 同步
[{ 
    id: 1, 
    name: '勃拉姆斯', 
    isLeaf： true, 
    children: [{
        id: 11, 
        name: '匈牙利舞曲',
        isLeaf: false
    }]
}]

// 异步不需要 children
[
    {id: 1, name: '贝多芬', isLeaf: true},
    {id: 2, name: '莫扎特', isLeaf: false}
    ....
]
```







