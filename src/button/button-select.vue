<template>
    <div class="z-button-select"  v-click-out-side="close">
        <z-button class="z-button" :class="{'z-button-active': arrowVisible}"  @click="arrowVisible = !arrowVisible">
            <span>{{current}}</span>
            <z-icon name="down"></z-icon>
        </z-button>
        <transition name="fade">
            <ul v-if="arrowVisible">
                <li v-for="item in lists" @click="setItem(item)">{{item}}</li>
            </ul>
        </transition>

    </div>
</template>
<script>

    import Icon from '../icon'
    import Button from './button'
    import ClickOutSide from '../click-outside'

    export default {
        components: {
            'ZButton': Button,
            'ZIcon': Icon
        },
        props: {
          lists: {
              type: Array
          },
          current: {
              type: String
          }
        },
        data: function () {
            return {
                arrowVisible: false
            }
        },
        mounted() {
            if (!this.current) {
                this.current = this.list[0]
            }
        },
        directives: {ClickOutSide},
        methods: {
            setItem(newValue){
                this.arrowVisible = false
                this.$emit('update:current', newValue)
            },
            close() {
                this.arrowVisible = false
            }

        }
    }
</script>
<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $border-color: #999;
    $button-active-bg: #eee;
    $button-border-radius: 4px;
    $color: #333;
    $border-color-hover: #666;
    $button-disable-bg: #d8d8d8;
    $button-disable-color: #aaaaaa;

    ul, li {margin: 0; list-style: none; padding: 0;}
    .z-button-select {
        display: inline-flex;
        position: relative;
        .z-button-active .z-icon {
            transform: rotate(90deg);
        }
        .z-button-content {
            display: flex;
            justify-content: center;
            align-items: center;
            .z-icon {
                width: 1.2em;
                height: 1em;
                margin-left: 4px;
                position: relative;
                top: 1px;
                transition: transform 0.3s;
            }
        }
        ul {
            z-index: 10;
            position: absolute;
            word-break: keep-all;
            padding-top: 10px;
            top: 130%;
            left: 0px;
            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
            font-size: $font-size;
            border-radius: $button-border-radius;
            background: white;
            &::before {
                content: '';
                position: absolute;
                background-color: white;
                width: 10px;
                height: 10px;
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
                transform: rotate(45deg);
                top: -4px;
                left: 16%;
            }
            &::after {
                content: '';
                width: 16px;
                height: 8px;
                position: absolute;
                background-color: white;
                top: 0%;
                left: 14%;
                z-index: 2;
            }
            li {
                padding: 0.2em 4em 0.5em 1em;
                &:hover {
                    background: $button-active-bg;
                }
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>