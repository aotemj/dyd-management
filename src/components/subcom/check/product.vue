<template>
	<!-- 产品审核 -->
	<div class="con-box">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  <el-form-item label="商户名字">
			    <el-input v-model="formInline.merchant" placeholder="商户名字"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="">查询</el-button>
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
			      label="所属商家"
			      width="">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="商品类型"
			      width="">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="商品名字"
			      width="">
			    </el-table-column>
					<el-table-column
					  prop="name"
					  label="总优惠额度"
					  width="">
					</el-table-column>
					<el-table-column
					  prop="name"
					  label="优惠比例"
					  width="">
					</el-table-column>
			    <el-table-column
			      label="产品状态"
			      width="">
			      <template slot-scope="scope">{{ scope.row.date }}</template>
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
	export default {
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

</style>
