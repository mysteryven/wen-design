<template>
    <div class="button-group-demo">
        <z-button-group>
            <z-button icon="left">后退</z-button>
            <z-button>第 1 部分</z-button>
            <z-button>第 2 部分</z-button>
            <z-button icon="right" icon-position="right">前进</z-button>
        </z-button-group>
        <div class="interval"></div>
        <z-button-group>
            <z-button icon="upload"></z-button>
            <z-button icon="download"></z-button>
        </z-button-group>
    </div>

</template>
<script>

    import Button from '../../../../src/button/button'
    import ButtonGroup from '../../../../src/button/button-group'

    export default {
        components: {
            ZButton: Button,
            ZButtonGroup: ButtonGroup
        }
    }
</script>
<style lang="scss" scoped>
    .button-group-demo {
        margin-top: 32px;
        .interval {
            margin: 32px 0;
        }
    }
</style>