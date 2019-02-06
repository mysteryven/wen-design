<template>
    <div class="cascader-wrapper">
        <div class="cascader">
            <div class="left">
                <div v-for="item in sourceItem" @click="onClickLabel(item)" class="name">
                    {{item.name}}
                </div>
            </div>
            <div class="right-item" v-if="rightItems">
               <z-cascader-items :sourceItem="rightItems"
                                 :level="level + 1" @update:selected="onUpdateSelected" :selected="selected"></z-cascader-items>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'ZCascaderItems',
        props: {
            sourceItem: {
                type: Array,
            },
            selected: {
                type: Array,
                default: () => []
            },
            level: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                leftSelected: {
                    type: Array,
                    default: []
                }
            }
        },
        computed: {
            rightItems() {
                if (this.selected && this.selected[this.level] && this.selected[this.level].children) {
                    return this.selected[this.level].children
                } else {
                    return null
                }
            }
        },
        methods: {
            onClickLabel(item) {
                console.log(JSON.stringify(item))
                let copySelected = JSON.parse(JSON.stringify(this.selected))
                copySelected[this.level] = item
                this.$emit('update:selected', copySelected)
            },
            onUpdateSelected(e) {
               this.$emit('update:selected', e)
            }
        }

    }
</script>
<style lang="scss" scoped>
    @import "var";

    .cascader{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: $border-radius;
        background: white;
    }
    .cascader-wrapper .left {
        padding: 0.1em 0.4em;
        margin-left: -1px;
        height: 100px;
        .name {
            white-space: nowrap;
        }
    }
    .right-item {
        border-left: 1px solid $border-color-light;
    }
</style>