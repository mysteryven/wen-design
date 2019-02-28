<template>
    <div class="z-cascader-wrapper" v-click-out-side="close">
        <div class="z-trigger" @click="cascaderVisible = !cascaderVisible">
            <slot></slot>
        </div>
        <cascader-items class="z-cascader-item" :sourceItem="source"
                        @update:selected="onUpdateSelected"
                        :selected="selected" :load-data="loadData"
                        :loading-item="loadingItem"
                        @closecascader="close" v-show="cascaderVisible"
        ></cascader-items>
    </div>
</template>
<script>
    import CasCaderItems from './cascader-items'
    import ClickOutSide from '../click-outside'

    export default {
        name: 'ZCascader',
        data() {
            return {
                loadingItem: null,
                cascaderVisible: false
            }
        },
        directives: {ClickOutSide},
        props: {
            source: {
                type: Array,
                default: ()=>[]
            },
            selected: {
                type: Array,
                default: () => []
            },
            loadData: {
                type: Function
            }
        },
        components: {
            'cascaderItems': CasCaderItems
        },
        methods: {
            close() {
                this.cascaderVisible = false
            },

            onUpdateSelected(e) {
                this.$emit('update:selected', e)
                let lastItem = e[e.length-1]

                let found = null

                let findParent = function(id, array) {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i].id === id) {
                            found = array[i]
                            break
                        } else if(!array[i].children) {
                        } else {
                            findParent(id, array[i].children)
                        }
                    }
                }
                let copy = JSON.parse(JSON.stringify(this.source))
                findParent(lastItem.id, copy)
                let updateSource = (result) => {
                    found.children = result
                    this.$emit('update:source', copy)
                    this.loadingItem = null
                }

                if (!lastItem.isLeaf && this.loadData) {
                    this.loadData(lastItem, updateSource)
                    this.loadingItem = lastItem
                }
            },
        }

    }
</script>

<style lang="scss" scoped>
    div{
        box-sizing: border-box;
    }
    .z-cascader-wrapper {
        display: inline-block;
        position: relative;
        box-shadow: 0px 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .z-trigger {
        text-align: left;
    }

    .z-cascader-item {
        margin-top: 4px;
        position: absolute;
        top: 100%;
        left: 0;
    }

</style>