const expect = chai.expect
import Vue from 'vue'
import Layout from '../src/layout'
import Header from '../src/header'
import Content from '../src/content'
import Sider from '../src/sider'
import Footer from '../src/footer'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('layout', () => {
    it('存在layout.', () => {
        expect(Layout).to.be.ok
    })
    it('存在Header.', () => {
        expect(Header).to.be.ok
    })
    it('存在Content.', () => {
        expect(Content).to.be.ok
    })
    it('存在Sider.', () => {
        expect(Sider).to.be.ok
    })

    it('当有sider的时候flex-direction为col.', (done) => {
        Vue.component('z-layout', Layout)
        Vue.component('z-header', Header)
        Vue.component('z-content', Content)
        Vue.component('z-sider', Sider)
        Vue.component('z-footer', Footer)
        const div = document.createElement('div')
        div.innerHTML = `
           <z-layout class="layout">
                <z-sider class="sider"></z-sider>
                <z-layout>
                <z-header class="header"></z-header>
                    <z-content class="content"></z-content>
                <z-footer class="footer"></z-footer>
                </z-layout>
            </z-layout>   
        `
        document.body.appendChild(div)

        const vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            expect(getComputedStyle(vm.$el.querySelector('.layout')).flexDirection).to.be.eq('row')
            done()
            vm.$el.remove()
            vm.$destroy()
        })

    })


})