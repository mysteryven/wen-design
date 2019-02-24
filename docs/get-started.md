# 快速上手

## 在线演示 

这是最简单的方法，可以让你快速看到结果


## 在本地使用  

### 1. 初始化一个 Vue 项目

本 UI 库是依赖于 Vue 实现的，需要配合 vue-cli3 来使用。首先，我们需要切换到安全目录，运行：

```bash
npm install -g @vue/cli
npm install -g @vue/cli-service-global
vue create hello-world
cd hello-word
```

### 2. 安装本 UI 库的 npm 包

```text
yarn add wwz-ui
```

### 3. 在页面引入 ZUI

打开项目根路径下的 src 文件夹的 App.vue。

```
    vi src/App.vue # 或者 open src/App.vue 
```

替换成下面的代码。

```vue
<template>
  <div id="app">
    <z-button>你好！</z-button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import 'wwz-ui/dist/zui.css'

import HelloWorld from './components/HelloWorld.vue'

import {Button} from 'wwz-ui'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ZButton: Button
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

### 4. 运行

```bash
yarn serve
```

观察页面，是否多了一个内部文字是 「你好」 的按钮呢？如果是，恭喜你，成功啦！


