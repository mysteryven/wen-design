<template>
    <div class="z-carousel"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd"
    >
        <div class="z-carousel-window">
            <div class="z-carousel-wrapper" ref="carouselItemWrapper">
                <slot></slot>
            </div>
        </div>
        <div class="dots" v-if="dotsVisible">
            <span v-for="n in childrenLength" class="dot"
                  :class="selectedIndex+1 === n ? 'active': ''"
                  @click="skip(n-1)"
            ></span>
        </div>
        <template v-if="arrowVisible">
            <z-icon name="left" class="right-arrow icon" @click="prev"></z-icon>
            <z-icon name="right" class="left-arrow icon" @click="next"></z-icon>
        </template>
    </div>
</template>

<script>
    import ZIcon from '../icon'

    export default {
        name: "ZCarousel",
        components: {ZIcon},
        data() {
            return {
                childrenLength: 0,
                transitionEnd: true,
                timerId: undefined,
                startX: undefined,
                startY: undefined
            }
        },
        props: {
            selected: {
                type: String,
            },
            autoPlay: {
                type: Boolean,
                default: false
            },
            interval: {
                type: Number,
                default: 3000
            },
            arrowVisible: {
                type: Boolean,
                default: false
            },
            dotsVisible: {
                type: Boolean,
                default: true
            }

        },
        mounted() {
            setTimeout(() => {
                this.$refs.carouselItemWrapper.classList.add('z-item-not-first-in')
            }, 0)

            this.updateChildren()
            this.playAutomatic()
            this.childrenLength = this.names.length
        },
        computed: {
            names() {
                return this.getItems().map(vm => vm.name)
            },
            selectedIndex() {
                let index = this.names.findIndex((item) => item === this.selected)
                return index !== -1 ? index : 0
            },
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            limitClick() {
                if (!this.transitionEnd) {
                    return false
                }
                this.transitionEnd = false
                setTimeout(()=>{
                    this.transitionEnd = true
                }, 1000)
                return true
            },
            next() {
                if (!this.limitClick()) {
                    return
                }
                this.updateSelected(this.selectedIndex + 1, {open: true, value: false})
            },
            prev() {
                if (!this.limitClick()) {
                    return
                }
                this.updateSelected(this.selectedIndex - 1, {open: true, value: true})
            },
            onTouchStart(e) {
                this.startX = e.touches[0].clientX
                this.startY = e.touches[0].clientY
                this.pause()
            },
            onTouchEnd(e) {
                let endX = e.changedTouches[0].clientX
                let endY = e.changedTouches[0].clientY
                if (Math.abs(endY - this.startY) / Math.abs(endX - this.startX) > 1 / 2) {
                    return
                }
                if (this.startX > endX) {
                    this.next()
                } else {
                    this.prev()
                }
            },
            onMouseEnter() {
                this.pause()
            },
            onMouseLeave() {
                this.playAutomatic()
            },
            skip(n) {
                if (!this.limitClick()) {
                    return
                }
                if (n === 0 && this.selectedIndex === this.childrenLength - 1) {
                    this.updateSelected(n, {open: true, value: true})
                } else {
                    this.updateSelected(n)
                }
            },
            pause() {
                window.clearTimeout(this.timerId)
                this.timerId = undefined
            },
            playAutomatic() {
                if (!this.autoPlay) {
                    return
                }
                let run = () => {
                    this.updateSelected(this.selectedIndex + 1)
                    this.timerId = setTimeout(() => {
                        run()
                    }, this.interval)
                }

                this.timerId = setTimeout(() => {
                    run()
                }, this.interval)
            },
            updateSelected(newSelectedIndex, forceReverse = {open: false, value: true}) {
                let maxLength = this.names.length
                if (newSelectedIndex < 0) {
                    newSelectedIndex = maxLength - 1
                } else if (newSelectedIndex >= maxLength) {
                    newSelectedIndex = 0
                }

                let name = this.names[newSelectedIndex]
                let lastIndex = this.selectedIndex

                let reverse = false

                if (lastIndex > newSelectedIndex && lastIndex !== maxLength-1) {
                    reverse = true
                }

                if (lastIndex === maxLength -1 && newSelectedIndex === lastIndex -1) {
                    reverse = true
                }

                if (forceReverse.open) {
                    reverse = forceReverse.value
                }

                let items = this.getItems()
                items.forEach(item => {
                    item.reverse = reverse
                })

                this.$nextTick(() => {
                    this.$emit('update:selected', name)
                })


            },
            getItems() {
                return this.$children.filter(item => item.$options.name === 'ZCarouselItem')
            },
            updateChildren() {
                let items = this.getItems()
                items.forEach(vm => {
                    vm.selected = this.selected
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";

    .z-carousel {
        position: relative;
        width: 100%;
        height: 100%;

        &-window {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border: 1px solid black;

            .z-carousel-wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                position: relative;
            }
        }

        .dots {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            margin-top: -16px;
            z-index: 1;

            .dot {
                display: inline-block;
                background-color: $button-bg-dark;
                margin-left: 4px;
                margin-right: 4px;
                width: 20px;
                height: 4px;
                box-sizing: border-box;
                border-radius: 4px;
                cursor: pointer;

                &.active {
                    background-color: $button-active-bg;
                }

                &:hover {
                    background-color: $button-bg-hover;
                }
            }
        }

        .icon {
            fill: $button-bg-hover;
            width: 16px;
            height: 16px;
            cursor: pointer;
            align-self: center;
            position: absolute;
            transform: translateY(25%);

            &.left-arrow {
                top: 50%;
                right: 1em;
            }

            &.right-arrow {
                top: 50%;
                left: 1em;
            }
        }

    }

</style>