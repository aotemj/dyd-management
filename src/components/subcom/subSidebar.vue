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
			<el-submenu index="4">
			  <template slot="title">
			    <!-- <i class="el-icon-location"></i> -->
			    <span slot="title">系统管理</span>
			  </template>
			  <el-menu-item-group>
			    <span slot="title">4</span>
			    <router-link to="/home/role">
			   		<el-menu-item index="4-1">角色管理</el-menu-item>
			    </router-link>
			    <router-link to="/home/operationLog">
			   		<el-menu-item index="4-2">操作日志</el-menu-item>
			    </router-link>
			     <router-link to="">
			   		<el-menu-item index="4-3">全局配置参数</el-menu-item>
			    </router-link>
			     </router-link>
			     <router-link to="/home/administrator">
			   		<el-menu-item index="4-4">管理员管理</el-menu-item>
			    </router-link>
				  <router-link to="/home/protocal">
						<el-menu-item index="4-5">协议管理</el-menu-item>
				 </router-link>
				   <router-link to="/home/resource">
				 		<el-menu-item index="4-6">资源管理</el-menu-item>
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

