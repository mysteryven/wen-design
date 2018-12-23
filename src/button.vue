<template>
    <button class="z-button" :class="{[`icon-${iconPosition}`]: true}" >
        <z-icon v-if="icon" :name="icon"></z-icon>
        <div class="content">
            <slot></slot>
        </div>
        </button>
</template>
<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(newValue) {
                    return !(newValue !== 'left' && newValue !== 'right');
                }
            }
        }
    }
</script>

<style lang="scss">
    .z-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: var(--font-size);
        padding: 0 1em;
        border: 1px solid var(--border-color);
        height: var(--button-height);
        background: var(--button-bg);
        border-radius: var(--button-border-radius);
        outline: none;
        vertical-align: middle;
        &:hover {
            border: 1px solid var(--border-color-hover);
            box-shadow: 1px 1px 10px rgba(0, 0, 0,0.1);
        }
        &:active{
            background: var(--button-active-bg);
        }
        >.z-icon {
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
    }

</style>
