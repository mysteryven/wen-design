<template>
    <div id="app">
        <z-pager :total="20" :current.sync="current"></z-pager>
    </div>
</template>
<script>
    import zPager from './pager'

    export default {
        name: 'demo',
        components: {zPager},
        data() {
            return {
                current: 1
            }
        },
        mounted() {

        },
        methods: {

        }

    }
</script>
<style lang="scss">

</style>
