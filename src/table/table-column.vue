<template>
    <div>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            field: {
                type: String,
                required: true
            },
            width: {
                type: Number,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>