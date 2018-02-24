import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    data: [
        {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        },
        {
            date: '2016-01-12',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        },
        {
            date: '2016-12-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        },
        {
            date: '2016-01-09',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }
    ],
    columns: [
        {
            label: '日期',
            prop: 'date'
        },
        {
            label: '姓名',
            prop: 'name'
        },
        {
            label: '省份',
            prop: 'province'
        },
        {
            label: '市区',
            prop: 'city'
        },
        {
            label: '地址',
            prop: 'address'
        },
        {
            label: '邮编',
            prop: 'zip'
        }
    ]
}


// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
