<template>
    <div class="cascader-wrapper">
        <div class="trigger" @click="cascaderVisible = !cascaderVisible">
            <slot></slot>
        </div>
        <cascader-items class="cascader-item" :sourceItem="options"
                        v-show="cascaderVisible" @update:selected="onUpdateSelected"
                        :selected="selected" :loadData="loadData"></cascader-items>
    </div>
</template>
<script>
    import CasCaderItems from './cascader-items'

    export default {
        name: 'ZCascader',
        props: {
            source: {
                type: Array,
                default: () => []
            },
            options: {
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
        data() {
            return {
                cascaderVisible: false
            }
        },
        mounted() {
        },
        methods: {
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
                }

                if (!lastItem.isLeaf) {
                    this.loadData && this.loadData(lastItem, updateSource)
                }
            },
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