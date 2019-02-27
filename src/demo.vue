<template>
    <div>
        <div class="toast-demo"><z-button @click="showToastMiddle">出现在页面中间</z-button></div>
        <div class="toast-demo"><z-button @click="showToastTop">出现在页面顶部</z-button></div>
        <div class="toast-demo"><z-button @click="showToastBottom">出现在页面底部</z-button></div>
        <div class="toast-demo"><z-button @click="showToastClose">带关闭按钮，点击可执行操作</z-button></div>
        <div class="toast-demo"><z-button @click="showToastClose2">不带关闭按钮，也可在关闭后执行操作</z-button></div>
    </div>

</template>
<script>
    import Button from "./button/button";

    export default {
        components: { ZButton: Button },
        mounted() {},
        methods: {
            showToastMiddle() {
                this.$toast('谢谢使用!', {
                    position: 'middle'
                })
            },
            showToastTop() {
                this.$toast('谢谢使用!', {
                    position: 'top'
                })
            },
            showToastBottom() {
                this.$toast('谢谢使用!', {
                    position: 'bottom'
                })
            },
            showToastClose() {
                this.$toast('谢谢使用!', {
                    position: 'middle',
                    autoClose: false,
                    closeButton: {
                        text: '关闭',
                        callback() {
                            alert('click close button')
                        }
                    }
                })
            },
            showToastClose2() {
                this.$toast('谢谢使用!', {
                    position: 'middle',
                    closedCallback() {
                        alert('我关闭了')
                    }
                })
            }
        }
    };
</script>
<style>
    .toast-demo {
        margin-top: 32px;
    }
</style>
