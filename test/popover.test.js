const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('可以接受四个位置', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-popover position="bottom" ref="a">
              <template slot="content">
              弹出内容
              </template>
              <button>点我</button>
            </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {content} = vm.$refs.a.$refs
            expect(content.classList.contains('position-bottom')).to.be.eq(true)
            done()
        })
    })

})