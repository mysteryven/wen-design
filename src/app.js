import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import ButtonSelect from './button-select'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-button-select', ButtonSelect)

let app = new Vue({
    el: '#app',
    data: {
        loading: false,
        disabled: true,
        selectList: ['苹果', '香蕉', '橘子']
    }
})

import chai from 'chai'
const expect = chai.expect

// 单元测试
{
    let Contructor = Vue.extend(Button)
    let button = new Contructor({
        propsData: {
            icon: 'setting',
        }
    })
    const node = button.$createElement('span', ['Hello']);
    button.$slots.default = [node]
    button.$mount('#test')

    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
}