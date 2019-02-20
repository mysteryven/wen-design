<template>
    <div id="app" >
        <button @click="xxx = !xxx">111</button>
        <z-table v-if="xxx"  :columns="columns" :data-source="dataSource" striped bordered :selected-items.sync="selected"
        :sort-directions.sync="sortDirections" :height="200"  >
            <template slot-scope="source">
                <button @click="edit(source)">编辑</button>
            </template>
        </z-table>
    </div>
</template>
<script>
    import ZTable from './table'

    export default {
        name: 'demo',
        components: {ZTable},
        data() {
            return {
                xxx: true,
                columns: [
                    {name: '姓名', field: 'name', width: 50},
                    {name: '年龄', field: 'age', width: 80},
                    {name: '住址', field: 'address', width: 80}
                ],
                dataSource: [
                    {id: 1, name: '周杰伦', age: 40, address: '台北'},
                    {id: 2, name: '周杰', age: 40, address: '湖北', description: 'hello world'},
                    {id: 3, name: '杰伦', age: 40, address: '山东'},
                    {id: 4, name: '周伦', age: 40, address: '福建'},
                    {id: 5, name: '伦', age: 40, address: '杭州'},
                    {id: 6, name: '文哲', age: 40, address: '山东'},
                    {id: 7, name: '勃拉姆斯', age: 40, address: '国外'},
                ],
                selected: [],
                sortDirections: {
                    name: 'asc',
                    address: true
                },
                action: {
                    name: '操作',
                    width: '30'
                }

            }
        },
        mounted() {
        },
        methods: {
            edit(xxx) {
                console.log(xxx)
            }
        },
    }
</script>
<style lang="scss">

</style>
