<template>
    <div class="collapse-item" @click="toggle">
        <div class="head">
            <div>{{title}}</div>
            <z-icon name="left" class="arrow" :class="{active: open}"></z-icon>
        </div>
        <div class="content" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    import Icon from './icon'

    export default {
        components: {
            'z-icon': Icon
        },
        name: "z-collapse-item",
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
            }
        },
        inject: ['eventBus'],
        data() {
            return {
                open: false
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (selectedArray)=> {
                console.log(selectedArray)
                if (selectedArray.indexOf(this.name) !== -1) {
                    this.openItem()
                }
            })
        },

        methods: {
            toggle() {
                this.open = !this.open
                if (this.open === true) {
                    console.log(1)
                    this.eventBus.$emit('update:add', this.name)
                }
                if (this.open === false) {
                    this.eventBus.$emit('update:remove', this.name)
                }
            },
            openItem() {
                this.open = true
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #ebeef5;

    .collapse-item {
        &:first-child {
            border-top: 1px solid $border-color;
        }
        border-bottom: 1px solid $border-color;
        .head {
            min-height: 48px;
            align-items: center;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            font-weight: 500;
            .arrow {
                transform: rotate(180deg);
                &.active {
                    transform: rotate(270deg);
                }
            }
        }
        .content {
            padding-bottom: 20px;
        }
    }
</style>