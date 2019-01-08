import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import ButtonSelect from './button-select'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'



import plugin from './plugin'

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

Vue.use(plugin)

let app = new Vue({
    el: '#app',
    data: {
        message: 'hihih',
        loading: false,
        disabled: true,
        selectList: ['苹果', '香蕉', '橘子'],
        num: 0
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


