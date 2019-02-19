<template>
    <div class="z-table-wrapper">
        <table class="z-table" :class="{bordered, striped, [`${size}`]: true}">
            <thead>
            <tr>
                <th class="z-table-input-th" v-if="selectedItems">
                    <div class="z-table-input-wrapper" :class="{checked: selectAll, indeterminate: indeterminate}"
                         @click="onClickAll"></div>
                </th>
                <th v-for="column in columns" :key="column.field">
                    <div class="z-table-field-wrapper">
                        <div>{{column.name}}</div>
                        <div class="icon-group" @click="changeSortRule(column.field)" v-if="sortDirections[column.field]">
                            <z-icon name="up-solid"
                                    :class="{active: sortDirections[column.field] ==='asc'}"></z-icon>
                            <z-icon name="down-solid"
                                    :class="{active: sortDirections[column.field] ==='desc'}"></z-icon>
                        </div>
                    </div>

                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="source in dataSource" :key="source.id">
                <td class="z-table-input-td" v-if="selectedItems">
                    <div class="z-table-input-wrapper" :class="{checked: isChecked(source.id)}"
                         @click="onClickCheckBox(source)">
                    </div>
                </td>

                <td v-for="column in columns" :key="column.field">{{source[column.field]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ZIcon from './icon'

    export default {
        name: "ZTable",
        components: {ZIcon},
        props: {
            columns: {
                type: Array,
            },
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
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return value === 'middle' || value === 'small' || value === "big"
                }
            },
            selectedItems: {
                type: Array
            },
            sortDirections: {
                type: Object
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
                } else if (copy[field] === 'desc'){
                    copy[field] = true
                } else if (copy[field] === true){
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
        .z-table {
            border-radius: $border-radius;
            width: 100%;
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

    }
</style>