<template>
    <div class="sider">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'zSider'
    }
</script>
<style scoped lang="scss">
    .sider {
        flex-grow: 1;
    }
</style>