import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import ButtonSelect from './button-select'
import Input from './input'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-button-select', ButtonSelect)
Vue.component('z-input', Input)

let app = new Vue({
    el: '#app',
    data: {
        message: 'hihih',
        loading: false,
        disabled: true,
        selectList: ['苹果', '香蕉', '橘子']
    }
})


