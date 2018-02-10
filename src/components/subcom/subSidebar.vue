<template>
	<!-- 侧边栏 -->
	<div>
		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" v-on:select="handleSelected">
		  <el-submenu index="1">
		   <template slot="title">
		     <!-- <i class="el-icon-location"></i> -->
		     <span slot="title">审核</span>
		   </template>
		   <el-menu-item-group>
		     <span slot="title">1</span>
		     <router-link to="/home/userUnDeposit">
		     		<el-menu-item index="1-1">用户提现审核</el-menu-item>
		     </router-link>
		     <router-link to="/home/merchant">
		     		<el-menu-item index="1-2">商户审核</el-menu-item>
		     </router-link>

		     <router-link to="/home/product">
		     	<el-menu-item index="1-3">产品审核</el-menu-item>
		     </router-link>
		     <router-link to="/home/merchantUnDeposit">
		     	<el-menu-item index="1-4">商家提现审核</el-menu-item>
		     </router-link>
		   </el-menu-item-group>
		   <!-- <el-menu-item-group title="分组2">
		     <el-menu-item index="1-3">选项3</el-menu-item>
		   </el-menu-item-group>
		   <el-submenu index="1-4">
		     <span slot="title">选项4</span>
		     <el-menu-item index="1-4-1">选项1</el-menu-item>
		   </el-submenu> -->
		  </el-submenu>
 			<el-submenu index="2">
		    <template slot="title">
		      <!-- <i class="el-icon-location"></i> -->
		      <span slot="title">收入平台</span>
		    </template>
		    <el-menu-item-group>
		      <span slot="title">2</span>
		      <router-link to="/home/income">
		     		<el-menu-item index="2-1">收入平台</el-menu-item>
		      </router-link>
		    </el-menu-item-group>
		  </el-submenu>
		  <el-submenu index="3">
		    <template slot="title">
		      <!-- <i class="el-icon-location"></i> -->
		      <span slot="title">保证金管理</span>
		    </template>
		    <el-menu-item-group>
		      <span slot="title">3</span>
		      <router-link to="/home/deposit">
		     		<el-menu-item index="3-1">保证金管理</el-menu-item>
		      </router-link>
		      <router-link to="/home/depositProtocol">
		     		<el-menu-item index="3-2">保证金协议管理</el-menu-item>
		      </router-link>
		    </el-menu-item-group>
		  </el-submenu>

		</el-menu>
	</div>
</template>
<style scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
	  width: 200px;
	  min-height: 400px;
	}
	/*一级标题*/
	.el-submenu{
		text-align: left;
		padding-left:30px;
	}
	/*二级标题 列表*/
	 .el-menu-item-group__title {
		/*display:none;*/
		/*background-color: pink;*/
		font-size: 200px !important;
	}

	.el-menu-item, .el-submenu__title{
		text-align: left;
		/*background-color: pink;*/
	}
</style>
<script>
	export default {
	  data() {
	    return {
	      isCollapse: false
	    };
	  },
	  methods: {
	  	// 点击菜单事件
	  	handleSelected(key,keyPath){
	  		console.log(key);
	  		console.log(keyPath);

	  	}
	  }
	}
</script>

