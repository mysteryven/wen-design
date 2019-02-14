import Vue from 'vue'
import Demo from './demo.vue'
import Meta from 'vue-meta'

Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
    render: h => h(Demo),
}).$mount('#app')