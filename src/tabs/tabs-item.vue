<template>
    <div :data-name="name" :data-active="activeName" class="tabs-item" :class="classes" @click="switchTab">
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
                let active = this.activeClass ? this.activeClass : 'active'
                return {
                    [active]: this.active
                }
            },
            activeName()  {
                return this.activeClass ? this.activeClass : 'active'
            }
        }
    }
</script>

<style scoped lang="scss">

    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: #5291d2;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>