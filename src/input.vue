<template>
    <div class="wrapper">
        <input type="text" :placeholder="placeholder">
    </div>
</template>
<script>
    export default {
        props: {
            placeholder: {
                default: '提示信息',
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 14px;
    $border-radius: 4px;
    .wrapper input {
        height: $height;
        font-size: $font-size;
        border: 1px solid $border-color;
        outline: none;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        }
        border-radius: $border-radius;
        padding: 1em 0.5em;
    }
</style>