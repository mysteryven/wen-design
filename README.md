# ui-wheels

[![Build Status](https://travis-ci.org/mysteryven/ui-wheels.svg?branch=master)](https://travis-ci.org/mysteryven/ui-wheels)
[![npm](https://img.shields.io/badge/license-MIT-green.svg)](https://www.npmjs.com/package/wwz-ui)


## 介绍

这是个基于 Vue 的 UI 库，融合了主流 UI 框架的设计元素，但是请你注意，使用前要声明：

```css
 * {
    box-sizing: border-box；
 }
```

## 开始使用


### 初始化一个 Vue 项目

本 UI 库是依赖于 Vue 实现的，需要配合 vue-cli3 来使用。首先，我们需要切换到安全目录，运行：

```bash
npm install -g @vue/cli
npm install -g @vue/cli-service-global
vue create hello-world
cd hello-word
```

### 安装本 UI 库的 npm 包

为了避免产生不可预测的 Bug，如果你在安装依赖的时候使用了 npm 的安装方法，推荐一直坚持使用它，yarn 亦然。由于 Vue 推荐使用 yarn，我们就只使用 yarn 来操作。

```
yarn add wwz-ui
```

### 引入 JS

打开我们刚刚初始化完成的项目的 src 目录 下面的 `main.js`，把里面的内容替换成如下代码：

```
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

### 引入 HTML

打开 public 目录下的 `index.html`， 在 id 为 app 的 div 里添加以下代码

```
<z-button icon="like" icon-position="left">点赞!</z-button>
<z-button-group>
  <z-button icon="left" icon-position="left">上一页</z-button>
  <z-button icon-position="left">按钮组</z-button>
  <z-button icon-position="left">按钮组</z-button>
  <z-button icon="right" icon-position="right">下一页</z-button>
</z-button-group>
<z-button-select :list="lists"></z-button-select>
```


 如果出现了  "You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. "
这样的报错信息，你只需在项目的根目录创建一个 文件名为 「vue.config.js」,里面的内容为：

```
module.exports = {
    runtimeCompiler: true
}
```

如果想了解具体的原因，请看这个 [Issue](https://github.com/vuejs/vue-cli/issues/1875)

### 运行

此时，在命令行运行 
```
yarn serve 
```

好了，是否看到一个带点赞 icon 的按钮了呢？如果看到，恭喜你，已经成功了！

有任何问题，欢迎提 issue 或者给我发邮件：mysteryven@gmail.com











