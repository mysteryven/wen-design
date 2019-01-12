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
               visible: true
           }
        },
        mounted() {
            this.$refs.trigger.addEventListener('click', () => {
                this.onClick()
            })
            document.body.addEventListener('click', (e) => {
                let {trigger, content, popover} = this.$refs
                if (this.$refs && (trigger.contains(e.target) || trigger === e.target)) {
                    console.log(1)
                    return
                }
                console.log('document be clicked')
            })

        },
        methods: {
            onClick() {
                this.visible = !this.visible
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