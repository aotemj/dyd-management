import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
  isShow:true,
  data: [
    {
      date: '2016-01-03 18:30:35', //提现时间
      name: '扬州茶楼', //商家名称
      address: '扬州市浦江东路', //商家地址
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
      user: '小明', //使用用户
      }, {
      date: '2016-12-31 18:30:35', //提现时间
      name: '重庆鱼火锅', //商家名称
      address: '重庆市苑北路1号附4号', //商家地址
      amount: 810.90, //提现金额
      withdrawalWay: '微信', //提现方式
      status: '已完成', //状态
      user: '小红', //使用用户
    }, {
      date: '2016-02-08 18:30:35', //提现时间
      name: '重庆鱼火锅02', //商家名称
      address: '重庆市苑北路1号附14号', //商家地址
      amount: 180.10, //提现金额
      withdrawalWay: '银行卡', //提现方式
      status: '提现中', //状态
      user: '小丽', //使用用户
    }, {
      date: '2016-01-03 18:30:35', //提现时间
      name: '扬州茶楼', //商家名称
      address: '扬州市浦江东路', //商家地址
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
      user: '小明', //使用用户
    }, {
      date: '2016-12-31 18:30:35', //提现时间
      name: '重庆鱼火锅', //商家名称
      address: '重庆市苑北路1号附4号', //商家地址
      amount: 810.90, //提现金额
      withdrawalWay: '微信', //提现方式
      status: '已完成', //状态
      user: '小红', //使用用户
    }, {
      date: '2016-02-08 18:30:35', //提现时间
      name: '重庆鱼火锅02', //商家名称
      address: '重庆市苑北路1号附14号', //商家地址
      amount: 180.10, //提现金额
      withdrawalWay: '银行卡', //提现方式
      status: '提现中', //状态
      user: '小丽', //使用用户
    }, {
      date: '2016-01-03 18:30:35', //提现时间
      name: '扬州茶楼', //商家名称
      address: '扬州市浦江东路', //商家地址
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
      user: '小明', //使用用户
    }, {
      date: '2016-12-31 18:30:35', //提现时间
      name: '重庆鱼火锅', //商家名称
      address: '重庆市苑北路1号附4号', //商家地址
      amount: 810.90, //提现金额
      withdrawalWay: '微信', //提现方式
      status: '已完成', //状态
      user: '小红', //使用用户
    }, {
      date: '2016-02-08 18:30:35', //提现时间
      name: '重庆鱼火锅02', //商家名称
      address: '重庆市苑北路1号附14号', //商家地址
      amount: 180.10, //提现金额
      withdrawalWay: '银行卡', //提现方式
      status: '提现中', //状态
      user: '小丽', //使用用户
    }, {
      date: '2016-01-03 18:30:35', //提现时间
      name: '扬州茶楼', //商家名称
      address: '扬州市浦江东路', //商家地址
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
      user: '小明', //使用用户
    }, {
      date: '2016-12-31 18:30:35', //提现时间
      name: '重庆鱼火锅', //商家名称
      address: '重庆市苑北路1号附4号', //商家地址
      amount: 810.90, //提现金额
      withdrawalWay: '微信', //提现方式
      status: '已完成', //状态
      user: '小红', //使用用户
    }, {
      date: '2016-02-08 18:30:35', //提现时间
      name: '重庆鱼火锅02', //商家名称
      address: '重庆市苑北路1号附14号', //商家地址
      amount: 180.10, //提现金额
      withdrawalWay: '银行卡', //提现方式
      status: '提现中', //状态
      user: '小丽', //使用用户
    }, {
      date: '2016-01-03 18:30:35', //提现时间
      name: '扬州茶楼', //商家名称
      address: '扬州市浦江东路', //商家地址
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
      user: '小明', //使用用户
    }, {
      date: '2016-12-31 18:30:35', //提现时间
      name: '重庆鱼火锅', //商家名称
      address: '重庆市苑北路1号附4号', //商家地址
      amount: 810.90, //提现金额
      withdrawalWay: '微信', //提现方式
      status: '已完成', //状态
      user: '小红', //使用用户
    }, {
      date: '2016-02-08 18:30:35', //提现时间
      name: '重庆鱼火锅02', //商家名称
      address: '重庆市苑北路1号附14号', //商家地址
      amount: 180.10, //提现金额
      withdrawalWay: '银行卡', //提现方式
      status: '提现中', //状态
      user: '小丽', //使用用户
    }, {
      date: '2016-01-03 18:30:35', //提现时间
      name: '扬州茶楼', //商家名称
      address: '扬州市浦江东路', //商家地址
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
      user: '小明', //使用用户
    }, {
      date: '2016-12-31 18:30:35', //提现时间
      name: '重庆鱼火锅', //商家名称
      address: '重庆市苑北路1号附4号', //商家地址
      amount: 810.90, //提现金额
      withdrawalWay: '微信', //提现方式
      status: '已完成', //状态
      user: '小红', //使用用户
    }, {
      date: '2016-02-08 18:30:35', //提现时间
      name: '重庆鱼火锅02', //商家名称
      address: '重庆市苑北路1号附14号', //商家地址
      amount: 180.10, //提现金额
      withdrawalWay: '银行卡', //提现方式
      status: '提现中', //状态
      user: '小丽', //使用用户
    }
  ],
  userUnDepositData: [
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13444444444', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
    {
      date: '2016-01-03 18:30:35', //提现时间
      successDate:'2016-01-04 18:30:35',
      tel: '13333333333', //用户手机号
      amount: 222.20, //提现金额
      withdrawalWay: '支付宝', //提现方式
      status: '提现中', //状态
    },
  ],
}


// 定义所需的 mutations
const mutations = {
  TOGGLESHOW(state) {
    state.isShow=!state.isShow;
  },
  DECREMENT(state) {
    // state.count--
  }
}

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
