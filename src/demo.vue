<template>
    <div id="app">
        <z-cascader :options="source" :selected.sync="selected"
                    :loadData="loadData" :source.sync="source">
            <div class="selected">{{selectedString}}</div>
        </z-cascader>
    </div>
</template>
<script>
    import Cascader from './cascader'
    import Button from './button'
    import db from './db.js'

    function ajax(parent_id = 0) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let result = db.filter((item)=>{
                    return item.parent_id === parent_id
                })
                result.forEach(node => {
                    if (db.filter(item => item.parent_id === node.id).length > 0) {
                        node.isLeaf = false
                    }else{
                        node.isLeaf = true
                    }
                })
                resolve(result)
            }, 1000)
        })
    }

    export default {
        name: 'demo',
        components: {
            'z-cascader': Cascader,
            'z-button': Button
        },
        data() {
            return {
                selected: [],
                source: []
            }
        },
        created() {
            ajax(0).then(res => {
                this.source = res
            })
        },
        computed: {
            selectedString() {
                return this.selected.map((item) => item.name).join('/')
            }
        },
        methods: {
            loadData(node, updateSource) {
                let {id} = node

                ajax(id).then(res => {
                    updateSource(res)
                })
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
