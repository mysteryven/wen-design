<template>
    <div>
        <div>demo</div>
        <z-layout class="layout">
            <z-sider class="sider"></z-sider>
            <z-layout>
                <z-header class="header"></z-header>
                <z-content class="content"></z-content>
                <z-footer class="footer"></z-footer>
            </z-layout>
        </z-layout>
    </div>
</template>

<script>
    import ZLayout from './layout/layout'
    import ZHeader from './layout/header'
    import ZContent from './layout/content'
    import ZFooter from './layout/footer'
    import ZSider from './layout/sider'

    export default {
        components: {ZLayout, ZHeader, ZContent, ZFooter, ZSider}
    }
</script>
<style lang="scss" scoped>
    .layout {
        width: 500px;
        height: 500px;
        background-color: red;
    }
    .header {
        width: 10px;
        height: 300px;
        background-color: black;
    }
    .content {
        background-color: blue;
    }
    .sider {
        background-color: yellow;
    }
</style>