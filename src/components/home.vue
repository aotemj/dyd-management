<template>
  <el-container>
    <el-header><subHeader></subHeader></el-header>
    <el-container>
      <el-aside width="200px"><subSidebar></subSidebar></el-aside>
      <el-main>
        <!-- <userUnDeposit></userUnDeposit> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
//header子组件
import  subHeader from './subcom/subHeader.vue'
// sidebar子组件
import subSidebar from "./subcom/subSidebar.vue"

// userUnDeposit 用户提现审核组件
import userUnDeposit from "./subcom/check/userUnDeposit.vue"

//income 用户平台组件
import income from './subcom/income/income.vue'

// 保证金管理
import deposit from "./subcom/deposit/deposit.vue"

// 保证金协议管理
import depositProtocol from "./subcom/deposit/depositProtocol.vue"

  export default {
     data() {
       return {
       }
     },
     created(){
      console.log(this.$store);
     },
     components:{
      subHeader,//头部
      subSidebar,//侧边栏
      userUnDeposit,//用户提现审核
      income,//收入平台
      deposit,//保证金管理
      depositProtocol,//保证金协议管理
     }
   };
</script>
<style>
  /*element container 样式 start*/
  .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

    body > .el-container {
      margin-bottom: 40px;
    }
    /*element container 样式 end*/

</style>

