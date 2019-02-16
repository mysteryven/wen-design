<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name: "z-tabs-head",
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                if (vm) {
                    let {width} = vm.$el.getBoundingClientRect()
                    let left = vm.$el.offsetLeft
                    this.$refs.line.style.width = `${width}px`
                    this.$refs.line.style.left = `${left}px`
                }

            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-head {
        display: flex;
        position: relative;
        padding-bottom: 0.5em;
        border-bottom: 1px solid #ddd;
    }
    .line {
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid blue;
        transition: all 350ms;
    }
</style>