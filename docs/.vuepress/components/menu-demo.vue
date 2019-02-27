<template>
    <div>
        <h3>默认版本</h3>
        <div class="menu-demo">
            <z-menu :selected.sync="selected" class="menu-demo-wrapper">
                <z-menu-item name="draw">绘画</z-menu-item>
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
            <div style="margin-left: 16px;">已选择：{{selected}}</div>
        </div>
        <h3 style="margin-top: 32px;">垂直版本</h3>
        <div class="vertical-menu-demo">
            <z-menu :selected.sync="selected2" class="menu-demo-wrapper" vertical>
                <z-menu-item name="draw">绘画</z-menu-item>
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

    </div>
</template>
<script>
    import ZMenu from '../../../src/menu/menu'
    import ZSubMenu from '../../../src/menu/sub-menu'
    import ZMenuItem from '../../../src/menu/menu-item'

    export default {
        components: {ZMenu, ZSubMenu, ZMenuItem},
        data() {
            return {
                selected: '',
                selected2: '',
            }
        }
    }
</script>
<style lang="scss" scoped>
    .menu-demo {
        display: flex;
        align-items: center;
        &-wrapper {
            font-size: 20px;
        }
    }



</style>