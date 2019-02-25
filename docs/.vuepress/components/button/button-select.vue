<template>
    <div class="button-demo">
        <z-button-select :lists="lists" :current.sync="current">
        </z-button-select>
        <div>目前选择的值： {{current}}</div>
    </div>
</template>
<script>
    import ButtonSelect from '../../../../src/button/button-select'

    export default {
        components: {
            'z-button-select': ButtonSelect
        },
        data() {
            return {
                lists: ['苹果', '荔枝', '草莓', '橘子', '香蕉', '西瓜'],
                current: '请选择'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .button-demo {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        & > div {
            margin-left: 16px;
        }
    }
</style>