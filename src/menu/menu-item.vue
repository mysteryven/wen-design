<template>
    <div class="z-menu-item" @click="updateSelected" :class="{active: selected}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ZMenuItem",
        inject: ['root'],
        data() {
            return {
                selected: false
            }
        },
        props: {
            name: {
                type: String,
                required: true
            }
        },
        methods: {
            updateSelected() {
                this.$emit('click')
                this.root.selectedPath = []
                this.$parent.updateSelectedPath && this.$parent.updateSelectedPath()
                this.root.selectedPath.push(this.name)
                this.root.updateSelected(this.name)
            }
        },
    }
</script>

<style scoped lang="scss">
    @import 'var';

    .z-menu-item {
        padding: 8px 12px;
        display: inline-flex;
        white-space: nowrap;
        color: $text-color;
        &:hover {
            color: $text-hover-color;
        }
        &.active {
            color: $text-hover-color;
        }
    }
</style>