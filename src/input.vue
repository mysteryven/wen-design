<template>
    <div class="wrapper" :class="{bottom: errorPosition === 'bottom'}">
        <input type="text" :placeholder="placeholder">
        <div class="error" v-if="error">
            <z-icon name="error" class="error-icon"></z-icon>
            <span>{{error}}</span>
        </div>
    </div>
</template>
<script>

    import  Icon from './icon'
    export default {
        props: {
            placeholder: {
                default: '提示信息',
                type: String
            },
            error: {
                default: '',
                type: String
            },
            'errorPosition': {
                default: 'right',
                type: String,
                validator(newValue) {
                    console.log(newValue)
                    return !(newValue !== 'bottom' && newValue !== 'right');
                }
            }
        },
        components: {
            'z-icon': Icon
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 14px;
    $border-radius: 4px;
    .wrapper {
        display: inline-flex;
        align-items: center;
        .error {
            display: inline-flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
        }
    }
    .wrapper.bottom {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        .error-icon {
            margin-left: 0;
        }
    }
    .wrapper input {
        height: $height;
        display: inline-flex;
        font-size: $font-size;
        border: 1px solid $border-color;
        outline: none;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        }
        &:focus {
            box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
        }
        border-radius: $border-radius;
        padding: 1em 0.5em;
    }
    .error {
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
    }
    .error-icon {
        fill: red;
        margin: 0 0.2em 0 0.5em;
        vertical-align: middle;
    }
    span {
        color: red;
        vertical-align: middle;
    }

</style>