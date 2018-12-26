<template>
    <div class="wrapper">
        <input type="text">
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #666;
    $border-color-hover: #999;
    $font-size: 14px;
    $border-radius: 4px;
    .wrapper input {
        height: $height;
        font-size: $font-size;
        border: 1px solid $border-color;
        &:hover {
            border-color: $border-color-hover;
        }
        border-radius: $border-radius;
        padding: 0.6em 0.5em;
    }
</style>