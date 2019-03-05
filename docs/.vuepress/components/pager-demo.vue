<template>
    <div class="z-pager-demo">
        <z-pager :total="77" :current.sync="current"></z-pager>
        <div style="margin-top: 16px;">当前页: {{current}}</div>
    </div>

</template>
<script>
    import ZPager from '../../../src/pager'
    export default {
        components: {
            ZPager
        },
        data() {
            return {
                current: 1
            }
        }
    }
</script>
<style lang="scss" scoped>
    .z-pager-demo {
        margin-top: 32px;
        margin-bottom: 32px;
    }
</style>