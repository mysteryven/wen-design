<template>
    <div id="app">
        <z-menu :selected.sync="selected">
            <z-menu-item name="draw" >绘画</z-menu-item>
            <z-menu-item name="opera">歌剧</z-menu-item>
            <z-sub-menu name="sub1">
                <template slot="title">
                    音乐
                </template>
                <z-sub-menu name="sub2">
                   <template slot="title">古典音乐</template>
                    <z-menu-item name="baLuoKe">巴洛克主义</z-menu-item>
                    <z-sub-menu name="sub3">
                        <template slot="title">
                          浪漫主义
                        </template>
                        <z-menu-item name="liSiTe">李斯特</z-menu-item>
                        <z-menu-item name="brams">勃拉姆斯</z-menu-item>
                    </z-sub-menu>
                    <z-menu-item name="classic">古典主义</z-menu-item>
                </z-sub-menu>
                <z-menu-item name="rock">摇滚</z-menu-item>
                <z-menu-item name="rb">R&B</z-menu-item>
            </z-sub-menu>
        </z-menu>
        <z-menu :selected.sync="selected" vertical>
            <z-menu-item name="draw" >绘画</z-menu-item>
            <z-menu-item name="opera">歌剧</z-menu-item>
            <z-sub-menu name="sub1">
                <template slot="title">
                    音乐
                </template>
                <z-sub-menu name="sub2">
                    <template slot="title">古典音乐</template>
                    <z-menu-item name="baLuoKe">巴洛克主义</z-menu-item>
                    <z-sub-menu name="sub3">
                        <template slot="title">
                            浪漫主义
                        </template>
                        <z-menu-item name="liSiTe">李斯特</z-menu-item>
                        <z-menu-item name="brams">勃拉姆斯</z-menu-item>
                    </z-sub-menu>
                    <z-menu-item name="classic">古典主义</z-menu-item>
                </z-sub-menu>
                <z-menu-item name="rock">摇滚</z-menu-item>
                <z-menu-item name="rb">R&B</z-menu-item>
            </z-sub-menu>
        </z-menu>
    </div>
</template>
<script>
    import zMenu from './menu/menu'
    import zMenuItem from './menu/menu-item'
    import zSubMenu from './menu/sub-menu'

    export default {
        name: 'demo',
        components: {zMenu, zMenuItem, zSubMenu},
        data() {
            return {
                selected: 'rock'
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
