<template>
    <div class="z-button-select">
        <z-button icon="down" icon-position="right" @click="isShow = !isShow">{{currentItem}}</z-button>
        <ul v-if="isShow">
            <li v-for="item in list" @click="setItem(item)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: ['list'],
        data: function () {
            return {
                currentItem: '',
                isShow: false
            }
        },
        created() {
            this.currentItem = this.list[0]
        },
        methods: {
            setItem(newValue){
                this.currentItem = newValue
                this.isShow = false
            }
        }
    }
</script>
<style lang="scss" scoped>
    ul, li {margin: 0; list-style: none; padding: 0;}
    .z-button-select {
        display: inline-flex;
        position: relative;
        ul {
            position: absolute;
            word-break: keep-all;
            padding-top: 6px;
            top: 130%;
            left: 0px;
            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
            font-size: var(--font-size);
            border-radius: var(--button-border-radius);
            background: white;
            &::before {
                content: '';
                position: absolute;
                background-color: white;
                width: 8px;
                height: 8px;
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                transform: rotate(45deg);
                top: -4%;
                left: 16%;
            }
            &::after {
                content: '';
                width: 12px;
                height: 7px;
                position: absolute;
                background-color: white;
                top: 0%;
                left: 14%;
                z-index: 2;
            }
            li {
                padding: 0.2em 4em 0.5em 1em;
                &:hover {
                    background: var(--button-active-bg);
                }
            }
        }
    }
</style>