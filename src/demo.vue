<template>
    <div id="app">
        <z-table :columns="columns" :data-source="dataSource" striped  :selected-items.sync="selected"
        :selections.sync="selections">
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
                columns: [
                    {name: '姓名', field: 'name'},
                    {name: '年龄', field: 'age'},
                    {name: '住址', field: 'address'}
                ],
                dataSource: [
                    {id: 1, name: '周杰伦', age: 40, address: '台北'},
                    {id: 2, name: '周杰', age: 40, address: '湖北'},
                    {id: 3, name: '杰伦', age: 40, address: '山东'},
                    {id: 4, name: '周伦', age: 40, address: '福建'},
                    {id: 5, name: '伦', age: 40, address: '杭州'},
                    {id: 6, name: '文哲', age: 40, address: '山东'},
                    {id: 7, name: '勃拉姆斯', age: 40, address: '国外'},
                ],
                selected: [],
                selections: {
                    name: 'asc',
                    age: 'desc',
                    address: true
                }
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
