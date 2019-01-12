<template>
    <div class="popover" ref="popover">
        <div class="content" ref="content" v-if="visible">
            <slot name="content"> </slot>
        </div>
        <div ref="trigger">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'zPopover',
        data() {
           return {
               visible: false
           }
        },
        props: {
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                   return ['click', 'hover', 'focus'].indexOf(value) !== -1
                }
            }
        },
        computed: {

        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.trigger.addEventListener('click', () => {
                    this.onClick()
                })
            } else if (this.trigger === 'hover') {
                this.$refs.popover.addEventListener('mouseenter', this.onHoverOpen)
                this.$refs.popover.addEventListener('mouseleave', this.onHoverClose)
            } else if (this.trigger === 'focus') {
                this.$refs.trigger.addEventListener('mousedown', () => {
                    this.visible = true
                })
                this.$refs.trigger.addEventListener('mouseup', () => {
                    this.visible = false
                })
            }


        },
        methods: {
            onClick() {
                if (this.visible !== true) {
                    this.open()
                } else {
                    this.close()
                }
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    document.body.addEventListener('click', this.onDocumentClick)
                })
            },
            close() {
                this.visible = false
                document.body.removeEventListener('click', this.onDocumentClick)
            },
            onDocumentClick(e) {
                let {trigger, content, popover} = this.$refs
                if (this.$refs && (trigger.contains(e.target) || trigger === e.target)) {
                    console.log('trigger click')
                    return
                } else if (this.$refs && (content === e.target || trigger.contains(e.target))) {
                    console.log('content click')
                    return
                }
                this.close()
                console.log('document click')
            },
            onHoverOpen() {
                console.log(1)
                this.visible = true
            },
            onHoverClose() {
                this.visible = false
            }

        }
    }
</script>
<style scoped lang="scss">
    .popover {
        display: inline-block;
        position: relative;
        .content {
           border: 1px solid red;
           position: absolute;
           bottom: 100%;
       }
    }

</style>