<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "z-tabs",
        props: {
            selected: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (selected)=> {
                this.$emit('update:selected', selected)
            })
            this.$children.forEach(vm => {
                if (vm.$options.name = 'z-tabs-head') {
                   vm.$children.forEach(childVm => {
                       if (childVm.$options.name === 'z-tabs-item' && childVm.name === this.selected) {
                           this.eventBus.$emit('update:selected', this.selected, childVm)
                       }
                   })
                }
            })
        }

    }
</script>

<style scoped lang="scss">
   .tabs {
       display: flex;
       flex-direction: column;
   }
</style>