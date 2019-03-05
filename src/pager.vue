<template>
    <div class="z-pager">
        <span class="z-icon-wrapper" :class="{disabled: prevDisabled}" @click="prevClick">
                <z-icon class="z-icon" name="left"></z-icon>
            </span>
        <template v-for="item in pages">
            <span class="z-item-ellipsis " v-if="item === '...'">
                <z-icon class="z-icon" name="dots"></z-icon>
            </span>
            <span v-else class="z-pager-number"
                  :class="{active: current === item}"
                  @click="changeCurrent(item)"
            >{{item}}</span>
        </template>
        <span class="z-icon-wrapper" :class="{disabled: nextDisabled}" @click="nextClick">
                <z-icon class="z-icon" name="right"></z-icon>
        </span>

    </div>
</template>

<script>
    import zIcon from './icon'

    export default {
        name: "ZPager",
        components: {zIcon},
        props: {
            total: {
                type: Number,
                required: true
            },
            current: {
                type: Number,
                required: true
            }
        },
        computed: {
            pages() {
                let tempPages = [1, this.total,
                    this.current, this.current - 1,
                    this.current - 2, this.current + 1, this.current + 2]
                if (this.current === 1)
                    tempPages = [1, 2, 3, 4, this.total]

                let pages = tempPages.sort((a, b) => a - b).filter(item => item > 0 && item <= this.total)

                return pages.reduce((prev, current, index, array) => {
                    if (index > 0 && current === array[index - 1]) {
                        return prev
                    }
                    prev.push(current)
                    if (array[index + 1] && array[index + 1] - current > 2) {
                        prev.push('...')
                    }
                    return prev
                }, [])
            },
            prevDisabled() {
                return this.current === 1
            },
            nextDisabled() {
                return this.current === this.total
            }

        },
        methods: {
            changeCurrent(number) {
                this.$emit('update:current', number)
            },
            prevClick() {
                if (this.current === 1) {
                    return
                }
                this.changeCurrent(this.current - 1)
            },
            nextClick() {
                console.log(1)
                console.log(this.current)
                console.log(this.total)
                if (this.current === this.total) {
                    return
                }
                this.changeCurrent(this.current + 1)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'var';

    .z-pager {
        font-size: 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-number {
            border: 1px solid lighten($border-color, 20%);
            margin: 4px;
            cursor: pointer;
            min-width: 32px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: $border-radius;

            &:hover, &.active {
                border-color: $blue;
            }
        }

        .z-item-ellipsis {
            min-width: 32px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .z-item-ellipsis .z-icon, .z-icon-wrapper .z-icon {
            width: 16px;
            height: 16px;
            fill: $grey;
        }

        .z-icon-wrapper {
            border: 1px solid lighten($border-color, 20%);
            margin: 4px;
            cursor: pointer;
            min-width: 32px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: $border-radius;

            &:hover, &.active {
                border-color: $blue;
            }

            &.disabled {
                border-color: lighten($border-color, 20%);
                cursor: not-allowed;
            }
        }

    }
</style>