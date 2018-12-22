<template>
    <button class="z-button">按钮</button>
</template>
<script>
    export default {

    }
</script>

<style lang="scss">
    .z-button {
        cursor: pointer;
        font-size: var(--font-size);
        padding: 0 1em;
        border: 1px solid var(--border-color);
        height: var(--button-height);
        background: var(--button-bg);
        border-radius: var(--button-border-radius);
        outline: none;
    }
    .z-button:hover {
        border: 1px solid var(--border-color-hover);
        box-shadow: 1px 1px 10px rgba(0, 0, 0,0.1);
    }
    .z-button:active {
        background: var(--button-active-bg);
    }
</style>
