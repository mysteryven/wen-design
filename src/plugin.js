import Toast from './toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {

            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                pro
            })
        }
    }
}