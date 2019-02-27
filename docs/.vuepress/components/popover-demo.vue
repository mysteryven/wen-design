<template>
    <div class="popover-demo">
        <div>
            <z-popover trigger="hover">
                <template slot="content">
                    欢迎使用
                </template>
                <slot>
                    <z-button> hover me (悬浮)</z-button>
                </slot>
            </z-popover>
        </div>
        <div>
            <z-popover trigger="focus">
                <template slot="content">
                    欢迎使用
                </template>
                <slot>
                    <z-button>focus me (长按)</z-button>
                </slot>
            </z-popover>
        </div>
        <div>
            <z-popover position="bottom">
                <template slot="content">
                    欢迎使用
                </template>
                <slot>
                    <z-button>click me</z-button>
                </slot>
            </z-popover>
            <z-popover position="right">
                <template slot="content">
                    欢迎使用
                </template>
                <slot>
                    <z-button>click me</z-button>
                </slot>
            </z-popover>
            <z-popover position="left">
                <template slot="content">
                    欢迎使用
                </template>
                <slot>
                    <z-button>click me</z-button>
                </slot>
            </z-popover>
        </div>

    </div>
</template>
<script>

    import ZPopover from '../../../src/popover'
    import ZButton from '../../../src/button/button'
    export default {
        components: {ZPopover, ZButton}
    }
</script>
<style lang="scss" scoped>
    .popover-demo {
        margin-top: 32px;
        > div {
            margin-bottom: 16px;
        }
    }
</style>