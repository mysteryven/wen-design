import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Carousel from '@/carousel/carousel.vue'
import CarouselItem from '@/carousel/carousel-item.vue'
import sinon from 'sinon'
import Vue from 'vue'

describe('Carousel', () => {
    it('存在.', () => {
        expect(Carousel).to.be.ok
    })

    it('接受 GuluSlidesItem，默认展示第一个', (done) => {
        Vue.component('ZCarouselItem', CarouselItem)
        const wrapper = mount(Carousel, {
            propsData: {
                autoPlay: false
            },
            slots: {
                default: `
          <z-carousel-item name="1">
            <div class="box1">1</div>
          </z-carousel-item>
          <z-carousel-item name="2">
            <div class="box2">2</div>
          </z-carousel-item>
          <z-carousel-item name="3">
            <div class="box3">3</div>
          </z-carousel-item>
        `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box1').exists()).to.be.true
            done()
        })
    })
    it('selected 是几，就展示第几个', (done) => {
        Vue.component('ZCarouselItem', CarouselItem)
        const wrapper = mount(Carousel, {
            propsData: {
                autoPlay: false,
                selected: '2'
            },
            slots: {
                default: `
          <z-carousel-item name="1">
            <div class="box1">1</div>
          </z-carousel-item>
          <z-carousel-item name="2">
            <div class="box2">2</div>
          </z-carousel-item>
          <z-carousel-item name="3">
            <div class="box3">3</div>
          </z-carousel-item>
        `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box2').exists()).to.be.true
            done()
        })
    })
    it('可以自动播放, 并支持自定义间隔', (done) => {
        Vue.component('ZCarouselItem', CarouselItem)
        const callback = sinon.fake();
        const wrapper = mount(Carousel, {
            propsData: {
                autoPlay: true,
                interval: 20
            },
            slots: {
                default: `
          <z-carousel-item name="1">
            <div class="box1">1</div>
          </z-carousel-item>
          <z-carousel-item name="2">
            <div class="box2">2</div>
          </z-carousel-item>
          <z-carousel-item name="3">
            <div class="box3">3</div>
          </z-carousel-item>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            expect(callback).to.have.been.calledWith('2')
            done()
        }, 21)
    })

    it('可以点击上一页', (done) => {
        Vue.component('ZCarouselItem', CarouselItem)
        const callback = sinon.fake();
        const wrapper = mount(Carousel, {
            propsData: {
                selected: '2',
                arrowVisible: true
            },
            slots: {
                default: `
          <z-carousel-item name="1">
            <div class="box1">1</div>
          </z-carousel-item>
          <z-carousel-item name="2">
            <div class="box2">2</div>
          </z-carousel-item>
          <z-carousel-item name="3">
            <div class="box3">3</div>
          </z-carousel-item>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })

        wrapper.find('.left-arrow').trigger('click')

        setTimeout(() => {
            expect(wrapper.find('.box1').exists()).to.be.true
            done()
        })
    })
    it('可以点击下一页', (done) => {
        Vue.component('ZCarouselItem', CarouselItem)
        const callback = sinon.fake();
        const wrapper = mount(Carousel, {
            propsData: {
                selected: '2',
                arrowVisible: true
            },
            slots: {
                default: `
          <z-carousel-item name="1">
            <div class="box1">1</div>
          </z-carousel-item>
          <z-carousel-item name="2">
            <div class="box2">2</div>
          </z-carousel-item>
          <z-carousel-item name="3">
            <div class="box3">3</div>
          </z-carousel-item>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })

        wrapper.find('.right-arrow').trigger('click')

        setTimeout(() => {
            expect(wrapper.find('.box3').exists()).to.be.true
            done()
        })
    })
})
