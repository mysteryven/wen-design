const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs/tabs-item'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

    it('存在.', () => {
        expect(TabsItem).to.exist
    })

    it('接受 name 属性', () => {

        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx',
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
        vm.$destroy()
    })
    it('接受自定义active 类', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                activeClass: 'custom',
            }
        }).$mount()
        console.log(vm.$el)
        expect(vm.$el.getAttribute('data-active')).to.eq('custom')
        vm.$destroy()

    })
})