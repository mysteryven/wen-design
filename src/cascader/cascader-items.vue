<template>
    <div class="z-cascader-wrapper">
        <div class="z-cascader">
            <div class="z-left">
                <div v-for="item in sourceItem" @click="onClickLabel(item)" class="name">
                    <span class="detail">{{item.name}}</span>
                    <div class="icons">
                        <template v-if="loadingItem && loadingItem.name === item.name">
                            <z-icon name="loading" class="loading" v-if="rightArrowVisible(item)"></z-icon>
                        </template>
                        <template v-else>
                            <z-icon name="right" class="icon" v-if="rightArrowVisible(item)"></z-icon>
                        </template>
                    </div>
                </div>
            </div>
            <div class="z-right-item" v-if="rightItems">
                <z-cascader-items :sourceItem="rightItems"
                                  :level="level + 1" @update:selected="onUpdateSelected"
                                  :selected="selected"
                                  :load-data="loadData"
                                  :loading-item="loadingItem"
                                  @closecascader="closeCascader"
                ></z-cascader-items>
            </div>
        </div>
    </div>

</template>
<script>
    import Icon from '../icon'
    export default {
        name: 'ZCascaderItems',
        components: {
            'z-icon': Icon
        },
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
            },
            loadData: {
                type: Function,
            },
            loadingItem: {
                type: Object
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
                if (this.selected[this.level]) {
                    let selected = this.sourceItem.filter(item => {
                        return item.name === this.selected[this.level].name
                    })
                    if (selected && selected[0].children && selected[0].children.length > 0) {
                        return selected[0].children
                    }
                }
            }
        },
        methods: {
            closeCascader() {
                this.$emit('closecascader', true)
            },
            onClickLabel(item) {
                if (!this.rightArrowVisible(item)) {
                   this.closeCascader()
                }
                let copySelected = JSON.parse(JSON.stringify(this.selected))
                copySelected[this.level] = item
                copySelected.splice(this.level + 1)
                this.$emit('update:selected', copySelected)

            },
            onUpdateSelected(e) {
                this.$emit('update:selected', e)
            },
            rightArrowVisible(item) {
               return this.loadData ? !item.isLeaf : item.children
            }

        }

    }
</script>
<style lang="scss" scoped>
    @import "var";

    .z-cascader {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: $border-radius;
        background: white;
    }

    .z-cascader-wrapper .z-left {
        margin-left: -1px;
        height: 160px;
        overflow: auto;
        .name {
            white-space: nowrap;
            display: flex;
            align-items: center;
            padding: 0.4em 1em;
            cursor: pointer;
            &:hover {
                background-color: $blue-light;
            }
            .detail {
                margin-right: 0.6em;
            }
            .icons {
                display: flex;
                align-items: center;
                margin-top: -1px;
            }
            .icon {
                margin-left: auto;
                transform: scale(0.6);
            }
            .loading {
                animation: spin 2.1s linear infinite;
                transform: scale(0.4);
            }
        }

    }

    .z-right-item {
        border-left: 1px solid $border-color-light;

    }
</style>