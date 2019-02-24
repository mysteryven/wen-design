<template>
    <div v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "z-tabs-pane",
        inject: ['eventBus'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                active: false
            }
        },
        created() {
            this.eventBus.$on('update:selected', (item) => {
                this.active = (this.name === item)
            })
        },
    }
</script>

<style scoped lang="scss">

</style>