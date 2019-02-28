<template>
  <div>
    <z-carousel class="z-slides" :selected.sync="selected" :auto-play="true" :interval="3000" arrowVisible>
      <z-carousel-item class="z-item" name="1">1</z-carousel-item>
      <z-carousel-item class="z-item" name="2">2</z-carousel-item>
      <z-carousel-item class="z-item" name="3">3</z-carousel-item>
    </z-carousel>
  </div>
</template>
<script>
import ZCarousel from "../../../src/carousel/carousel.vue";
import ZCarouselItem from "../../../src/carousel/carousel-item.vue";
export default {
  components: { ZCarousel, ZCarouselItem },
  data() {
      return {
          selected: '1'
      }
  }
};
</script>
<style lang="scss" scoped>
    .z-slides {
        width: 100%;
        height: 300px;
        .z-item {
            background-color: #364d79;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
        }

    }
</style>


