<template>
    <div id="app">
       <z-carousel class="slides" :selected.sync="selected" autoPlay arrowVisible>
           <z-carousel-item class="item" name="1"> 1 </z-carousel-item>
           <z-carousel-item class="item" name="2"> 2 </z-carousel-item>
           <z-carousel-item class="item" name="3"> 3 </z-carousel-item>
       </z-carousel>
    </div>
</template>
<script>
    import zCarousel from './carousel'
    import zCarouselItem from './carousel-item'

    export default {
        name: 'demo',
        components: {zCarousel, zCarouselItem},
        data() {
            return {
                selected: '1'
            }
        },
        mounted() {

        }

    }
</script>
<style lang="scss">
    #app {
        .slides {
            width: 360px;
            height: 500px;
        }
        .item {
            display: flex;;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            border: 1px solid green;
        }
    }
</style>
