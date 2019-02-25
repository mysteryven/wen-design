<template>
    <div class="button-demo">
        <div>
            <z-button>普通按钮</z-button>
        </div>
        <div>
            <z-button icon="like">
               点赞
            </z-button>
        </div>
        <div>
            <z-button icon-position="right" icon="download">
                下载
            </z-button>
        </div>
        <div>
            <z-button disabled>禁用</z-button>
        </div>
        <div>
            <z-button loading>加载中</z-button>
        </div>
        <div>
            <z-button isCircle icon="setting"></z-button>
        </div>
    </div>
</template>
<script>
    import Button from '../../../../src/button/button'

    export default {
        components: {
            'z-button': Button
        },
    }
</script>
<style lang="scss" scoped>
    .button-demo {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        & > div {
            margin-left: 16px;
        }
    }
</style>