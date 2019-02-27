<template>
    <div id="app">
        <z-table :data-source="dataSource">
            <template slot="z-column">
                <z-table-column name="姓名" field="name">
                </z-table-column>
            </template>
            <template slot="z-column">
                <z-table-column name="年龄" field="age" ></z-table-column>
            </template>
            <template slot="z-column">
                <z-table-column name="住址" field="address"></z-table-column>
            </template>
        </z-table>
    </div>
</template>
<script>
    import ZTable from '../../../src/table/table'
    import ZTableColumn from '../../../src/table/table-column'

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
                dataSource: [],
                selected: [],
                sortDirections: {
                    name: 'asc',
                    address: true
                }
            }
        },
        mounted() {
            this.dataSource = [
                {id: 1, name: '周杰伦', age: 40, address: '台北'},
                {id: 2, name: '周杰', age: 40, address: '湖北', description: 'hello world'},
                {id: 3, name: '杰伦', age: 40, address: '山东'},
                {id: 4, name: '周伦', age: 40, address: '福建'},
                {id: 5, name: '伦', age: 40, address: '杭州'},
                {id: 6, name: '文哲', age: 40, address: '山东'},
                {id: 7, name: '勃拉姆斯', age: 40, address: '国外'},
            ]

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
