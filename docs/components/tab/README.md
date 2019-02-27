# Tab 导航

## 引入

```bash
import {Tabs, TabsHead, TabsBody, TabsPane, TabsItem} from 'wwz-ui'
```

## 预览

<ClientOnly>
<tab-demo/>
</ClientOnly>

## 代码

```vue
 <z-tabs :selected.sync="selected">
    <z-tabs-head>
        <z-tabs-item name="a" active-class="z-active-item">勃拉姆斯</z-tabs-item>
        <z-tabs-item name="b" active-class="z-active-item">巴赫</z-tabs-item>
        <z-tabs-item name="c" active-class="z-active-item">拉赫玛尼诺夫</z-tabs-item>
        <z-tabs-item name="d" active-class="z-active-item">李斯特</z-tabs-item>
    </z-tabs-head>
    <z-tabs-body>
        <z-tabs-pane name="a">内容1</z-tabs-pane>
        <z-tabs-pane name="b">内容2</z-tabs-pane>
        <z-tabs-pane name="c">内容3</z-tabs-pane>
        <z-tabs-pane name="d">内容4</z-tabs-pane>
    </z-tabs-body>
</z-tabs>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selected | 传给 `Tabs` 指示选中哪一项 | String | - |
| name | 传给 `TabsItem` 和 `TabsPane`，必传，需要和对应的 `TabPane | TabsItem`  同名 | String | - |
| activeClass | 传给 `TabsItem`，如想自定义点击的样式时使用。接收点击后的样式的类名，之后你还需要写这个类 | String | - | 







