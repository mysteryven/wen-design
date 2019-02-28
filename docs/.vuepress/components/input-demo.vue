<template>
    <div class="input-demo">
        <div>
            <z-input placeholder="正常" v-model="message"></z-input>
            {{message}}
        </div>
        <div>
            <z-input placeholder="禁用" disabled></z-input>
        </div>
        <div>
            <z-input placeholder="只读" read-only value="我是只读"></z-input>
        </div>
        <div>
            <z-input placeholder="错误信息在默认位置" error-position="right" error="错误信息"></z-input>
        </div>
       <div>
           <z-input placeholder="错误信息在下方" error-position="bottom" error="错误信息"></z-input>
       </div>

    </div>
</template>
<script>
    import ZInput from '../../../src/input'

    export default {
        name: 'InputDemo',
        components: {ZInput},
        data() {
            return {
                message: 'Hi, ZUI!'
            }

        }
    }
</script>
<style lang="scss" scoped>
    .input-demo  {
        margin-top: 32px;
        & > div {
            margin-bottom: 16px;
        }
    }
</style>