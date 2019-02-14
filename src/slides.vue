<template>
    <div class="z-slides-window">
        <div class="z-slides-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ZSlides",
        props: {
            selected: {
                type: String,
            }
        },
        mounted() {
            this.updateChildren()

        },
        updated() {
            this.updateChildren()
        },
        methods: {
            getSlidesItem() {
                return this.$children.filter(item => item.$options.name === 'ZSlidesItem')
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
    .z-slides-window {
        width: 300px;
        overflow: hidden;
        border: 1px solid black;
        .z-slides-wrapper {
            display: flex;
            position: relative;
        }
    }
</style>