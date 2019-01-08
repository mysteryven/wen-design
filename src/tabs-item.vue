<template>
    <div class="tabs-item" :class="classes" @click="switchTab">
        {{custom}}
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "z-tabs-item",
        inject: ['eventBus'],
        props: {
            name: {
                type: String | Number,
                required: true
            },
            activeClass: String
        },
        data() {
            return {
                active: false
            }
        },
        created() {
            this.eventBus.$on('update:selected', (item) => {
                this.active = this.name === item
            })
        },
        methods: {
            switchTab() {
                this.eventBus.$emit('update:selected', this.name, this)
            }
        },
        computed: {
            classes() {
                let activeClass = this.activeClass
                return {
                    active: this.active && !this.custom,
                    [activeClass]: this.active
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>