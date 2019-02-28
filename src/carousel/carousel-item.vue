<template>
    <transition name="z-slide">
        <div class="z-carousel-item" v-show="itemVisible" :class="{reverse, 'no-reverse': !reverse}">
            <slot></slot>
        </div>
    </transition>

</template>

<script>
    export default {
        name: "ZCarouselItem",
        props: {
            name: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                selected: null,
                reverse: false
            }
        },
        computed: {
            itemVisible() {
                return this.selected === this.name
            },
        }
    }
</script>

<style scoped lang="scss">
    @import 'var';

    .z-carousel-item {
        background-color: #364d79;
        width: 100%;
        height: 100%;
    }

    .z-item-not-first-in {
        .z-slide-leave-active {
            transition: all 2s;
            position: absolute;
            top: 0;
        }

        .z-slide-enter-active {
            transition: all 2s;
        }

        .z-slide-enter {
            transform: translateX(100%);
        }

        .z-slide-leave-to {
            transform: translateX(-100%);
        }

        .z-slide-leave-active.reverse {
            right: 0;
        }
        .z-slide-leave-active.no-reverse {
            left: 0;
        }

        .z-slide-enter.reverse {
            transform: translateX(-100%);
        }

        .z-slide-leave-to.reverse {
            transform: translateX(100%);
        }
    }



</style>