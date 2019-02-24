document.addEventListener('click', (e) => {
   callbacks.forEach(item => {
      let {el, value} = item
      if (e.target === el || el.contains(e.target)) {
           return
      } else {
           value()
      }
   })
})

let callbacks = []
export default {
    bind(el, binding) {
        callbacks.push({el, value: binding.value})
    }
}