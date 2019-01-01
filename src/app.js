import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import ButtonSelect from './button-select'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-button-select', ButtonSelect)
Vue.component('z-input', Input)
Vue.component(('z-row'), Row)
Vue.component(('z-col'), Col)

let app = new Vue({
    el: '#app',
    data: {
        message: 'hihih',
        loading: false,
        disabled: true,
        selectList: ['苹果', '香蕉', '橘子']
    }
})


