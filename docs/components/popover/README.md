# popover 气泡卡片

## 引入

```bash
import {popover} from 'wwz-ui'
```

## 预览

<ClientOnly>
<popover-demo/>
</ClientOnly>

## 代码

```
<z-popover trigger="hover">
    <template slot="content">
        欢迎使用
    </template>
    <slot>
        <z-button> hover me (悬浮)</z-button>
    </slot>
</z-popover>

<z-popover position="bottom">
    <template slot="content">
        欢迎使用
    </template>
    <slot>
        <z-button>click me</z-button>
    </slot>
</z-popover>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| trigger | 选择触发方式，默认为 click，可以选择 hover（悬入）和 focus（长按）| String | click |
| position | 配置悬出的位置，有 top、left、right、bottom 四个可选值 | String | top |


:::tip
具体传入方法参考代码，默认的 slot 可以传入任何你想传入的值，不止 `ZButton`。悬浮面板的必须是名字为 content 的 slot。
:::
 