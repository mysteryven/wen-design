<template>

    <div class="sticky-wrapper" ref="stickyWrapper" :style="{height, width}">
        <div  :class="{sticky}" :style="{top, left}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ZSticky',
        data() {
            return {
                sticky: false,
                distanceToTop: 0,
                left: undefined,
                top: undefined,
                height: undefined,
                width: undefined,
                listenToScroll: null
            }
        },
        props: {
            distance: {
                type: Number,
                default: 0
            }
        },
        mounted() {
            let stickyWrapper = this.$refs.stickyWrapper
            this.distanceToTop = stickyWrapper.getBoundingClientRect().top + window.scrollY
            this.listenToScroll = this._listenToScroll.bind(this)
            document.addEventListener('scroll', this.listenToScroll)
        },
        beforeDestroy() {
            document.removeEventListener('scroll', this.listenToScroll)
        },
        methods: {
            _listenToScroll() {
                if (window.scrollY === 0) { // 回到页面顶部的时候都还原
                   this.initSticky()
                } else if (this.distanceToTop - (window.scrollY + this.distance) < 0) {
                   this.beSticky()
                } else {
                    this.initSticky()
                }
            },
            initSticky() {
                this.sticky = false
                this.left = undefined
                this.top = undefined
                this.height = undefined
                this.width = undefined
            },
            beSticky() {
                this.sticky = true
                let {left, height, width} = this.$refs.stickyWrapper.getBoundingClientRect()
                this.top = this.distance + 'px'
                this.left = left + 'px'
                this.height = height + 'px'
                this.width = width + 'px'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sticky {
        position: fixed;
    }
</style>