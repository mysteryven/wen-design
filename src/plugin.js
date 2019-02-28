import Toast from './toast'

let previousToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            let toast = createToast(Vue, message, toastOptions)
            if (previousToast) {
                previousToast.close()
                previousToast = toast
            } else {
                previousToast = toast
            }
        }
    }
}

function createToast(Vue, message, options={}) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
        propsData: options
    })
    toast.$slots.default = [message]
    toast.$mount()
    if (options.closedCallback) {
        toast.$on('close', options.closedCallback)
    }
    document.body.appendChild(toast.$el)
    return toast
}