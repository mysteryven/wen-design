<template>
    <div class="z-wrapper"
         :class="toastClass">
        <div class="z-message">
            <slot></slot>
        </div>
        <div class="z-close" v-if="closeButton.text" @click="closeClick">
            {{closeButton.text}}
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
                default: 2,
                type: Number
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '',
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
    @import "var";

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

    .z-wrapper {
        position: fixed;
        left: 50%;
        display: inline-flex;
        justify-content: flex-end;
        background-color: #ffffff;
        max-width: 350px;
        color: black;
        box-shadow: 0px 2px 16px 0 rgba(0, 0, 0, 0.2);;
        border-radius: 4px;

        .z-message {
            padding: 8px 12px;
        }

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
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .z-close {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 4px;
            padding-right: 4px;
            border-left: 1px solid #ebebeb ;
            cursor: pointer;
        }


    }

</style>