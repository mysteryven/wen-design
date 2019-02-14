<template>
    <transition name="z-slide">
        <div class="z-carousel-item" v-show="itemVisible">
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
            }
        },
        data() {
            return {
                selected: null
            }
        },
        computed: {
            itemVisible() {
                return this.selected === this.name
            }
        }
    }
</script>

<style scoped lang="scss">
    .z-carousel-item {
        width: 100%;
        min-height: 160px;
        border: 1px solid red;
    }

    .z-slide-leave-active {
        transition: all 3s;
        position: absolute;
        top: 0;
        left: 0;
    }

    .z-slide-enter-active {
        transition: all 3s;
    }

    .z-slide-enter {
        transform: translateX(100%);
    }

    .z-slide-leave-to {
        transform: translateX(-100%);
    }


</style>