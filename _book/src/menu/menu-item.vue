<template>
    <div class="z-menu-item" @click="onClick" :class="{active}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ZMenuItem",
        inject: ['root'],

        props: {
            name: {
                type: String,
                required: true
            }
        },
        computed: {
           active() {
               return this.root.selectedItem === this.name
           }
        },
        methods: {
            onClick() {
                this.$emit('click')
                this.updateSelected()
            },
            updateSelected() {
                this.root.selectedPath = []
                this.$parent.updateSelectedPath && this.$parent.updateSelectedPath()
                this.root.selectedPath.push(this.name)
                this.root.updateSelected(this.name)
            }
        },
        watch: {
            active(newValue) {
                if (newValue) {
                    this.updateSelected()
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'var';

    .z-menu-item {
        padding: 8px 12px;
        display: inline-flex;
        white-space: nowrap;
        color: $text-color;
        cursor: pointer;
        user-select: none;
        &:hover {
            color: $text-hover-color;
            background-color: $button-bg-hover-light ;

        }
        &.active {
            color: $text-hover-color;
        }
    }
</style>