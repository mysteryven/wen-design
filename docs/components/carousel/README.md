# Carousel 走马灯

## 引入 

```bash
import {Carousel, CarouselItem} from 'wwz-ui'
```

## 预览

<ClientOnly>
<carousel-demo/>
</ClientOnly>

## 代码

```vue
<z-carousel class="z-slides" :selected.sync="selected" :auto-play="true" :interval="3100" arrowVisible>
    <z-carousel-item class="z-item" name="1">1</z-carousel-item>
    <z-carousel-item class="z-item" name="2">2</z-carousel-item>
    <z-carousel-item class="z-item" name="3">3</z-carousel-item>
</z-carousel>
```

```js
data() {
    return {
        selected: '1'
    }
} 
```

:::warning
`selected` 必须添加 `.sync`，否则无法正常更新。
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| selected | 指示当前显示的哪一项，必填 | String | - |
| autoPlay | 是否自动播放 | Boolean | false |
| interval | 自动播放开启后播放的时间间隔，单位是毫秒（ms） | Number | 3000 ms |
| arrowVisible | 是否显示上下页箭头 | Boolean | false | 
| dotsVisible | 是否显示分页器 | Boolean | true | 
| name | 传入 `CarouselItem`，唯一标识符，必传 | String | - |


