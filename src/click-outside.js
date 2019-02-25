document.addEventListener('click', listenToClick)

function listenToClick(e) {
    callbacks.forEach(item => {
        let {el, value} = item
        if (e.target === el || el.contains(e.target)) {
            return
        } else {
            value()
        }
    })
}

let callbacks = []
export default {
    bind(el, binding) {
        callbacks.push({el, value: binding.value})
    },
    unbind(el) {
        callbacks.forEach((item, index) => {
            if (el === item.el || el.contains(item.el)) {
                callbacks.splice(index, 1)
                document.removeEventListener('click', listenToClick)
                document.addEventListener('click', listenToClick)
            }
        })
    }
}