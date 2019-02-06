<template>
    <div id="app">
        <z-cascader :options="source" :selected.sync="selected">
            <div class="selected">{{selectedString}}</div>
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
                selected: [],
                source: [
                    {
                        name: '山东',
                        children: [
                            {name: '莱芜', children: [{name: '莱芜区'}, {name: '莱城区'}]},
                            {name: '济南', children: [{name: '历下区'}, {name: '历城区'}]},
                            {name: '潍坊', children: [{name: '潍城区'}, {name: '寒亭区'}]}
                        ]
                    },
                    {
                        name: '福建',
                        children: [
                            {
                                name: '泉州', children: [{name: '鲤城区'}, {name: '丰泽区'},
                                    {name: '洛江区'}, {name: '泉港区'}]
                            },
                            {
                                name: '厦门', children: [
                                    {name: '集美区'}, {name: '海沧区'}, {name: '湖里区'}]
                            },
                            {
                                name: '漳州', children: [
                                    {name: '芗城区'}, {name: '龙文区'}
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
            selectedString() {
                return this.selected.map((item) => item.name).join('/')
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
    .selected {
        border: 1px solid #eee;
        min-width: 200px;
        height: 30px;
    }
</style>
