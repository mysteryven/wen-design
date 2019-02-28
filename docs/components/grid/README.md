# Grid 栅格

## 引入 

```bash
import {Col, Row} from 'wwz-ui'
```

## 预览

<ClientOnly>
<grid-demo/> 
</ClientOnly>

## 代码


<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
<!-- 普通模式 --> 
<z-row class="z-grid-row">
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6</div>
    </z-col>
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6</div>
    </z-col>
    <z-col span="12" class="z-grid-col">
        <div class="z-content">span=12</div>
    </z-col>
</z-row>

<z-row class="z-grid-row">
    <z-col span="12" class="z-grid-col">
        <div class="z-content">span=12</div>
    </z-col>
    <z-col span="12" class="z-grid-col">
        <div class="z-content">span=12</div>
    </z-col>
</z-row>

<z-row class="z-grid-row">
    <z-col span="8" class="z-grid-col">
        <div class="z-content">span=8</div>
    </z-col>
    <z-col span="8" class="z-grid-col">
        <div class="z-content">span=8</div>
    </z-col>
    <z-col span="8" class="z-grid-col">
        <div class="z-content">span=8</div>
    </z-col>
</z-row>

<!-- 带间隙 -->
<z-row class="z-grid-row" gutter="10">
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6</div>
    </z-col>
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6</div>
    </z-col>
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6</div>
    </z-col>
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6</div>
    </z-col>
</z-row>

<!-- 左右偏移 -->
<z-row class="z-grid-row" gutter="10">
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6</div>
    </z-col>
    <z-col span="6" offset="6" class="z-grid-col">
        <div class="z-content">span=6 offset=6 </div>
    </z-col>
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6</div>
    </z-col>
</z-row>
<z-row class="z-grid-row">
    <z-col span="12" offset="6" class="z-grid-col">
        <div class="z-content">span=6 offset=12</div>
    </z-col>
    <z-col span="6" class="z-grid-col">
        <div class="z-content">span=6 offset=6 </div>
    </z-col>
</z-row>

<!-- 适配 电脑、ipad、手机，默认适配手机 -->
<z-row class="z-grid-row">
    <z-col span="12" offset="0" :pc="{span: 6, offset: 0}" :ipad="{span: 4}" class="z-grid-col">
        <div class="z-content">调整窗口大小查看效果</div>
    </z-col>
    <z-col span="12" offset="0" :pc="{span: 12, offset: 6}" :ipad="{span: 4, offset: 4}" class="z-grid-col">
        <div class="z-content">具体逻辑请看代码</div>
    </z-col>
</z-row>
```
</details>

# API

<table>
    <thead>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </thead>
    <tbody>
      <tr>
        <td>gutter</td>
        <td>由 Row 接收，设置内部 Col 的 间隔</td>
        <td>Number 或者类型为 String 的数字</td>
        <td>0</td>
      </tr>
      <tr>
        <td>span</td>
        <td>由 Col 接收，设置一个 Col 占父元素的多少比例，取值为 0-24 的整数</td>
        <td>Number 或者类型为 String 的数字</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>由 Col 接收，设置该 Col 向右偏移的距离，取值为 0-24 的整数</td>
        <td>Number 或者类型为 String 的数字</td>
        <td>-</td>
      </tr>
      <tr>
        <td>ipad</td>
        <td>设置屏幕宽度大于 1024px 时的表现，如 {span: 1, offset: 1}</td>
        <td>对象</td>
        <td>-</td>
      </tr>
      <tr>
        <td>pc</td>
        <td>设置屏幕宽度大于 768px 时的表现，如 {span: 1, offset: 1}</td>
        <td>对象</td>
        <td>-</td>
      </tr>
    </tbody>
    </table>
    
:::tip
由于默认是适配手机的，所以你想做适配，只需要给 ipad 和 pc 加就可以啦！另外，如果默认值、ipad、pc 接收了 
`offset`，那其他的也要给，以避免 「遗传」。如果没有的话请给 0。
:::
