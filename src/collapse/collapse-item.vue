<template>
    <div class="z-collapse-item" >
        <div class="z-head" @click="toggle">
            <div>{{title}}</div>
            <z-icon name="left" class="z-arrow" :class="{active: open}"></z-icon>
        </div>
        <transition  @enter="enter" @leave="leave"  @after-leave="afterLeave"
                        @after-enter="afterEnter">
            <div class="z-content" v-show="open">
                <slot></slot>
            </div>
        </transition>  
        
    </div>
</template>

<script>
    import Icon from '../icon'

    export default {
        components: {
            'z-icon': Icon
        },
        name: "z-collapse-item",
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
            }
        },
        inject: ['eventBus'],
        data() {
            return {
                open: false
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (selectedArray)=> {
                console.log(selectedArray)
                if (selectedArray.indexOf(this.name) !== -1) {
                    this.openItem()
                }
            })
        },

        methods: {
            toggle() {
                this.open = !this.open
                if (this.open === true) {
                    console.log(1)
                    this.eventBus.$emit('update:add', this.name)
                }
                if (this.open === false) {
                    this.eventBus.$emit('update:remove', this.name)
                }
            },
            openItem() {
                this.open = true
            },
            enter(el, done) {
                let {height} = el.getBoundingClientRect()
                el.style.height = 0
                el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterEnter (el) {
                el.style.height = 'auto'
            },
            
            leave: function (el, done) {
                let {height} = el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.style.paddingBottom = 0
                el.getBoundingClientRect()
                el.style.height = 0
               
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterLeave: function (el) {
                el.style.height = 'auto'
                 el.style.paddingBottom = '8px' 
            },
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #ebeef5;
    div {box-sizing: border-box}
    .z-collapse-item {
        border-bottom: 1px solid $border-color;
        &:first-child {
            border-top: 1px solid $border-color;
        }
        .z-head {
            min-height: 48px;
            align-items: center;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            font-weight: 500;
            .z-arrow {
                transition: transform 0.4s ease;
                transform: rotate(180deg);
                &.active {
                    transform: rotate(270deg);
                }
            }
        }
        .z-content {
            padding-bottom: 8px;
            overflow: hidden;
            transition: height 0.4s ease;
        }
        
    }
</style>