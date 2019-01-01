const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('可以设置gutter.', (done) => {
        Vue.component('z-row', Row)
        Vue.component('z-col', Col)
        const div = document.createElement('div')
        div.innerHTML = `
            <z-row class="row" gutter="10">
                <z-col class="col" span="12">
                <div class="content"></div>
</z-col>
                <z-col class="col" span="12">
                <div class="content"></div>
                
</z-col>
            </z-row>   
        `
        document.body.appendChild(div)

        const vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            expect(getComputedStyle(vm.$el.querySelector('.row')).marginLeft).to.be.eq('-5px')
            expect(getComputedStyle(vm.$el.querySelector('.row')).marginRight).to.be.eq('-5px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.be.eq('5px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.be.eq('5px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })


    })

})