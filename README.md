# ui-wheels

[![Build Status](https://travis-ci.org/mysteryven/ui-wheels.svg?branch=master)](https://travis-ci.org/mysteryven/ui-wheels)
[![npm](https://img.shields.io/badge/license-MIT-green.svg)](https://www.npmjs.com/package/wwz-ui)

## 提示

目前还处于开发的初级阶段，你可以通过看我的 commit 记录来看我的思路

## 介绍

这是个基于 Vue 的 UI 库，融合了主流 UI 框架的设计元素，但是请你注意，使用前要声明：

```css
 * {
    box-sizing: border-box；
 }
```

## 开始使用

**1. 安装**

```
npm install -s wwz-ui
```

**2. 添加通用样式**

你可以根据下面的样式来自定义组件的大小

```css
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --border-color: #999;
    --button-active-bg: #eee;
    --button-border-radius: 4px;
    --color: #333;
    --border-color-hover: #666;
    --button-disable-bg: #d8d8d8;
    --button-disable-color: #aaaaaa;
}
```

**3. 引入 CSS 和 JS**

```
   import Vue from 'vue'
   import {Button, ButtonSelect, ButtonGroup, Icon} from 'wwz-ui'
   import 'wwz-ui/dist/index.css'

   new Vue({
    el: '#app',
    data: {
        list: [a, b, c]
    }
    components: {
        'z-button': Button
        'z-button-group': ButtonGroup,
        'z-button-select': ButtonSelect
    }
   })
```

**4. 在页面使用**

```html
 <z-button icon="setting" icon-position="left">设置</z-button>

 <z-button-group>
    <z-button icon="left" icon-position="left">上一页</z-button>
    <z-button>内容</button>
    <z-button icon="right" icon-position="right">下一页</z-button>
 </z-button-group>

 <z-button-select v-for="list">
 </z-button-select>
```
