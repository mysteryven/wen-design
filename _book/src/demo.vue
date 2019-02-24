<template>
    <div id="app">
        <z-table :data-source="dataSource" striped bordered :selected-items.sync="selected"
        :sort-directions.sync="sortDirections" :height="300">
            <z-table-column name="姓名" field="name" :width="50">
                <template slot-scope="props">
                    <a href="">{{props.value}}</a>
                </template>
            </z-table-column>
            <z-table-column name="年龄" field="age" :width="80"></z-table-column>
            <z-table-column name="住址" field="address" :width="80"></z-table-column>
        </z-table>
    </div>
</template>
<script>
    import ZTable from './table/table'
    import ZTableColumn from './table/table-column'

    export default {
        name: 'demo',
        components: {ZTable, ZTableColumn},
        data() {
            return {
                columns: [
                    {name: '姓名', field: 'name', width: 50},
                    {name: '年龄', field: 'age', width: 80},
                    {name: '住址', field: 'address', width: 80},
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
                }
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
