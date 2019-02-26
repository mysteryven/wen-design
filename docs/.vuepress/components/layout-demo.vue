<template>
    <div class="z-layout-demo">
        <h3>布局 1</h3>
        <z-layout class="d-layout">
            <z-header class="d-header">
                header
            </z-header>
            <z-content class="d-content">
                content
            </z-content>
            <z-footer class="d-footer ">
                footer
            </z-footer>
        </z-layout>
        <h3>布局 2</h3>
        <z-layout class="d-layout">
            <z-header class="d-header">
                header
            </z-header>
            <z-layout>
                <z-sider class="d-sider">sider</z-sider>
                <z-content class="d-content" style="width: 300px;">
                    content
                </z-content>
            </z-layout>
            <z-footer class="d-footer ">
                footer
            </z-footer>
        </z-layout>
        <h3>布局 3</h3>
        <z-layout class="d-layout">
            <z-header class="d-header">
                header
            </z-header>
            <z-layout>
                <z-content class="d-content" style="width: 300px;">
                    content
                </z-content>
                <z-sider class="d-sider">sider</z-sider>
            </z-layout>
            <z-footer class="d-footer ">
                footer
            </z-footer>
        </z-layout>
        <h3>布局 4</h3>
        <z-layout class="d-layout">
            <z-sider class="d-sider">sider</z-sider>
            <z-layout style="width: 300px">
                <z-header class="d-header">
                    header
                </z-header>
                <z-content class="d-content">
                    content
                </z-content>
                <z-footer class="d-footer">
                    footer
                </z-footer>
            </z-layout>
        </z-layout>
    </div>
</template>

<script>
    import ZLayout from '../../../src/layout/layout'
    import ZHeader from '../../../src/layout/header'
    import ZContent from '../../../src/layout/content'
    import ZFooter from '../../../src/layout/footer'
    import ZSider from '../../../src/layout/sider'

    export default {
        components: {ZLayout, ZHeader, ZContent, ZFooter, ZSider}
    }
</script>
<style lang="scss" scoped>
    .z-layout-demo {
        margin-top: 32px;
    }

    .d-layout {
        height: 280px;
        background-color: red;
    }
    .d-header, .d-content, .d-footer, .d-sider {
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
    }
    .d-header {
        height: 64px;
        background-color: #7dbcea;
    }
    .d-content {
        background-color: #118ee9;
    }
    .d-footer {
        height: 64px;
        background-color: #7dbcea;
    }
    .d-sider {
        background-color: #3aa0e9;
    }
</style>