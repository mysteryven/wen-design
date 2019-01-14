<template>
    <button class="z-button" :class="{[`icon-${iconPosition}`]: true, disabled: disabled, circle: isCircle}"
        @click="$emit('click')">
        <z-icon class="icon" v-if="icon && !loading" :name="icon"></z-icon>
        <z-icon class="icon loading" v-if="loading" name="loading"></z-icon>
        <div class="content" :class="{loadingText: loading}" v-if="!isCircle">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'

    export default {
        components: {
            'z-icon': Icon
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
        }
    }
</script>

<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $border-color: #999;
    $button-active-bg: #eee;
    $button-border-radius: 4px;
    $color: #333;
    $border-color-hover: #666;
    $button-disable-bg: #d8d8d8;
    $button-disable-color: #aaaaaa;

    @keyframes spin {
       0% {
           transform: rotate(0deg);
       }
        100% {
            transform: rotate(360deg);
        }
    }
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
        &:hover {
            border: 1px solid $border-color-hover;
            box-shadow: 1px 1px 10px rgba(0, 0, 0,0.1);
        }
        &:active{
            background: $button-active-bg;
        }
        >.icon {
            order: 1;
            margin-right: 0.3em;
            margin-left: 0
        }
        >.content {
            order: 2
        }
        &.icon-right {
            >.z-icon {
                order: 2;
                margin-left: 0.3em;
                margin-right: 0
            }
            >.content {
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
        > .icon {
            margin: 0;
            height: 1em;
            width: 1em
        }
    }

</style>
