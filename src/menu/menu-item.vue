<template>
    <div class="z-menu-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ZMenuItem",
        props: {
            name: {
                type: String,
                required: true
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
        &:hover {
            color: $text-hover-color;
        }
    }
</style>