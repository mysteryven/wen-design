<template>
    <div class="z-table-wrapper" ref="wrapper">
        <div class="z-table-wrapper2" ref="tableWrapper">
            <table class="z-table" :class="{bordered, striped, [`${size}`]: true}" ref="table">
                <thead ref="tableHeader">
                <tr>
                    <th class="z-table-input-th" v-if="selectedItems">
                        <div class="z-table-input-wrapper" :class="{checked: selectAll, indeterminate: indeterminate}"
                             @click="onClickAll"></div>
                    </th>
                    <th v-for="column in columns" v-if="columns.length > 0" :key="column.field" :style="{width: column.width+'px'}">
                        <div class="z-table-field-wrapper">
                            <div>{{column.name}}</div>
                            <div class="icon-group" @click="changeSortRule(column.field)"
                                 v-if="sortDirections && sortDirections[column.field]">
                                <z-icon name="up-solid"
                                        :class="{active: sortDirections[column.field] ==='asc'}"></z-icon>
                                <z-icon name="down-solid"
                                        :class="{active: sortDirections[column.field] ==='desc'}"></z-icon>
                            </div>
                        </div>
                    </th>
                    <template v-if="action">
                        <th ref="actionHeader" :style="{width: action.width + 'px'}">{{action.name}}</th>
                    </template>
                </tr>
                </thead>
                <tbody>
                <tr v-for="source in dataSource" :key="source.id">
                    <td class="z-table-input-td" v-if="selectedItems" style="">
                        <div class="z-table-input-wrapper" :class="{checked: isChecked(source.id)}"
                             @click="onClickCheckBox(source)">
                        </div>
                    </td>
                    <td v-for="column in columns" v-if="column.field" :key="column.field"
                        :style="{width: column.width+ 'px'}">
                        <template v-if="!column.render">
                            {{source[column.field]}}
                        </template>
                        <template v-else>
                            <v-node :vnode="column.render({value: source})"></v-node>
                        </template>
                    </td>
                    <template v-if="action">
                        <td class="random-operate}" :style="{width: action.width + 'px'}">
                            <div ref="action" style="display: inline-block">
                                <slot :source="source"></slot>
                            </div>
                        </td>
                    </template>

                </tr>
                </tbody>
            </table>
        </div>
        <div v-if="loading" class="z-table-loading">
            <z-icon name="loading"></z-icon>
        </div>
    </div>
</template>

<script>
    import ZIcon from '../icon'

    export default {
        name: "ZTable",
        components: {
            ZIcon,
            vNode: {
                functional: true,
                render: (h, context) => context.props.vnode
            }

        },
        data() {
            return {
                tableCopy: null,
                columns: []
            }
        },
        props: {
            dataSource: {
                type: Array,
                required: true
            },
            bordered: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: true
            },
            size: {
                type: String,
                default: 'big',
                validator(value) {
                    return value === 'middle' || value === 'small' || value === "big"
                }
            },
            selectedItems: {
                type: Array
            },
            sortDirections: {
                type: Object
            },
            height: {
                type: Number
            },
            action: {
                type: Object
            },
            loading: {
                type: Boolean,
                default: false
            }

        },
        mounted() {
            this.columns = this.$slots['z-column'].map(vNode => {
                let width, render
                if (!vNode.componentOptions.propsData) {
                    return
                }

                let {name, field} = vNode.componentOptions.propsData

                if (vNode.componentOptions.propsData.width) {
                    width = vNode.componentOptions.propsData.width
                }
                if (vNode.data.scopedSlots) {
                    render = vNode.data.scopedSlots.default
                }

                return {width, name, field, render}
            })

            if (this.height) {
                this.fixedHeader()
            }
        },
        beforeDestroy() {
            if (this.tableCopy) {
                this.tableCopy.remove()
            }

        },
        computed: {
            selectAll() {
                if (this.selectedItems.length !== this.dataSource.length) {
                    return false
                }
                const sourceIds = this.dataSource.map(item => item.id).sort((a, b) => a - b).join()
                const selectedIds = this.selectedItems.map(item => item.id).sort((a, b) => a - b).join()
                return sourceIds === selectedIds
            },
            indeterminate() {
                return this.selectedItems.length > 0 && this.selectedItems.length < this.dataSource.length
            }
        },
        methods: {
            fixedHeader() {
                let tableCopy = this.$refs.table.cloneNode(false)

                this.tableCopy = tableCopy
                let tableHeader = this.$refs.table.children[0]
                tableCopy.appendChild(tableHeader)
                tableCopy.classList.add('z-table-copy')
                this.$refs.tableWrapper.append(tableCopy)

                let {height} = tableHeader.getBoundingClientRect()

                this.$refs.tableWrapper.style.height = this.height - parseInt(height) + 'px'
                this.$refs.wrapper.style.paddingTop = height + 'px'
            },

            isChecked(id) {
                return this.selectedItems.filter(item => item.id === id).length !== 0
            },
            onClickCheckBox(item) {
                let copy = JSON.parse(JSON.stringify(this.selectedItems))
                if (this.isChecked(item.id)) {
                    copy = copy.filter(copyItem => copyItem.id !== item.id)
                } else {
                    copy.push(item)
                }
                this.$emit('update:selectedItems', copy)
            },
            onClickAll() {
                if (this.selectAll) {
                    this.$emit('update:selectedItems', [])
                } else {
                    let copy = JSON.parse(JSON.stringify(this.dataSource))
                    this.$emit('update:selectedItems', copy)
                }
            },
            changeSortRule(field) {
                let copy = JSON.parse(JSON.stringify(this.sortDirections))
                if (copy[field] === 'asc') {
                    copy[field] = 'desc'
                } else if (copy[field] === 'desc') {
                    copy[field] = true
                } else if (copy[field] === true) {
                    copy[field] = 'asc'
                }
                this.$emit('update:sortDirections', copy)
            }


        }

    }
</script>

<style scoped lang="scss">
    @import 'var';

    .z-table-wrapper {
        position: relative;
        .z-table-wrapper2 {
            overflow: auto;
        }
        .z-table {
            width: 100%;
            border-radius: $border-radius;
            border-collapse: collapse;
            border-spacing: 0;
            &.middle {
                td, th {
                    padding: 0.8em 2em;
                }
            }
            &.small {
                td, th {
                    padding: 0.5em 2em;
                }
            }
            td, th {
                text-align: left;
                padding: 1em 2em;
            }
            thead {
                tr {
                    background-color: lighten($grey, 38%);
                    border-bottom: $tb-border;
                }
            }
            tbody {
                tr {
                    border-bottom: $tb-border;
                    &:hover {
                        background-color: $blue-light;
                        cursor: pointer;
                    }
                }
            }

            .z-table-field-wrapper {
                display: flex;
                align-items: center;
                & .icon-group {
                    display: flex;
                    flex-direction: column;
                    margin-left: 2px;
                    > svg {
                        fill: $grey-light;
                        width: 0.6em;
                        height: 0.6em;
                        &.active {
                            fill: #333;
                        }
                    }
                }

            }

            &-input-wrapper {
                position: relative;
                cursor: pointer;
                display: inline-flex;
                border: 1px solid lighten($grey, 10%);
                width: 14px;
                border-radius: $border-radius;
                height: 14px;
                background-color: white;
                transition: all 0.15s linear;
                &:hover {
                    border-color: $blue;
                }

                &.checked {
                    background-color: $blue;
                    border-color: $blue;
                    &::after {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-64%) rotate(-45deg);
                        content: '';
                        display: block;
                        width: 8px;
                        height: 4px;
                        border-left: 2px solid #fff;
                        border-bottom: 2px solid #fff;
                    }
                }
                &.indeterminate {
                    background-color: $blue;
                    border-color: $blue;
                    &:after {
                        content: '';
                        display: block;
                        width: 10px;
                        height: 4px;
                        border-bottom: 2px solid #fff;
                        transform: rotate(0deg);
                        position: absolute;
                        margin-top: 2px;
                        margin-left: 2px;
                        top: 0%;
                        left: 0%;
                    }
                }
            }

        }
        .z-table-input-th, .z-table-input-td {
            width: 20px;
        }

        .z-table.bordered {
            border-top: $tb-border;
            border-right: $tb-border;
            td {
                border-left: $tb-border;
            }
            th {
                border-left: $tb-border;
            }
        }

        .z-table.striped tbody {
            tr:nth-child(odd) {
                background-color: white;
                &:hover {
                    background-color: $blue-light;
                }
            }
            tr:nth-child(even) {
                background-color: lighten(grey, 48%);
                &:hover {
                    background-color: $blue-light;
                }
            }

        }

        .z-table-copy {
            position: absolute;
            top: 0;
            left: 0;
        }
        .z-table-loading {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: rgba(255, 255, 255, 0.7);
            top: 0;
            left: 0;
            margin-left: -20px;
            svg {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -20px;
                margin-top: -20px;
                width: 40px;
                height: 40px;
                animation: spin 1.4s linear infinite;
            }
        }
    }
</style>