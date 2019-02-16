<template>
    <div class="z-menu">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "zMenu"
    }
</script>

<style scoped lang="scss">
    @import 'var';
    .z-menu {
        display: flex;
        font-size: $font-size;
    }
</style>