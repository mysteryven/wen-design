# Dropdown 下拉按钮

## 引入

```
import {ButtonSelect} from 'wwz-ui'
```

## 预览
<ClientOnly>
<button-button-select/>
</ClientOnly>

## 部分代码预览

```html
<div class="button-demo" >
    <z-button-select :lists="lists" :current.sync="current">
    </z-button-select>
    <div>目前选择的值： {{current}}</div>
</div>
```
:::warning
请注意，我们的组件大多使用了单项数据流的思想，体现在本例的是在代码上是在监听 current 的时候添加了 `.sync` 修饰符，如果不添加此修饰符就不会监听到 current 的更新。
:::

## API
 <table>
    <thead>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </thead>
    <tbody>
      <tr>
        <td>lists</td>
        <td>传入要展示的数据，如 <code>['a', 'b', 'c']</code></td>
        <td>一维数据</td>
        <td>无</td>
      </tr>
      <tr>
        <td>current</td>
        <td>展示在 button 上的数据，若想取得该值的更新只需添加 <code>.sync</code> 修饰符</td>
        <td>String</td>
        <td>数组的第一项</td>
      </tr>
    </tbody>
  </table> 


:::tip
本组件功能较为简单，没有内置滚动条，数据量多时建议使用 `Cascader(级联选择器)` 组件。
:::