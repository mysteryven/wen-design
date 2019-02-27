<template>
    <div class="toast-demo">
        <z-button>点击我</z-button>
    </div>
</template>
<script>
    import ZButton from '../../../src/button/button'
    import toast from '../../../src/plugin'

    export default {
        components: {ZButton},
        mounted() {
            toast.install(Vue)
        }
    }
</script>
<style>
    .toast-demo {
        margin-top: 32px;
    }
</style>