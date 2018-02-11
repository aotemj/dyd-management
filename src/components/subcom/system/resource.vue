<template>
	<!-- 协议管理 -->
	<div class="con-box">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  <el-form-item label="栏目名称" >
		    <el-input size="mini" v-model="formInline.merchant" placeholder="栏目名称"></el-input>
		  </el-form-item>
		  <el-form-item >
		    <el-button size="mini" type="primary" @click="">查询</el-button>
		  </el-form-item>
		  <el-form-item>
		    <el-button size="mini" type="primary" @click="">添加栏目	</el-button>
		  </el-form-item>
		  <el-form-item>
		  	<el-button size="mini" type="info">清除</el-button>
		  </el-form-item>
		</el-form>

			<el-table
			    ref="multipleTable"
			    :data="tableData3"
			    tooltip-effect="dark"
			    style="width: 100%"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      prop="name"
			      label="栏目名"
			      width="">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="所属系统"
			      width="">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="是否激活"
			      width="">
			    </el-table-column>
					<el-table-column
					  prop="name"
					  label="操作"
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
		},
		methods:{
		  	handleSelectionChange(val) {
			     this.multipleSelection = val;
			   },

				//分页
		   handleSizeChange(val) {
		      // console.log(`每页 ${val} 条`);
		      this.pagesize = val;
		    },
		    handleCurrentChange(val) {
		      console.log(`当前页: ${val}`);
		      this.currentPage = val;
		      // this.loadData(this.criteria, this.currentPage, this.pagesize);
		      // this.loadData();
		    },
		    loadData(){
		    	// console.log(this.currentPage);
		    	// console.log(this.pagesize);
		    	// let prevData = (this.currentPage-1)*this.pagesize;

		    }
		  }
	}
</script>
<style scoped>
.el-form--inline .el-form-item__content{
	width:80px !important;
}
</style>
