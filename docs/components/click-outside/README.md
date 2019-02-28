# ClickOutside 

## 引入 

```bash
import {ClickOutside} from 'wwz-ui'
```

## 使用

作为指令使用。

1. 在 vue 实例中注册

```
directives: {ClickOutside},
```

2. 在元素中使用 

```
<div v-click-out-side="doSomething">
    ...
</div>
```

当点击了 div 外部，就会调用 `doSomething` 方法。

虽然你可以很快的在 document 下添加监听来完成这个事情，但是有些情况下你会忘记移除这个监听器，就可能会造成内存泄露。

如果你使用这个指令，我会在元素移除后自动清除监听器，并且不管该页面上有多少个元素，我只会进行一次监听。所以，推荐使用！

[click-outside 源码阅读](https://github.com/mysteryven/wen-design/blob/master/src/click-outside.js)



