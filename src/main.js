import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// 创建事件总线
const eventBus = new Vue()
Vue.prototype.$eventBus = eventBus

// 图片懒加载
import Vuelazyload from 'vue-lazyload'
Vue.use(Vuelazyload, {
        loading: require('./assets/img/main/lazyload.gif')
    })
    // 引入全局样式
require('@/assets/css/base.css')