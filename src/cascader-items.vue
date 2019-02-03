<template>
    <div class="cascader-wrapper">
        <div class="cascader">
            <div class="left">
                <div v-for="item in sourceItem" @click="leftSelected = item" class="name">
                    {{item.name}}
                </div>
            </div>
            <div class="right-item" v-if="rightItems">
               <z-cascader-items :sourceItem="rightItems"></z-cascader-items>
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
                if (this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children
                } else {
                    return null
                }
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
        border: 1px solid $border-color-light;
        .name {
            white-space: nowrap;
        }
    }
</style>