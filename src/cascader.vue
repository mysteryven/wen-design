<template>
    <div class="cascader-wrapper">
        <div class="trigger">
            <slot></slot>
        </div>
        <cascader-items class="cascader-item" :sourceItem="options"></cascader-items>
    </div>
</template>
<script>
    import CasCaderItems from './cascader-items'

    export default {
        name: 'ZCascader',
        props: {
            options: {
                type: Array,
                default: []
            }
        },
        components: {
            'cascaderItems': CasCaderItems
        },
        mounted() {
            console.log(this.options)
        }

    }
</script>

<style lang="scss" scoped>
    .cascader-wrapper {
        display: inline-block;
        position: relative;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);;

    }

    .trigger {
        text-align: left;
    }

    .cascader-item {
        position: absolute;
        top: 100%;
        left: 0;
    }

</style>