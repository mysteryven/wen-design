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
import spies from 'chai-spies'
chai.use(spies)

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
    button.$mount('')

    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')

    button.$el.remove()
    button.$destroy()
}

{
    let Contructor = Vue.extend(Button)
    let button = new Contructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')

    button.$el.remove()
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)

    let Contructor = Vue.extend(Button)
    let button = new Contructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'left'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)

    let Contructor = Vue.extend(Button)
    let button = new Contructor({
        propsData: {
            icon: 'setting',
        }
    })
    button.$mount(div)

    let spy = chai.spy(function() {
        console.log('hi')
    })

    button.$on('click', spy)
    button.$el.click()
    expect(spy).to.have.been.called()

}

