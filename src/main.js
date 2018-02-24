import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"
import store from "./vuex/store.js"
Vue.use(Vuex)

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import '../static/common.css'

// 路由验证
// router.beforeEach((to, from, next) => {
// 	//NProgress.start();
// 	if (to.path == '/login') {
// 		sessionStorage.removeItem('user');
// 	}
// 	let user = JSON.parse(sessionStorage.getItem('user'));
// 	if (!user && to.path != '/login') {
// 		next({
// 			path: '/login'
// 		})
// 	} else {
// 		next()
// 	}
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
