<template>
	<div class="con-box">
		<!-- 保证金管理 -->
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  <el-form-item label="商家名字" >
		    <el-input v-model="formInline.merchant" placeholder="商家名字"></el-input>
		  </el-form-item>
		  <el-form-item label="商家类型">
	    	<el-select v-model="form.region" placeholder="请选择">
		      <el-option label="自营" value="self"></el-option>
		      <el-option label="合作方" value="cooperation"></el-option>
		      <el-option label="第三方" value="third"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="押金状态">
	    	<el-select v-model="form.region" placeholder="请选择">
		      <el-option label="全部" value="all"></el-option>
		      <el-option label="已缴纳" value="done"></el-option>
		      <el-option label="未缴纳" value="none"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="商家地址">
		  <span class="demonstration"></span>
		  <el-cascader
		    expand-trigger="hover"
		    :options="options"
		    v-model="selectedOptions2"
		    @change="handleChange">
		  </el-cascader>
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
		    label="押金状态"
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
			  label="是否测试数据"
			  width="">
			</el-table-column>
		  <el-table-column
		    label="联系电话"
		    width="">
		    <template slot-scope="scope">{{ scope.row.date }}</template>
		  </el-table-column>
		  <el-table-column
		    prop="name"
		    label="商家类型"
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
import common from "../../../kits/domain.js"
import {ajax} from "../../../kits/http.js"

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
     	 form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [
        {
          value: '01',
          label: '北京市	',
           children: [
		            {
		              value: '01',
		              label: '东城区'
		            },
		            {
		              value: '02',
		              label: '西城区'
		            },
		            {
		              value: 'xichengqu',
		              label: '西城区'
		            },
		            {
		              value: 'chaoyangqu',
		              label: '朝阳区'
		            },
		            {
		              value: 'fengtaiqu',
		              label: '丰台区'
		            },
		            {
		              value: 'shijingshanqu',
		              label: '石景山区'
		            },
		            {
		              value: 'haidianqu',
		              label: '海淀区'
		            },
		            {
		              value: 'mentougouqu',
		              label: '门头沟区'
		            },
		            {
		              value: 'fangshanqu',
		              label: '房山区'
		            },
		            {
		              value: 'tongzhouqu',
		              label: '通州区'
		            },
		            {
		              value: 'shunyiqu',
		              label: '顺义区'
		            },
		            {
		              value: 'changpingqu',
		              label: '昌平区'
		            },
		            {
		              value: 'daxingqu',
		              label: '大兴区'
		            },
		            {
		              value: 'huairouqu',
		              label: '怀柔区'
		            },
		            {
		              value: 'pingguqu',
		              label: '平谷区'
		            },
		            {
		              value: 'miyunqu',
		              label: '密云区'
		            },
		            {
		              value: 'yanqingqu',
		              label: '延庆区'
		            }
	            ]
        },
				{
          value: '02',
          label: '天津市	',
           children: [
            {
              value: '01',
              label: '和平区'
            },
            {
              value: '02',
              label: '河东区'
            },
            {
              value: '03',
              label: '河西区'
            },
            {
              value: 'chaoyangqu',
              label: '南开区'
            },
            {
              value: 'fengtaiqu',
              label: '河北区'
            },
            {
              value: 'shijingshanqu',
              label: '红桥区'
            },
            {
              value: 'haidianqu',
              label: '滨海新区'
            },
            {
              value: 'mentougouqu',
              label: '东丽区'
            },
            {
              value: 'fangshanqu',
              label: '西青区'
            },
            {
              value: 'tongzhouqu',
              label: '津南区'
            },
            {
              value: 'shunyiqu',
              label: '北辰区'
            },
            {
              value: 'changpingqu',
              label: '武清区'
            },
            {
              value: 'daxingqu',
              label: '宝坻区'
            },
            {
              value: 'huairouqu',
              label: '宁河区'
            },
            {
              value: 'pingguqu',
              label: '静海区'
            },
            {
              value: 'miyunqu',
              label: '蓟州区'
            }
          ]
        },
        {
          value: '03',
          label: '河北省	',
           children: [
            {
              value: '01',
              label: '石家庄市'
            },
            {
              value: '02',
              label: '唐山市'
            },
            {
              value: '03',
              label: '秦皇岛市'
            },
            {
              value: 'chaoyangqu',
              label: '邯郸市'
            },
            {
              value: 'fengtaiqu',
              label: '邢台市'
            },
            {
              value: 'shijingshanqu',
              label: '红桥区'
            },
            {
              value: 'haidianqu',
              label: '滨海新区'
            },
            {
              value: 'mentougouqu',
              label: '东丽区'
            },
            {
              value: 'fangshanqu',
              label: '西青区'
            },
            {
              value: 'tongzhouqu',
              label: '津南区'
            },
            {
              value: 'shunyiqu',
              label: '北辰区'
            },
            {
              value: 'changpingqu',
              label: '武清区'
            },
            {
              value: 'daxingqu',
              label: '宝坻区'
            },
            {
              value: 'huairouqu',
              label: '宁河区'
            },
            {
              value: 'pingguqu',
              label: '静海区'
            },
            {
              value: 'miyunqu',
              label: '蓟州区'
            }
          ]
        },
       ],
      selectedOptions: [],
      selectedOptions2: []
      };
    },
   	created(){
   		// 请求城市列表
   		// let cityUrl = common.apidomain+'sys/queryCity?cityNo=0';
   		let cityUrl = 'http://192.168.2.202:8080/city/queryCityByParentID?id=2';
   		ajax(cityUrl,'get',{},(res)=>{
   			console.log(res);
   			// this.options = res.obj;
   			// console.log(this.options);
   			// for(var i =0 ;i<res.obj.length;i++){
   				// this.options[i].value = res.obj[i].key;
   				// this.options[i].label = res.obj[i].value;
   			// }
   			// console.log(this.options);
   		});
   	},
    methods: {
      handleChange(value) {
        console.log(value);
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
