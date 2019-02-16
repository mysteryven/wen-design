<template>
    <div class="z-sub-menu" @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave">
        <div class="z-sub-menu-title">
            <slot name="title"></slot>
            <z-icon class="icon" name="right"></z-icon>
        </div>
        <div class="z-sub-menu-transparent-bg">
            <div class="z-sub-menu-content" v-show="visible">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script>
    import ZIcon from '../icon'

    export default {
        name: "ZSubMenu",
        components: {ZIcon},
        data() {
            return {
                visible: false,
                mouseEnable: false
            }
        },
        props: {
            name: {
                type: String,
            }
        },
        methods: {
            onMouseEnter() {
                this.mouseEnable = true
                this.visible = true
                console.log('enter' + this.name)
            },
            onMouseLeave() {
                this.visible = false
                console.log('leave' + this.name)
            },
            onClick() {
                if (this.mouseEnable) {
                    return
                }
                this.visible = !this.visible
                console.log(this.visible)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'var';

    .z-sub-menu {
        position: relative;
        &-title {
            padding: 8px 12px;
            display: inline-flex;
            white-space: nowrap;
            &:hover {
                color: $text-hover-color;
                .icon {
                    fill: $text-hover-color;
                }
            }
            align-items: center;
            justify-content: space-between;
            .icon {
                margin-left: 2em;
                width: 0.8em;
                height: 0.8em;
                fill: $text-color
            }
        }
        &-transparent-bg {
            position: absolute;
            top: 0;
            left: 100%;
            padding-right: 10px;
            background-color: transparent;
        }
        &-content {
            display: flex;
            flex-direction: column;
            background: white;
            border-radius: $border-radius;
            color: $text-color;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
            margin-left: 8px;
        }
    }

    .z-menu > .z-sub-menu > .z-sub-menu-transparent-bg {
        top: 100%;
        left: 0;

    }

    .z-menu > .z-sub-menu >  .z-sub-menu-title .icon {
        margin-left: 1em;
        transform: rotate(90deg);
    }

</style>