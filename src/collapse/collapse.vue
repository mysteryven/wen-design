<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "z-collapse",
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
            selected: {
                type: Array
            }
        },
        provide() {
           return {
               eventBus: this.eventBus
           }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:add', (name) => {
                let selected = JSON.parse(JSON.stringify(this.selected))
                if (selected.indexOf(name) === -1) {
                    selected.push(name)
                    this.$emit('update:selected', selected)
                }
            })
            this.eventBus.$on('update:remove', (name) => {
                let selected = JSON.parse(JSON.stringify(this.selected))
                let index = selected.indexOf(name)
                if (index !== -1) {
                    selected.splice(index, 1)
                    this.$emit('update:selected', selected)
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #ebeef5;
</style>