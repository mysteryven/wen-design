<template>

    <svg class="z-icon" aria-hidden="true" @click="$emit('click')">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        props: ['name']
    }
</script>
<style lang="scss" scoped>
    .z-icon {
        width: 1em;
        height: 1em;
    }
</style>