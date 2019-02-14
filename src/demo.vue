<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <z-carousel :selected.sync="selected" autoPlay arrowVisible>
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
        margin: 100px;
        .item {
            display: flex;;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            border: 1px solid green;
        }
    }
</style>
