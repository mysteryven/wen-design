<template>
    <div id="app">
        <z-cascader :options="source">
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
        },
        data() {
            return {
                source: [
                    {
                        name: '山东',
                        children: [
                            {name: '莱芜'},
                            {name: '济南'},
                            {name: '潍坊'}
                        ]
                    },
                    {
                        name: '福建',
                        children: [
                            {name: '泉州'},
                            {name: '厦门'},
                            {name: '漳州'}]
                    }
                ]
            }
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
