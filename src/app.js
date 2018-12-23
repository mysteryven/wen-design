import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)

let app = new Vue({
    el: '#app'
})