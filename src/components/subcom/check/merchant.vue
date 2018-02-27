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
	      label="商家账号"
	      width="">
	      <template slot-scope="scope">
					<el-tooltip v-if="isShow" class="item" effect='dark' placement="right">
						<div slot="content">{{scope.row.amount}}</div>
						<el-button v-on:click="toggleShow" type="text" style="color:#000">
							{{scope.row.amount}}
						</el-button>
					</el-tooltip>
					<div v-else="isShow" v-on:click="toggleShow">{{scope.row.amount}}</div>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="商家名称"
	      width="">
	      <template slot-scope="scope">
	      	<el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
	      		<div slot="content">{{scope.row.merchantName}}</div>
	      		<el-button v-on:click="toggleShow" type="text" style="color:#000">{{scope.row.merchantName}}</el-button>
	      	</el-tooltip>
	      	<div v-else="isShow" v-on:click="toggleShow">{{scope.row.merchantName}}</div>
	      </template>
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="商家地址"
	      width="">
	      <template slot-scope="scope">
					<el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
						<div slot="content">{{scope.row.address}}</div>
						<el-button v-on:click="toggleShow" type="text" style="color:#000;">{{scope.row.address}}</el-button>
					</el-tooltip>
					<div v-else="isShow" v-on:click="toggleShow">{{scope.row.address}}</div>
	      </template>
	    </el-table-column>
			<el-table-column
			  prop="tel"
			  label="联系电话"
			  width="">
			  <template slot-scope="scope">
 			  	<el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
 			  		<div slot="content">{{scope.row.tel}}</div>
 			  		<el-button v-on:click="toggleShow" type="text" style="color:#000">{{scope.row.tel}}</el-button>
 			  	</el-tooltip>
 			  	<div v-else="isShow" v-on:click="toggleShow">{{scope.row.tel}}</div>
			  </template>
			</el-table-column>
			<el-table-column
			  prop="type"
			  label="商家类型"
			  width="">
			  <template slot-scope="scope">
			  	<el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
			  		<div slot="content">{{scope.row.type}}</div>
						<el-button v-on:click="toggleShow" type="text" style="color:#000">{{scope.row.type}}</el-button>
			  	</el-tooltip>
			  	<div v-else="isShow" v-on:click="toggleShow">{{scope.row.type}}</div>
			  </template>
			</el-table-column>
			<el-table-column
			  prop="status"
			  label="认证结果"
			  width="">
			  <template slot-scope="scope">
			  	<el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
			  		<div slot="content">{{scope.row.status}}</div>
			  		<el-button v-on:click="toggleShow" type="text" style="color:#000">{{scope.row.status}}</el-button>
			  	</el-tooltip>
			  	<div v-else="isShow" v-on:click="toggleShow">{{scope.row.status}}</div>
			  </template>
			</el-table-column>
			<el-table-column
			  prop="operateType"
			  label="经营状态"
			  width="">
			  <template slot-scope="scope">
					<el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
						<div slot="content">{{scope.row.operateType}}</div>
						<el-button v-on:click="toggleShow" type="text" style="color:#000">{{scope.row.operateType}}</el-button>
					</el-tooltip>
					<div v-else="isShow" v-on:click="toggleShow">{{scope.row.operateType}}</div>
			  </template>
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
 				// 提示信息显示隐藏切换
        // 分页
        currentPage: 1,
        pagesize:10,
        dialogVisible: false,//审核弹出框
			}
		},
		methods:{
			// 切换isShow显示状态
			toggleShow(){
				this.$store.commit('TOGGLESHOW');
			},
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
		},
		computed:{
			isShow(){
				return this.$store.state.isShow;
			}
		}
	}
</script>
<style soped>

</style>
