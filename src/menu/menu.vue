<template>
    <div class="z-menu">
        <slot></slot>
        {{selectedPath}}
    </div>
</template>

<script>
    export default {
        name: "zMenu",
        data() {
            return {
                selectedPath: []
            }
        },
        props: {
            selected: {
                type: String
            }
        },
        provide() {
            return {
                root: this
            }
        },
        mounted() {
            this.listenToChildren()
        },
        updated() {
            this.listenToChildren()
        },
        methods: {
            listenToChildren() {
                this.$children.forEach(vm => {
                    console.log(vm.name)
                    if (vm.name === this.selected) {
                        vm.selected = true
                    } else {
                        vm.selected = false
                    }
                    console.log(vm.selected)
                })
            },
            updateSelected(name) {
                this.$emit('update:selected', name)
                console.log(name)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'var';

    .z-menu {
        display: flex;
        font-size: $font-size;
    }
</style>