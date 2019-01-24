<template>
    <div>
        <div>
            <slot></slot>
        </div>
        <cascader-item v-for="item in options" :optionItem="item"></cascader-item>
    </div>
</template>
<script>
    import CascaderItem from './cascader-item'

    export default {
        name: "z-cascader",
        components: {
            'cascader-item': CascaderItem
        },
        props: {
            options: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped lang="scss">

</style>