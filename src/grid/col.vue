<template>
    <div class="z-col" :class="classStyle" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            span: { type: [Number, String] },
            offset: { type: [Number, String] },
            ipad: { type: Object },
            pc: { type: Object }
        },
        data() {
            return {
                gutter: 0
            }
        },
        methods: {
            computedSpanAndOffset(options, str="") {
                if (!options) {
                    return []
                }
                let array = []
                if (options.span) {
                    array.push(`col-${str}-${options.span}`)
                }
                if (options.offset || options.offset === 0) {
                    array.push(`col-${str}-offset-${options.offset}`)
                }
                return array
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px',
                }
            },
            classStyle() {
                let {span, offset, pc, ipad} = this
                let spanAndOffset = this.computedSpanAndOffset
                return [
                    span&&`col-${span}`, offset&&`col-offset-${offset}`,
                    ...spanAndOffset(pc, 'pc'),
                    ...spanAndOffset(ipad, 'ipad')
                ]
            }


        }
    }
</script>

<style lang="scss" scoped>
   .z-col {
       box-sizing: border-box;
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

       @media (min-width: 768px) {
           $class-prefix: col-ipad-;
           @for $n from 1 through 24 {
               &.#{$class-prefix}#{$n} {
                   width: ($n / 24) * 100%;
               }
           }
           $class-prefix: col-ipad-offset-;
           @for $n from 0 through 24 {
               &.#{$class-prefix}#{$n} {
                   margin-left: ($n / 24) * 100%;
               }
           }
       }
       @media (min-width: 1024px) {
           $class-prefix: col-pc-;
           @for $n from 1 through 24 {
               &.#{$class-prefix}#{$n} {
                   width: ($n / 24) * 100%;
               }
           }
           $class-prefix: col-pc-offset-;
           @for $n from 0 through 24 {
               &.#{$class-prefix}#{$n} {
                   margin-left: ($n / 24) * 100%;
               }
           }
       }

   }


</style>