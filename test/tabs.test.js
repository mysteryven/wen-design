const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })

    it('可以设置selected', (done) => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
         <z-tabs selected="finance">
            <z-tabs-head>
                <z-tabs-item name="finance" data-name="finance"> 金融</z-tabs-item>
                <z-tabs-item class="sports" name="sports">体育界</z-tabs-item>
            </z-tabs-head>
            <z-tabs-body>
                <z-tabs-pane name="finance">内容1</z-tabs-pane>
                <z-tabs-pane name="sports">内容2</z-tabs-pane>
            </z-tabs-body>
        </z-tabs>
        `
        let vm = new Vue({
            el: div
        })

        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.eq(true)
            done()
        })

})

})