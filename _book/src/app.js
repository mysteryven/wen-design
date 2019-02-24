import Vue from 'vue'
import Button from './button/button'
import Icon from './icon'
import ButtonGroup from './button/button-group'
import ButtonSelect from './button/button-select'
import Input from './input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Sider from './layout/sider'
import Footer from './layout/footer'
import Toast from './toast'
import Tabs from './tabs/tabs.vue'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import plugin from './plugin'
import Popover from './popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-button-select', ButtonSelect)
Vue.component('z-input', Input)
Vue.component('z-row', Row)
Vue.component('z-col', Col)
Vue.component('z-layout', Layout)
Vue.component('z-header', Header)
Vue.component('z-content', Content)
Vue.component('z-sider', Sider)
Vue.component('z-footer', Footer)
Vue.component('z-toast', Toast)
Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)
Vue.component('z-popover', Popover)
Vue.component('z-collapse', Collapse)
Vue.component('z-collapse-item', CollapseItem)

Vue.use(plugin)

let app = new Vue({
    el: '#app',
    data: {
        message: 'hihih',
        loading: false,
        disabled: true,
        selectList: ['苹果', '香蕉', '橘子'],
        num: 0,
        customerClasses: ['test'],
        selectedItems: ['1', '2']
    },
    methods: {
        showToast() {
            this.num++
            this.$toast('谢谢使用！' + this.num, {
                showClose: true,
                position: 'middle',
                autoClose: false,
                duration: 10,
                closeButton: {
                   text: '关闭了吧',
                   callback() {
                       console.log('我点击了关闭按钮，并触发了回调事件')
                   }
                },
                closedCallback() {
                    console.log('关闭之后的回调，关闭后自动执行')
                }
            })
        }

    }
})


