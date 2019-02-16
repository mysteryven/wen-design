const expect = chai.expect
import Vue from 'vue'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在Col.', () => {
        expect(Col).to.be.ok
    })
    it('可以设置span.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 4
            }
        }).$mount(div)

        const useElement = vm.$el
        expect(useElement.classList.contains('col-4')).to.eq(true)
    })
    it('可以设置offset.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 4
            }
        }).$mount(div)

        const useElement = vm.$el
        expect(useElement.classList.contains('col-offset-4')).to.eq(true)
    })
    it('可以设置ipad的尺寸.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {
                    span: 2,
                    offset: 2
                }
            }
        }).$mount(div)

        const useElement = vm.$el
        expect(useElement.classList.contains('col-ipad-2')).to.eq(true)
        expect(useElement.classList.contains('col-ipad-offset-2')).to.eq(true)
    })
    it('可以设置pc的尺寸.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {
                    span: 2,
                    offset: 2
                }
            }
        }).$mount(div)

        const useElement = vm.$el
        expect(useElement.classList.contains('col-pc-2')).to.eq(true)
        expect(useElement.classList.contains('col-pc-offset-2')).to.eq(true)
    })


})