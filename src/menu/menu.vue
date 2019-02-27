<template>
    <div class="z-menu-wrapper">
        <div class="z-menu" :class="{'z-menu-vertical': vertical}">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "zMenu",
        data() {
            return {
                selectedPath: [],
                selectedItem: ''
            }
        },
        props: {
            selected: {
                type: String
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        provide() {
            return {
                root: this
            }
        },
        computed: {
        },
        mounted() {
            this.listenToChildren()

        },
        updated() {
            this.listenToChildren()
        },
        methods: {
            listenToChildren() {
                this.selectedItem = this.selected
                this.$children.forEach(vm => {
                    if (vm.name === this.selected) {
                        vm.selected = true
                    } else {
                        vm.selected = false
                    }
                })
            },
            updateSelected(name) {
                this.$emit('update:selected', name)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'var';

    .z-menu {
        display: flex;
        font-size: $font-size;
        &.z-menu-vertical {
            display: inline-flex;
            flex-direction: column;
        }
    }
</style>