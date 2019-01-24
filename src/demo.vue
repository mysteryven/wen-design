<template>
    <div id="app">
        <z-cascader>
            <z-button>选择</z-button>
        </z-cascader>
    </div>
</template>

<script>
    import Cascader from './cascader'
    import Button from './button'
    export default {
        name: 'demo',
        components: {
            'z-cascader': Cascader,
            'z-button': Button
        }
    }
</script>




<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
