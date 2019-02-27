<template>
    <div class="z-grid-demo">
        <h3>普通模式</h3>
        <z-row class="z-grid-row">
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6</div>
            </z-col>
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6</div>
            </z-col>
            <z-col span="12" class="z-grid-col">
                <div class="z-content">span=12</div>
            </z-col>
        </z-row>

        <z-row class="z-grid-row">
            <z-col span="12" class="z-grid-col">
                <div class="z-content">span=12</div>
            </z-col>
            <z-col span="12" class="z-grid-col">
                <div class="z-content">span=12</div>
            </z-col>
        </z-row>

        <z-row class="z-grid-row">
            <z-col span="8" class="z-grid-col">
                <div class="z-content">span=8</div>
            </z-col>
            <z-col span="8" class="z-grid-col">
                <div class="z-content">span=8</div>
            </z-col>
            <z-col span="8" class="z-grid-col">
                <div class="z-content">span=8</div>
            </z-col>
        </z-row>
        <h3>带间隙</h3>
        <z-row class="z-grid-row" gutter="10">
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6</div>
            </z-col>
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6</div>
            </z-col>
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6</div>
            </z-col>
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6</div>
            </z-col>
        </z-row>
        <h3>左右偏移</h3>
        <z-row class="z-grid-row" gutter="10">
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6</div>
            </z-col>
            <z-col span="6" offset="6" class="z-grid-col">
                <div class="z-content">span=6 offset=6 </div>
            </z-col>
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6</div>
            </z-col>
        </z-row>
        <z-row class="z-grid-row">
            <z-col span="12" offset="6" class="z-grid-col">
                <div class="z-content">span=6 offset=12</div>
            </z-col>
            <z-col span="6" class="z-grid-col">
                <div class="z-content">span=6 offset=6 </div>
            </z-col>
        </z-row>

        <h3>适应 ipad、电脑、手机</h3>
        <z-row class="z-grid-row">
            <z-col span="12" offset="0" :pc="{span: 6, offset: 0}" :ipad="{span: 4}" class="z-grid-col">
                <div class="z-content">调整窗口大小查看效果</div>
            </z-col>
            <z-col span="12" offset="0" :pc="{span: 12, offset: 6}" :ipad="{span: 4, offset: 4}" class="z-grid-col">
                <div class="z-content">具体逻辑请看代码</div>
            </z-col>
        </z-row>
    </div>

</template>
<script>
    import ZCol from '../../../src/grid/col'
    import ZRow from '../../../src/grid/row'

    export default {
        components: {ZCol, ZRow}
    }
</script>
<style lang="scss" scoped>
    .z-grid-demo {
        margin-top: 32px;
    }

    .z-grid-row {
        margin-bottom: 16px;
    }

    .z-content {
        height: 60px;
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
    }

    .z-grid-row .z-grid-col:nth-child(odd) .z-content {
        background-color: #57bcf0;
    }

    .z-grid-row .z-grid-col:nth-child(even) .z-content {
        background-color: #01a0e9;
    }


</style>