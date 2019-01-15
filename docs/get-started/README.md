# 快速上手

## 引入 JS

打开我们刚刚初始化完成的项目的 src 目录 下面的 `main.js`，把里面的内容替换成如下代码：

```js
 import Vue from 'vue'
 import {Button, ButtonSelect, ButtonGroup} from 'wwz-ui'
 import 'wwz-ui/dist/index.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
      lists: ['苹果', '香蕉', '梨子']
  },
  components: {
      'z-button': Button,
      'z-button-group': ButtonGroup,
      'z-button-select': ButtonSelect
  }
})
 
```

## 引入 HTML

打开 public 目录下的 `index.html`，替换成以下代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>hello-world</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but hello-world doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
      <z-button icon="like" icon-position="left">点赞!</z-button>
      <z-button-group>
          <z-button icon="left" icon-position="left">上一页</z-button>
          <z-button icon-position="left">按钮组</z-button>
          <z-button icon-position="left">按钮组</z-button>
          <z-button icon="right" icon-position="right">下一页</z-button>
      </z-button-group>
      <z-button-select :list="lists"></z-button-select>
    </div>
  </body>
</html>

```


 如果出现了  "You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. "
这样的报错信息，你只需在项目的根目录创建一个 文件名为 「vue.config.js」,里面的内容为：

```
module.exports = {
    runtimeCompiler: true
}
```

如果想了解具体的原因，请看这个 [Issue](https://github.com/vuejs/vue-cli/issues/1875)

## 运行

此时，在命令行运行 
```
yarn serve 
```

好了，是否看到一个带点赞 icon 的按钮了呢？如果看到，恭喜你，已经成功了！

有任何问题，欢迎提 issue 或者给我发邮件：mysteryven@gmail.com