import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Menu from '../../src/menu/menu'
import MenuItem from '../../src/menu/menu-item'
import SubMenu from '../../src/menu/sub-menu'
import Vue from 'vue'

chai.use(sinonChai)

describe('Menu.vue', () => {
    it('存在.', () => {
        expect(Menu).to.exist
    })

    it('支持 selected 属性', () => {
        Vue.component('z-sub-menu', SubMenu)
        Vue.component('z-menu-item', MenuItem)

        const wrapper = mount(Menu, {
            propsData: {
                selected: 'opera'
            },
            slots: {
                default: `
                    <z-menu-item name="draw" >绘画</z-menu-item>
                    <z-menu-item name="opera" data-name="opera">歌剧</z-menu-item> 
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('[data-name="opera"].active').exists()).to.be.true

        })
    })
    it('可以触发 update:selected 事件', () => {
        Vue.component('z-sub-menu', SubMenu)
        Vue.component('z-menu-item', MenuItem)

        const callback = sinon.fake()
        const wrapper = mount(Menu, {
            propsData: {
                selected: 'opera'
            },
            slots: {
                default: `
            <z-menu-item name="draw" data-name="draw">绘画</z-menu-item>
            <z-menu-item name="opera">歌剧</z-menu-item>
            <z-sub-menu name="sub1">
                <template slot="title">
                    音乐
                </template>
                <z-menu-item name="rock">摇滚</z-menu-item>
            </z-sub-menu>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })

        wrapper.find('[data-name="draw"]').trigger('click')
        setTimeout(() => {
            expect(callback).to.have.been.calledWith('draw')
        })
    })

    it('可以设置为 vertical 状态', () => {
        Vue.component('z-sub-menu', SubMenu)
        Vue.component('z-menu-item', MenuItem)

        const wrapper = mount(Menu, {
            propsData: {
                vertical: true
            },
            slots: {
                default: `
                  <z-menu-item name="draw" data-name="draw">绘画</z-menu-item>
            <z-menu-item name="opera">歌剧</z-menu-item>
            <z-sub-menu name="sub1">
                <template slot="title">
                    音乐
                </template>
                <z-menu-item name="rock">摇滚</z-menu-item>
            </z-sub-menu>  
                `
            }
        })
        setTimeout(()=> {
            expect(wrapper.find('.z-menu-vertical').exists()).to.be.true
            expect(wrapper.find('.z-sub-menu-vertical').exists()).to.be.true
        })
    })

})