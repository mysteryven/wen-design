<template>
    <div class="z-carousel-window">
        <div class="z-carousel-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ZCarousel",
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
                default: 500
            }
        },
        mounted() {
            this.updateChildren()
        },

        updated() {
            this.updateChildren()
        },
        methods: {
            playAutomatic() {

            },
            getSlidesItem() {
                return this.$children.filter(item => item.$options.name === 'ZCarouselItem')
            },
            updateChildren() {
                let items = this.getSlidesItem()
                items.forEach(vm => {
                    vm.selected = this.selected
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .z-carousel-window {
        width: 300px;
        overflow: hidden;
        border: 1px solid black;
        .z-carousel-wrapper {
            display: flex;
            position: relative;
        }
    }
</style>