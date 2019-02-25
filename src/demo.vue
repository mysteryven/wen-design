<template>
    <div id="app">
        <button @click="xx = !xx">switch</button>
        {{currentItem}}
       <z-button-select v-if="xx" :lists="lists" :current.sync="currentItem"></z-button-select>
    </div>
</template>
<script>
    import ZButtonSelect from './button/button-select'

    export default {
        name: 'demo',
        components: {ZButtonSelect},
        data() {
            return {
                xx: true,
                lists: [
                    '苹果',
                    '梨子',
                    '橘子'
                ],
                currentItem: '苹果'
            }
        },
        mounted() {

        },
        methods: {
        },
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
