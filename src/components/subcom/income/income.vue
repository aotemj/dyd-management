<template>
	<div class="con-box">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  <el-form-item label="最小提现金额">
		    <el-input v-model="formInline.merchant" placeholder="最小提现金额"></el-input>
		  </el-form-item>
		   <el-form-item label="手续费">
		    <el-input v-model="formInline.merchant" placeholder="手续费"></el-input>
		  </el-form-item>
		   <el-form-item label="邮箱">
		    <el-input v-model="formInline.merchant" placeholder="邮箱"></el-input>
		  </el-form-item>
		   <el-form-item label="联系电话">
		    <el-input v-model="formInline.merchant" placeholder="联系电话"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="">确定</el-button>
		  </el-form-item>
		</el-form>
<el-table
			    ref="multipleTable"
			    :data="tableData3"
			    tooltip-effect="dark"
			    style="width: 100%"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="用户累计给出优惠"
			      width="">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="用户累计保证金"
			      width="">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="用户累计提现"
			      width="">
			    </el-table-column>
					<el-table-column
					  prop="name"
					  label="用户累计给出比例"
					  width="">
					</el-table-column>
					<el-table-column
					  prop="name"
					  label="用户累计预计付款"
					  width="">
					</el-table-column>
		  </el-table>
		  <div class="block fr">
		     <!-- <span class="demonstration">完整功能</span> -->
		     <el-pagination
		       @size-change="handleSizeChange"
		       @current-change="handleCurrentChange"
		       :current-page="currentPage"
		       :page-size="pagesize"
		       layout="total, sizes, prev, pager, next, jumper"
		       :total="tableData3.length">
		     </el-pagination>
		   </div>


	</div>

</template>
<script>
	export default{
		data(){
			return {
				formInline: {
         merchant: '',
         region: ''
       	},

        	value5:0,
         	tableData3: [
         		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		}
      		],
      		 multipleSelection: [],
	        // 分页
	        currentPage: 1,
	        pagesize:10,
			}
		}
	}
</script>
<style scoped>

</style>
