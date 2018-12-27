const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('可以设置placeholder.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                placeholder: 'hi'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('input')
        expect(useElement.getAttribute('placeholder')).to.equal('hi')
        vm.$destroy()
    })
    it('可以设置error.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                error: 'I am error'
            }
        }).$mount(div)
        const useElement = vm.$el.querySelector('span')
        expect(useElement.innerHTML).to.equal('I am error')
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以设置error的位置.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                error: 'I am error',
                errorPosition: 'bottom'
            }
        }).$mount(div)
        const useElement = vm.$el
        expect(getComputedStyle(useElement)['flex-direction']).to.eq('column')
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以设置disabled.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const useElement = vm.$el.querySelector('input')
        expect(useElement.disabled).to.eq(true)
        vm.$destroy()
    })
    it('可以设置readonly.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                readOnly: true
            }
        }).$mount()
        const useElement = vm.$el.querySelector('input')
        expect(useElement.getAttribute('readOnly')).to.eq('true')

        vm.$destroy()
    })
})