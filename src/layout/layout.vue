<template>
    <div class="z-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ZLayout',
        data() {
            return {
                layoutClass: {
                    zHasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach(vm => {
                if (vm.$options.name === 'ZSider') {
                    this.layoutClass.zHasSider = true
                }
            })
        }
    }
</script>
<style scoped lang="scss">
    .z-layout {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.zHasSider {
            flex-direction: row;
        }
    }

</style>