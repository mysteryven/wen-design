<template>
    <div class="tab-demo">
        <z-tabs :selected.sync="selected">
            <z-tabs-head class="head">
                <z-tabs-item name="a" active-class="z-active-item">勃拉姆斯</z-tabs-item>
                <z-tabs-item class="sports" name="b" active-class="z-active-item">巴赫</z-tabs-item>
                <z-tabs-item class="sports" name="c" active-class="z-active-item">拉赫玛尼诺夫</z-tabs-item>
                <z-tabs-item class="sports" name="d" active-class="z-active-item">李斯特</z-tabs-item>
            </z-tabs-head>
            <z-tabs-body class="content">
                <z-tabs-pane name="a">内容1</z-tabs-pane>
                <z-tabs-pane name="b">内容2</z-tabs-pane>
                <z-tabs-pane name="c">内容3</z-tabs-pane>
                <z-tabs-pane name="d">内容4</z-tabs-pane>
            </z-tabs-body>
        </z-tabs>
    </div>
</template>
<script>
    import ZTabs from '../../../src/tabs/tabs'
    import ZTabsHead from '../../../src/tabs/tabs-head'
    import ZTabsItem from '../../../src/tabs/tabs-item'
    import ZTabsBody from '../../../src/tabs/tabs-body'
    import ZTabsPane from '../../../src/tabs/tabs-pane'

    export default {
        components: {ZTabs, ZTabsHead, ZTabsItem, ZTabsBody, ZTabsPane},
        data() {
            return {
                selected: 'a'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tab-demo {
        margin-top: 32px;
        padding-bottom: 40px;
        border-bottom: 1px solid #ddd;
    }
    .z-active-item {
        color: #5291d2;
    }
</style>