<template>
    <div class="wrapper"
         :class="toastClass">
        <div class="message">
            <slot></slot>
        </div>
        <div class="close" v-if="closeButton" @click="closeClick">
           {{closeButton.text || '关闭'}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'z-toast',
        props: {
            showClose: {
                default: false,
                type: Boolean
            },
            position: {
                default: 'middle',
                type: [String],
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) !== -1
                }
            },
            autoClose: {
                default: true,
                type: Boolean
            },
            duration: {
                default: 3,
                type: Number
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: null
                    }
                },
                validator(value) {
                    if (value.text.length > 4) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        },
        mounted() {
            this.execAutoClose()
        },
        methods: {
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.duration * 1000)
                }
            },
            closeClick() {
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
                this.close()
            }
        },
        computed: {
            toastClass() {
                let currentPosition = 'position-' + this.position
                return {
                    'closed-wrapper': this.showClose,
                    [currentPosition]: true
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes slide-down {
        0% {
            margin-top: -100%;
        }
        100% {
            margin-top: 0;
        }
    }
    @keyframes slide-up {
        0% {
            margin-bottom: -100%;
        }
        100% {
            margin-top: 0;
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .wrapper {
        position: fixed;
        left: 50%;
        display: inline-flex;
        justify-content: flex-end;
        background-color: #424242;
        max-width: 350px;
        color: white;
        border-radius: 4px;
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            animation: fade-in 400ms;
        }
        &.position-top {
            top: 0%;
            transform: translateX(-50%);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            animation: slide-down 400ms;
        }
        &.position-bottom {
            bottom: 0%;
            transform: translateX(-50%);
            animation: slide-up 400ms;
        }
        .message {
            padding: 14px 16px
        }
        &.closed-wrapper {
            .message {
                display: flex;
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