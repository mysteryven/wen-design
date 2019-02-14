<template>
    <div id="app">
       <z-slides :selected="selected">
           <z-slides-item name="1"> 1 </z-slides-item>
           <z-slides-item name="2"> 2 </z-slides-item>
           <z-slides-item name="3"> 3 </z-slides-item>
       </z-slides>
    </div>
</template>
<script>
    import zSlides from './slides'
    import zSlidesItem from './slides-item'

    export default {
        name: 'demo',
        components: {zSlides, zSlidesItem},
        data() {
            return {
                selected: '1'
            }
        },
        mounted() {
            setTimeout(()=> {
                this.selected = '2'
            }, 3000)
        }

    }
</script>
<style>
    #app {
        margin: 100px;
    }
</style>
