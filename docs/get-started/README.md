# 快速上手

## 在线演示 

这是最简单的方法，可以让你快速看到结果

<iframe src="https://codesandbox.io/embed/8xo4m5ywq2?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


## 在本地使用  

### 1. 初始化一个 Vue 项目

本 UI 库是依赖于 Vue 实现的，需要配合 vue-cli3 来使用。首先，我们需要切换到安全目录，运行：

```vue
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
vi src/App.vue  
```

替换成下面的代码。

```vue
<template>
  <div id="app">
    <z-button>Hello World</z-button>
  </div>
</template>

<script>
import 'wwz-ui/dist/zui.css'
import {Button} from 'wwz-ui'

export default {
  name: 'app',
  components: {
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

观察页面，是否多了一个内部文字是 「Hello World」 的按钮呢？如果是，恭喜你，成功啦！


