# Toast 全局提示

## 引入

```bash
import {ToastPlugin} from 'wwz-ui' 

Vue.use(ToastPlugin)
```

## 预览

<iframe src="https://codesandbox.io/embed/9ljp3rj714?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## 代码

代码请在预览中查阅

## 使用方法

1. 在 `new Vue()` 之前引入

```bash
import {ToastPlugin} from 'wwz-ui' 
Vue.use(ToastPlugin)
```

2. 在组件中使用 vm 示例对象的 `$toast` 方法

```js
 showToast() {
    this.$toast('谢谢使用!', {
        position: 'middle',
        closedCallback() {
            alert('我关闭了')
        }
    })
}
```

## toast 介绍 

> this.$toast(message, propsData)

### message

代表要显示的在页面的文字。

### propsData

```
{   
    autoClose: true | false // 是否自动关闭，默认 true,
    position: middle | top | left // 位置，默认是 middle,
    duration: Number // 持续时间，单位是秒
    closeButton: {
        text: ''  // String，右侧关闭按钮的文字
        callback: ()=>{} // 点击关闭按钮的回调
    },
    closedCallback: ()=>{} // 函数，传此项在按钮关闭后自动调用，不管是否有 closeButton
    
}
```

