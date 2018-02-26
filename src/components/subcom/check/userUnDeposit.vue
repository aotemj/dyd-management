<!-- 用户提现审核 -->
<template>
	<div class="con-box">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  <el-form-item label="用户手机号">
			    <el-input size="mini" v-model="formInline.merchant" placeholder="用户手机号"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button size="mini" @click="">清空</el-button>
			    <el-button size="mini" type="primary" @click="">查询</el-button>
			    <el-button size="mini" type="primary" @click="">批量提现</el-button>
			  </el-form-item>
			</el-form>

			<el-table
				height="500"
		    stripe
		    fit
		    highlight-current-row
		    ref="multipleTable"
		    :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
		    tooltip-effect="dark"
		    style="width: 100%"
	    	@selection-change="handleSelectionChange">
	    	<!-- 多选框 -->
		    <el-table-column
		      type="selection"
		      width="45">
		    </el-table-column>
		    <!-- 索引 -->
		    <el-table-column
		      type="index"
		      width="25">
		    </el-table-column>
		    <el-table-column
		    	sortable
		      label="用户手机号"
		      >
		      <template slot-scope="scope">
		        <el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
		          <div slot="content">{{scope.row.tel}}</div>
		          <el-button v-on:click="toggleShow" type="text" style="color:#000">
		            {{scope.row.tel}}
		          </el-button>
		        </el-tooltip>
		       <div v-else="isShow" v-on:click="toggleShow">{{scope.row.tel}}</div>
		      </template>
		    </el-table-column>
		    <el-table-column
		    	sortable
		      label="提现金额"
		      >
		      <template slot-scope="scope">
		        <el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
		          <div slot="content">{{scope.row.amount}}</div>
		          <el-button v-on:click="toggleShow" type="text" style="color:#000">
		            {{scope.row.amount}}
		          </el-button>
		        </el-tooltip>
		       <div v-else="isShow" v-on:click="toggleShow">{{scope.row.amount}}</div>
		      </template>
		    </el-table-column>
		    <el-table-column
		    	sortable
		      label="提现方式"
		      >
		      <template slot-scope="scope">
		        <el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
		          <div slot="content">{{scope.row.withdrawalWay}}</div>
		          <el-button v-on:click="toggleShow" type="text" style="color:#000">
		            {{scope.row.withdrawalWay}}
		          </el-button>
		        </el-tooltip>
		       <div v-else="isShow" v-on:click="toggleShow">{{scope.row.withdrawalWay}}</div>
		      </template>
		    </el-table-column>
				<el-table-column
					sortable
				  label="提现状态"
				  >
				  <template slot-scope="scope">
				    <el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
				      <div slot="content">{{scope.row.status}}</div>
				      <el-button v-on:click="toggleShow" type="text" style="color:#000">
				        {{scope.row.status}}
				      </el-button>
				    </el-tooltip>
				   <div v-else="isShow" v-on:click="toggleShow">{{scope.row.status}}</div>
				  </template>
				</el-table-column>
				<el-table-column
					sortable
				  prop="date"
				  label="提现成功时间"
				  >
				  <template slot-scope="scope">
				   {{scope.row.successDate}}
				  </template>
				</el-table-column>
		    <el-table-column
		    	sortable
		      label="提现时间"
		      >
		      <template slot-scope="scope">{{ scope.row.date }}</template>
		    </el-table-column>
		    <el-table-column
		      label="操作"
		      >
		      <template slot-scope="scope">
		        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small" class="active">查看</el-button> -->
		        <!-- <el-button type="text" size="small">编辑</el-button> -->
		        <!-- <el-button
		          @click.native.prevent="deleteRow(scope.$index, data)"
		          type="text"
		          size="small">
		          移除
		        </el-button> -->
		        <el-button type="text" size="small" v-on:click="dialogVisible = true">审核</el-button>
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
				formInline: {
           merchant: '',
           region: ''
         	},
         	value5:0,
        	data:this.$store.state.userUnDepositData,
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
			toggleShow(){
			  // this.$store.state.isShow=!this.$store.state.isShow;
			  this.$store.commit('TOGGLESHOW');
			},
    	handleSelectionChange(val) {
  	     this.multipleSelection = val;
  	  },

		  //分页
	    handleSizeChange(val) {
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
<style scoped>

</style>
