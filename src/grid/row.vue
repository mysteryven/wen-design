<template>
    <div class="z-row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            gutter: {
                type: [String, Number]
            },

        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {
                    'margin-left': -gutter / 2 + 'px',
                    'margin-right': -gutter / 2 + 'px'
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            } )
        }
    }
</script>

<style lang="scss" scoped>
    .z-row {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        background-color: transparent;
    }
</style>