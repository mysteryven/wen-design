<template>
    <div class="z-sub-menu" :class="{'z-sub-menu-vertical': vertical}"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
    >

        <div class="z-sub-menu-title" :class="{active}" @click="onClick">
            <slot name="title"></slot>
            <z-icon class="icon" name="right" :class="{open: visible}"></z-icon>
        </div>
        <template v-if="vertical">
            <transition @enter="enter" @leave="leave"  @after-leave="afterLeave"
                        @after-enter="afterEnter">
                <div class="z-sub-menu-transparent-bg" v-show="visible">
                    <div class="z-sub-menu-content">
                        <slot></slot>
                    </div>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="z-sub-menu-transparent-bg" v-show="visible">
                <div class="z-sub-menu-content" >
                    <slot></slot>
                </div>
            </div>
        </template>

    </div>
</template>

<script>
    import ZIcon from '../icon'

    export default {
        name: "ZSubMenu",
        components: {ZIcon},
        inject: ['root'],
        data() {
            return {
                visible: false,
                mouseEnable: false,
                vertical: false
            }
        },
        props: {
            name: {
                type: String,
                required: true
            }
        },
        mounted() {

            this.vertical = this.root.vertical

        },
        methods: {
            enter(el, done) {
                let {height} = el.getBoundingClientRect()
                el.style.height = 0
                el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterEnter (el) {
                el.style.height = 'auto'
            },
            leave: function (el, done) {
                let {height} = el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.getBoundingClientRect()
                el.style.height = 0
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterLeave: function (el) {
                el.style.height = 'auto'
            },
            onMouseEnter() {
                if (!this.vertical) {
                    this.mouseEnable = true
                    this.visible = true
                }

            },
            onMouseLeave() {
                if (!this.vertical) {
                    this.visible = false
                }
            },
            onClick() {
                if (this.vertical) {
                    this.visible = !this.visible
                } else if (this.mouseEnable) {
                    return
                } else {
                    this.visible = !this.visible
                }


            },
            updateSelectedPath() {
                this.root.selectedPath.unshift(this.name)
                this.$parent.updateSelectedPath && this.$parent.updateSelectedPath()
            }
        },
        computed: {
            active() {
                return this.root.selectedPath.indexOf(this.name) !== -1
            },

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
            cursor: pointer;
            user-select: none;
            color: $text-color;
            &.active {
                color: $text-hover-color;
                .icon {
                    fill: $text-hover-color;
                }
            }
            &:hover {
                background-color: $button-bg-hover-light ;
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
                fill: $text-color;
                transition: transform 0.4s;
            }
            .icon.open {
                transform: rotate(180deg);
            }
        }
        &-transparent-bg {
            position: absolute;
            top: 0;
            left: 100%;
            padding-right: 10px;
            background-color: transparent;
            z-index: 1;
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

    .z-menu > .z-sub-menu > .z-sub-menu-title .icon {
        margin-left: 1em;
        transform: rotate(90deg);
        &.open {
            transform: rotate(270deg);
        }
    }

    .z-sub-menu.z-sub-menu-vertical {
        .z-sub-menu-transparent-bg {
            position: static;
            padding-right: 10px;
            z-index: 1;
            overflow: hidden;
            transition: height 250ms;
        }
        .z-sub-menu-content {
            background: white;
            color: $text-color;
            box-shadow: none;
            border-radius: 0px;
            margin-left: 8px;
            border: none;
        }
        .icon {
            transform: rotate(90deg);
        }
        .icon.open {
            transform: rotate(270deg);
        }
    }


</style>