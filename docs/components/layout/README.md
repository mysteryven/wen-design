# Layout 布局

## 引入

```bash
import {Layout, Header, Footer, Content, Sider} from 'wwz-ui'
```

## 预览

<ClientOnly>
<layout-demo/>
</ClientOnly>

## 代码

<details style="">
  <summary style="margin-top: 32px; outline: none">点击查看代码</summary>
  
```vue

<!-- 布局 1 -->
<z-layout class="d-layout">
    <z-header class="d-header">
        header
    </z-header>
    <z-content class="d-content">
        content
    </z-content>
    <z-footer class="d-footer ">
        footer
    </z-footer>
</z-layout>

<!-- 布局 2 -->
<z-layout class="d-layout">
    <z-header class="d-header">
        header
    </z-header>
    <z-layout>
        <z-sider class="d-sider">sider</z-sider>
        <z-content class="d-content" style="width: 300px;">
            content
        </z-content>
    </z-layout>
    <z-footer class="d-footer ">
        footer
    </z-footer>
</z-layout>

<!-- 布局 3 -->
<z-layout class="d-layout">
    <z-header class="d-header">
        header
    </z-header>
    <z-layout>
        <z-content class="d-content" style="width: 300px;">
            content
        </z-content>
        <z-sider class="d-sider">sider</z-sider>
    </z-layout>
    <z-footer class="d-footer ">
        footer
    </z-footer>
</z-layout>

<!-- 布局 4 -->
<z-layout class="d-layout">
    <z-sider class="d-sider">sider</z-sider>
    <z-layout style="width: 300px">
        <z-header class="d-header">
            header
        </z-header>
        <z-content class="d-content">
            content
        </z-content>
        <z-footer class="d-footer">
            footer
        </z-footer>
    </z-layout>
</z-layout>

```   
</details>

## API

无


--- 

::: tip
由于该组件采用了 `flex-grow` 来占满剩余空间，如果需要调整宽度，只能通过调大宽度的方式来挤压另外一个，比如当 Sider 和 Content 同行时，需要通过调大宽度来控制两者的宽度。
举例子来说，总宽度为 100px，要想让 sider 占 20px，需要给定它旁边元素的宽度 80px。
:::
