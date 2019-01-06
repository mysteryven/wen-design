<template>
    <div class="wrapper" :class="{'closed-wrapper':showClosed}">
        <div class="message">
            <slot></slot>
        </div>
        <div class="close" v-if="showClosed">关闭</div>
    </div>
</template>
<script>
    export default {
        name: 'z-toast',
        data() {
            return {
                showClosed: false
            }
        },
        computed: {}
    }
</script>
<style lang="scss" scoped>
    .wrapper {
        display: inline-flex;
        justify-content: flex-end;
        background-color: #424242;
        max-width: 350px;
        color: white;
        border-radius: 4px;
        .message {
            padding: 14px 16px
        }
        &.closed-wrapper {
            .message {
                display:flex;
                align-items: center;
                justify-content: center;
            }
            .close {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                padding-left: 14px;
                padding-right: 14px;
                border-left: 1px solid #666666;
                cursor: pointer;
            }
        }

    }

</style>