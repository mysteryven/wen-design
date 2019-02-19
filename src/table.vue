<template>
    <div class="z-table-wrapper">
        <table class="z-table" :class="{bordered, striped, [`${size}`]: true}">
            <thead>
            <tr>
                <th v-for="column in columns">{{column.name}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="source in dataSource">
                <td v-for="column in columns">{{source[column.field]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ZTable",
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
                    return value === 'middle' || value === 'small' || value === "big";
                }
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
            &.small{
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
                    border-bottom: 1px solid $border-color-light;
                }
            }
            > tbody {
                tr {
                    border-bottom: 1px solid $border-color-light;
                    &:hover {
                        background-color: $blue-light;
                        cursor: pointer;
                    }
                }
            }
        }
        .z-table.bordered {
            border-top: 1px solid $border-color-light;
            border-right: 1px solid $border-color-light;
            td {
                border-left: 1px solid $border-color-light;
            }
            th {
                border-left: 1px solid $border-color-light;
            }
        }

        .z-table.striped tbody{
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