<template>
    <div class="icon-demo-wrapper">
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="setting"></z-icon>
            <span>setting</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="like"></z-icon>
            <span>like</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="dots"></z-icon>
            <span>dots</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="up-solid"></z-icon>
            <span>up-solid</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="down-solid"></z-icon>
            <span>down-solid</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="error"></z-icon>
            <span>error</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="left"></z-icon>
            <span>left</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="right"></z-icon>
            <span>right</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="up"></z-icon>
            <span>up</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="down"></z-icon>
            <span>down</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="download"></z-icon>
            <span>download</span>
        </div>
        <div class="icon-demo">
            <z-icon class="icon-demo-item" name="loading"></z-icon>
            <span>loading</span>
        </div>
    </div>
</template>
<script>
    import Icon from '../../../src/icon'

    export default {
        components: {
            'ZIcon': Icon
        },
    }
</script>
<style lang="scss" scoped>
    .icon-demo-wrapper {
        margin-top: 32px;
        display: flex;
        width: 600px;
        flex-wrap: wrap;
        .icon-demo {
            width: 100px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            span {
                margin-top: 6px;
            }
            &:hover {
                background-color: #2593fb;
                svg {
                    fill: white;
                }
                span  {
                    color: white;
                }
            }
        }
        svg {
            width: 50px;
            height: 50px;
        }
    }

</style>