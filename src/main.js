import Vue from 'vue'
import Demo from './demo.vue'
import  Plugin from "./plugin";

Vue.use(Plugin);

Vue.config.productionTip = false

new Vue({
    render: h => h(Demo),
}).$mount('#app')