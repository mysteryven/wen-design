<template>
    <div class="cascader-wrapper">
        <div class="trigger" @click="cascaderVisible = !cascaderVisible">
            <slot></slot>
        </div>
        <cascader-items class="cascader-item" :sourceItem="options"
                        v-show="cascaderVisible" @update:selected="onUpdateSelected" :selected="selected"></cascader-items>
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
            },
            selected: {
                type: Array,
                default: () => []
            }
        },
        components: {
            'cascaderItems': CasCaderItems
        },
        data() {
            return {
                cascaderVisible: false
            }
        },
        mounted() {
            console.log(this.options)
        },
        methods: {
            onUpdateSelected(e) {
                this.$emit('update:selected', e)
            }
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