<template>
		<!-- 商户审核 -->
	<div class="con-box">
		<el-table
			height="500"
			fit
			stripe
			highlight-current-row
	    ref="multipleTable"
	    :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
	    tooltip-effect="dark"
	    style="width: 100%"
	    @selection-change="handleSelectionChange">
	    <el-table-column
	    :default-sort = "{prop: 'date', order: 'descending'}"
	      type="index"
	      width="55">
	    </el-table-column>
	    <el-table-column
	      prop="email"
	      label="商家账号"
	      width="">
	    </el-table-column>
	    <el-table-column
	      prop="merchantName"
	      label="商家名称"
	      width="">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="商家地址"
	      width="">
	    </el-table-column>
			<el-table-column
			  prop="tel"
			  label="联系电话"
			  width="">
			</el-table-column>
			<el-table-column
			  prop="type"
			  label="商家类型"
			  width="">
			</el-table-column>
			<el-table-column
			  prop="status"
			  label="认证结果"
			  width="">
			</el-table-column>
			<el-table-column
			  prop="operateType"
			  label="经营状态"
			  width="">
			</el-table-column>
	    <el-table-column
	      label="审核"
	      width="">
	      <template slot-scope="scope">
	      	<el-button type="text" size="small" v-on:click="dialogVisible = true">开始审核</el-button>
	      	<el-dialog
           title="提示"
           :visible.sync="dialogVisible"
           width="30%"
           :before-close="handleClose">
           <span style="font-size:18px;">确认审核操作?</span>
           <span slot="footer" class="dialog-footer">
             <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
             <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
           </span>
         </el-dialog>
	    	</template>
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
	       :total="data.length">
	     </el-pagination>
	   </div>
</div>
</template>
<script>
	export default {
		data(){
			return {
				data:this.$store.state.merchantData,
 				multipleSelection: [],
        // 分页
        currentPage: 1,
        pagesize:10,
        dialogVisible: false,//审核弹出框
			}
		},
		methods:{
			//提示框关闭
			handleClose(done) {
			  this.$confirm('确认关闭？')
			    .then(_ => {
			      done();
			    })
			    .catch(_ => {});
			},
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
