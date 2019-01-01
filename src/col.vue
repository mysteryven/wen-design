<template>
    <div class="z-col" :class="[span&&`col-${span}`, offset&&`col-offset-${offset}`]" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px',
                }
            }

        }
    }
</script>

<style lang="scss" scoped>
   .col {
       $class-prefix: col-;
       background: transparent;
       @for $n from 1 through 24 {
           &.#{$class-prefix}#{$n} {
               width: ($n / 24) * 100%;
           }
       }
       $class-prefix: col-offset-;
       @for $n from 1 through 24 {
           &.#{$class-prefix}#{$n} {
               margin-left: ($n / 24) * 100%;
           }
       }
   }


</style>