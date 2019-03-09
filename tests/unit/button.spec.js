import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Button from '@/button/button.vue'
import sinon from 'sinon'

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })

    it('可以设置icon.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting'
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#icon-setting')
    })
    it('可以设置iconPosition.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        })
        expect(wrapper.classes()).contain('icon-right')
    })
    it('可以设置loading.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting',
                loading: true
            }
        })
        const vm = wrapper.vm
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    })
    it('可以设置为 disabled.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting',
                disabled: true
            }
        })
        expect(wrapper.classes()).contain('disabled')
    })
    it('可以设置为圆形.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting',
                isCircle: true
            }
        })
        expect(wrapper.classes()).contain('circle')
    })
    it('点击 button 触发 click 事件', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting',
            }
        })
        const vm = wrapper.vm
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    })



})
