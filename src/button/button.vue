<template>
    <button class="z-button" :class="{[`icon-${iconPosition}`]: true,
    disabled: disabled, circle: isCircle, wrap}"
        @click="onClick">
        <z-icon class="z-icon" v-if="icon && !loading" :name="icon"></z-icon>
        <z-icon class="z-icon loading" v-if="loading" name="loading"></z-icon>
        <div class="z-button-content" :class="{loadingText: loading}" v-if="!isCircle">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from '../icon'

    export default {
        components: {
            'z-icon': Icon
        },
        data() {
            return {
                wrap : false
            }
        },
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(newValue) {
                    return !(newValue !== 'left' && newValue !== 'right');
                }
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            isCircle: {
                type: Boolean,
                default: false
            }

        },
        mounted() {
            this.$el.addEventListener('animationend', this.listenAnimation)
        },
        beforeDestroy() {
            this.$el.removeEventListener('animationend', this.listenAnimation)
        },
        methods: {
            onClick(e) {
                this.$emit('click', e)
                if (this.loading || this.disabled) {
                    return
                }
                this.wrap = true
            },
            listenAnimation() {
                this.wrap = false
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";

    .z-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: $font-size;
        padding: 0 1em;
        border: 1px solid $border-color;
        height: $button-height;
        background: $button-bg;
        border-radius: $button-border-radius;
        outline: none;
        vertical-align: middle;
        position: relative;
        &:hover {
            box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
        }
        &:active {
        }
        &.wrap{
            &::after {
                content: '';
                display: block;
                background: white;
                position: absolute;
                z-index: 1;
                top: -2px;
                left: -2px;
                bottom: -2px;
                right: -2px;
                border-radius: inherit;
                border: 2px solid $blue;
                opacity: 0.3;
                animation: wrap-border 0.5s linear ;
                flex-shrink: 0;
            }
        }
        >.z-icon {
            order: 1;
            margin-right: 0.3em;
            margin-left: 0
        }
        .z-button-content {
            order: 2
        }
        &.icon-right {
            >.z-icon {
                order: 2;
                margin-left: 0.3em;
                margin-right: 0
            }
            >.z-button-content {
                order: 1
            }
        }
        .loading {
            animation: spin 1.4s linear infinite;
        }
        .loadingText {
            cursor:not-allowed;
        }
    }
    .disabled {
        cursor: not-allowed;
        background-color: $button-disable-bg;
        color: $button-disable-color;
        &.wrap::after {
            display: none;
        }
    }
    .disabled:hover {
        box-shadow: none;
        border-color: inherit;
    }

    .circle {
        border-radius: 50%;
        width: $button-height;
        padding: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        > .z-icon {
            margin: 0;
            height: 1em;
            width: 1em
        }
    }
    @keyframes wrap-border {
        to {
            top: -7px;
            left: -7px;
            bottom: -7px;
            right: -7px;
            border-width: 6px;
            opacity: 0;
        }
    }

</style>
