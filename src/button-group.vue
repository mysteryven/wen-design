<template>
    <div class="z-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        mounted() {
            for (let node of this.$el.children) {
                if (node.nodeName !== 'BUTTON') {
                    console.warn('为了避免不必要的样式问题，z-button-group 下的直接子节点应该全是 button，' +
                        '但是你写的是' + node.nodeName.toLowerCase())
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "var";
    .z-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .z-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-bottom-left-radius: $button-border-radius;
                border-top-left-radius: $button-border-radius;
                margin-left: 0px;
            }
            &:last-child {
                border-top-right-radius: $button-border-radius;
                border-bottom-right-radius: $button-border-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }

    }
</style>