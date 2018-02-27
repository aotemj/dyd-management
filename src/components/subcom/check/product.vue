<template>
	<!-- 产品审核 -->
	<div class="con-box">
		<el-form :inline="true" ref="formInline" :model="formInline" class="demo-form-inline">
			  <el-form-item label="商户名字" prop="merchant">
			    <el-input size="mini" v-model="formInline.merchant" placeholder="商户名字"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button size="mini" @click="resetForm('formInline')">清空</el-button>
			    <el-button size="mini" type="primary" @click="search('formInline')">查询</el-button>
			  </el-form-item>
			</el-form>

			<el-table
				height="500"
				fit
				stripe
				highlight-current-row
		    ref="multipleTable"
		    :data="data"
		    tooltip-effect="dark"
		    style="width: 100%"
		   >
		    <el-table-column
		      type="index"
		      width="35">
		    </el-table-column>
		    <el-table-column
		      prop="merchantName"
		      label="所属商家"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="productType"
		      label="商品类型"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="productName"
		      label="商品名字"
		      >
		    </el-table-column>
				<el-table-column
				  prop="totalDiscountPersent"
				  label="总优惠额度"
				  >
				</el-table-column>
				<el-table-column
				  prop="discountPersent"
				  label="优惠比例"
				  >
				</el-table-column>
		    <el-table-column
		      label="产品状态"
		      >
		      <template slot-scope="scope">{{ scope.row.productType }}</template>
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="操作"
		      >
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
         	data:this.$store.state.productData,
	        // 分页
	        currentPage: 1,
	        pagesize:10,
			}
		},
		methods:{
			toggleShow(){
				this.$store.commit("TOGGLESHOW")
			},
			// 清除表单内容
			resetForm(formName){
			  // console.log('reset');
			  this.$refs[formName].resetFields();
			},
			search(formName){

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
<style scoped>

</style>
