<template>
    <div class="z-content">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ZContent'
    }
</script>
<style scoped lang="scss">
   .z-content {
       flex-grow: 1;
   }
</style>