# Button 按钮

## 引入

```
import {Button} from 'wwz-ui' 
``` 

## 预览

<ClientOnly>
<button-button-demo/>
</ClientOnly>


## 在线示例

[![Edit z-button-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0oo90x6ojn?fontsize=14)

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
      <td>icon</td>
      <td>代表要插入的 icon 的名称，具体值请看 icon 部分</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>iconPosition</td>
      <td>改变 icon 的位置，可传 <code>left</code> 或 <code>right</code> </td>
      <td>String</td>
      <td>left</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>设置为 loading 状态，此时不用传 icon，但是依然可以设置 iconPosition</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>禁用按钮</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>isCircle</td>
      <td>使用圆形按钮，当值为 `true` 的时候将只展示传入的图标</td>
      <td>Boolean</td>
      <td>fasle</td>
    </tr> 
  </tbody>
  </table>








