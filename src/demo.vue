<template>
    <div id="app">


    </div>
</template>
<script>
    import ZButton from './button/button'
    import ZSticky from './sticky'

    export default {
        name: 'demo',
        components: {ZSticky, ZButton},
        data() {
            return {
                xx: false
            }
        },
        mounted() {

        },
        methods: {},
    }
</script>
<style lang="scss">
    #app {
        margin-left: 100px;
    }

    .sticky {
        position: fixed;
    }
</style>
