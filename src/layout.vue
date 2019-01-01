<template>
    <div class="z-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'zLayout',
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach(vm => {
                if (vm.$options.name === 'zSider') {
                   this.layoutClass.hasSider = true
                    return
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
       &.hasSider {
           flex-direction: row;
       }
   }

</style>