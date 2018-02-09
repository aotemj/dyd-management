import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/login.vue"
import home from '../components/home.vue'

// home子组件
// 用户提现审核组件
import userUnDeposit from "../components/subcom/check/userUnDeposit.vue"

// 商户审核组件
import merchant from "../components/subcom/check/merchant.vue"

// 产品审核组件
import product from "../components/subcom/check/product.vue"

//商户提现审核
import merchantUnDeposit from "../components/subcom/check/merchantUnDeposit.vue"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'homepage',
            component:home,
            children: [
                {
                    path: '/home/userUnDeposit',//用户提现审核
                    component:userUnDeposit
                },
                {
                    path: '/home/merchant',//商户审核
                    component:merchant
                },
                {
                    path: '/home/product',//产品审核
                    component:product
                },
                {
                    path: '/home/merchantUnDeposit',//商户提现审核
                    component:merchantUnDeposit
                }
            ]
        },
        {
            path: '',
            name: '',
        }
    ]
})