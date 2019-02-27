<template>
    <div class="popover" ref="popover">
        <div class="content" ref="content" v-if="visible" :class="{[`position-${position}`]: true}">
            <slot name="content"></slot>
        </div>
        <div ref="trigger">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'zPopover',
        data() {
            return {
                visible: false
            }
        },
        props: {
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover', 'focus'].indexOf(value) !== -1
                }
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'right', 'left', 'bottom'].indexOf(value) !== -1
                }
            }
        },
        computed: {},
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.trigger.addEventListener('click', this.onClick)
            } else if (this.trigger === 'hover') {
                this.$refs.popover.addEventListener('mouseenter', this.onHoverOpen)
                this.$refs.popover.addEventListener('mouseleave', this.onHoverClose)
            } else if (this.trigger === 'focus') {
                this.$refs.trigger.addEventListener('mousedown', this.onFocusOpen)
                this.$refs.trigger.addEventListener('mouseup', this.onFocusClose)
            }
        },
        methods: {
            onClick() {
                if (this.visible !== true) {
                    this.open()
                } else {
                    this.close()
                }
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.body.addEventListener('click', this.onDocumentClick)
                })
            },
            close() {
                this.visible = false
                document.body.removeEventListener('click', this.onDocumentClick)
            },
            onDocumentClick(e) {
                let {trigger, content} = this.$refs
                if (this.$refs && (trigger.contains(e.target) || trigger === e.target)) {
                    return
                } else if (this.$refs && (content === e.target || trigger.contains(e.target))) {
                    return
                }
                this.close()
            },
            positionContent() {
                let {trigger, content} = this.$refs
                document.body.appendChild(content)

                let {left, top, width, height} = trigger.getBoundingClientRect()
                let {height: contentHeight} = content.getBoundingClientRect()

                let positions = {
                    top: {
                        left: left + window.scrollX + width / 2 + 'px',
                        top: top + window.scrollY + 'px'
                    },
                    bottom: {
                        left: left + window.scrollX + width / 2 + 'px',
                        top: top + window.scrollY + 'px'
                    },
                    left: {
                        left: left + window.scrollX + 'px',
                        top: top + window.scrollY - (contentHeight-height)/2  + 'px'
                    },
                    right: {
                        left: left + window.scrollX + width +  'px',
                        top: top + window.scrollY - (contentHeight-height)/2 + 'px'
                    }
                }

                content.style.left = positions[this.position].left
                content.style.top = positions[this.position].top

            },
            onHoverOpen() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    this.$refs.content.addEventListener('mouseenter', () => {
                        this.visible = true
                    })
                })
            },
            onHoverClose() {
                this.visible = false
            },
            onHoverClose() {
                let isContent = false
                this.$refs.content.addEventListener('mouseenter', (childEvent) => {
                    isContent = true
                })
                this.$refs.content.addEventListener('mouseleave', () => {
                    this.visible = false
                })
                setTimeout(()=> {
                    this.$nextTick(() => {
                        if (!isContent) {
                            this.visible = false
                        }
                    })
                }, 200)
            },
            onFocusOpen() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                })
            },
            onFocusClose() {
                this.visible = false
            }

        },
        beforeDestroy() {
            let popover = this.$refs.popover;
            if (this.trigger === 'click') {
                popover.removeEventListener('click', this.onClick);
            } else if (this.trigger === 'hover'){
                popover.removeEventListener('mouseenter', this.onHoverOpen);
                popover.removeEventListener('mouseleave', this.onHoverClose);
            } else if (this.trigger === 'focus') {
                popover.removeEventListener('mousedown', this.onFocusOpen);
                popover.removeEventListener('mouseup', this.onFocusClose);
            }
        },
    }
</script>
<style scoped lang="scss">
    .popover {
        display: inline-block;
        position: relative;
    }

    .content {
        position: absolute;
        background: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        border-radius: 4px;
        border: 1px solid #ebeef5;
        word-break: break-all;
        min-width: 100px;
        max-width: 400px;
        &.position-top {
            transform: translate(-50%, -100%);
            padding: 0.6em 1em;
            margin-top: -16px;
            &::before {
                content: '';
                position: absolute;
                top: 100%;
                width: 10px;
                height: 10px;
                background: white;
                left: 50%;
                border: 1px solid transparent;
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                transform: rotate(45deg) translateY(-50%);
                transform-origin: top;
                margin-left: -5px;
            }
            &::after {
                content: '';
                position: absolute;
                border: 1px solid transparent;

                bottom: 0%;
                width: 20px;
                height: 6px;
                left: 50%;
                background: white;
                transform-origin: top;
                margin-left: -8px;

            }
        }
        &.position-bottom {
            transform: translate(-50%, 100%);
            padding: 0.6em 1em;
            margin-top: -6px;
            &::before {
                content: '';
                position: absolute;
                bottom: 100%;
                width: 10px;
                height: 10px;
                background: white;
                left: 50%;
                border: 1px solid transparent;
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                transform: rotate(45deg) translateY(50%);
                transform-origin: bottom;
                margin-left: -5px;
            }
            &::after {
                content: '';
                position: absolute;
                border: 1px solid transparent;
                background: white;
                top: 0%;
                width: 20px;
                height: 6px;
                left: 50%;
                transform-origin: top;
                margin-left: -8px;

            }
        }

        &.position-left{
            transform: translateX(-100%);
            padding: 0.6em 1em;
            margin-left: -16px;
            &::before {
                content: '';
                position: absolute;
                left: 100%;
                width: 10px;
                height: 10px;
                background: white;
                top: 50%;
                border: 1px solid transparent;
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                transform: translateY(-50%) rotate(45deg);
                margin-left: -5px;
            }
            &::after {
                content: '';
                position: absolute;
                border: 1px solid transparent;
                background: white;
                top: 50%;
                width: 10px;
                height: 20px;
                right: 0%;
                transform: translateY(-50%);
                transform-origin: left;

            }
        }
        &.position-right{
            margin-left: 16px;
            padding: 0.6em 1em;
            &::before {
                content: '';
                position: absolute;
                right: 100%;
                width: 10px;
                height: 10px;
                background: white;
                top: 50%;
                border: 1px solid transparent;
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                transform: translate(50%, -50%) rotate(45deg);
            }
            &::after {
                content: '';
                position: absolute;
                border: 1px solid transparent;
                background: white;
                top: 50%;
                width: 10px;
                height: 20px;
                left: 0%;
                transform: translate(0%, -50%);
                transform-origin: left;
            }
        }
    }
</style>