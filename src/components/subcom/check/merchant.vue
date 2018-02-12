<template>
		<!-- 商户审核 -->
	<div class="con-box">
		<el-table
		    ref="multipleTable"
		    :data="tableData3"
		    tooltip-effect="dark"
		    style="width: 100%"
		    @selection-change="handleSelectionChange">
		    <el-table-column
		    :default-sort = "{prop: 'date', order: 'descending'}"
		      type="selection"
		      width="55">
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="时间排序测试"
		      sortable
		      width="">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="商家账号"
		      width="">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="商家名称"
		      width="">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="商家地址"
		      width="">
		    </el-table-column>
				<el-table-column
				  prop="name"
				  label="联系电话"
				  width="">
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="使用类型"
				  width="">
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="认证结果"
				  width="">
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="经营状态"
				  width="">
				</el-table-column>
		    <el-table-column
		      label="审核"
		      width="">
		      <template slot-scope="scope">{{ scope.row.date }}</template>
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
				tableData3: [
         		{
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
        		},
        		{
		          date: '2016-04-02',
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
<style soped>

</style>
