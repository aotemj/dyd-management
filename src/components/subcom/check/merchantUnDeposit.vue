<template>
  <div class="con-box">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商户名字">
        <el-input size="mini" v-model="formInline.merchant" placeholder="商户名字"></el-input>
      </el-form-item>
      <el-form-item label="使用用户">
        <el-input size="mini" v-model="formInline.user" placeholder="使用用户"></el-input>
      </el-form-item>
      <el-form-item label="提现时间">
        <!-- <template> -->
        <div class="block">
          <!-- <span class="demonstration">起始日期时刻为 12:00:00</span> -->
          <el-date-picker
            size="mini"
            v-model="value5"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']">
          </el-date-picker>
        </div>
      </el-form-item>

      <!-- </template> -->

      <el-form-item>
        <el-button size="mini" type="primary" @click="">清空</el-button>
        <el-button size="mini" type="primary">查询</el-button>
        <el-button size="mini" type="primary" @click="">批量提现</el-button>
      </el-form-item>
    </el-form>
    <el-table
      max-height="500"
      highlight-current-row
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @selection-change="handleSelectionChange">
      <el-table-column
        fixed
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="商家名称"
        width=""
      >
        <template slot-scope="scope">
          <el-tooltip v-if="isShow"  class="item" effect="dark" placement="top">
            <div slot="content">{{scope.row.name}}</div>
            <el-button v-on:click="toggleShow" type="text" style="color:#000">
              {{scope.row.name}}
            </el-button>
          </el-tooltip>
         <div v-else="isShow" v-on:click="toggleShow">{{scope.row.name}}</div>
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        label="提现金额"
        width="">
      </el-table-column>
      <el-table-column
        prop="name"
        label="提现方式"
        width="">
      </el-table-column>
      <el-table-column
        prop="name"
        label="状态"
        width="">
      </el-table-column>
      <el-table-column
        prop="name"
        label="使用用户"
        width="">
      </el-table-column>
      <el-table-column
        label="提现时间"
        :filters="[{text:'2015-06-01',value:'2015-06-01'},{text:'2016-05-03',value:'2016-05-03'}]"
        :filter-method="filterHandle"
        prop="date"
        width="">
        <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
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
        :total="tableData3.length">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          merchant: '',
          region: ''
        },
        value5: 0,
        tableData3: [
          {
            date: '2016-01-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
          },
          {
            date: '2016-02-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '公司'
          },
          {
            date: '2016-03-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '公司'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '公司'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '公司'
          }
        ],
        multipleSelection: [],
        // 分页
        currentPage: 1,
        pagesize: 10,
        isShow:true
      };
    },
    methods: {
      //表格状态
      tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 == 0) {
          return 'warning-row'
        } else {
          return 'success-row'
        }
      },
      toggleShow(){
        this.isShow=!this.isShow
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleClick(row) {
        console.log(row);
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
      loadData() {
        // console.log(this.currentPage);
        // console.log(this.pagesize);
        // let prevData = (this.currentPage-1)*this.pagesize;
      },
      //时间筛选
      filterHandle(value, row, column) {
        const property = column['property'];
        return row [property] === value;
      }
    }
  }
</script>
<style scoped>
  .el-form--inline .el-form-item__label {
    float: left !important;
  }

</style>
