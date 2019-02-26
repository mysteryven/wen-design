<template>
    <div class="z-sider">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ZSider'
    }
</script>
<style scoped lang="scss">
    .z-sider {
        flex-grow: 1;
    }
</style>