<template>
    <div class="cascader-item">
        {{optionItem.name}}
        <cascader-item v-if="optionItem.children"
             v-for="item in optionItem.children" :optionItem="item">
        </cascader-item>
    </div>

</template>

<script>
    export default {
        name: "cascaderItem",
        props: {
            optionItem: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
    .cascader-item {
        border: 1px solid red;
        margin: 10px;
    }
</style>