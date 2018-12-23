<template>
    <div class="z-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
    .z-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .z-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-bottom-left-radius: var(--button-border-radius);
                border-top-left-radius: var(--button-border-radius);
                margin-left: 0px;
            }
            &:last-child {
                border-top-right-radius: var(--button-border-radius);
                border-bottom-right-radius: var(--button-border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }

    }
</style>