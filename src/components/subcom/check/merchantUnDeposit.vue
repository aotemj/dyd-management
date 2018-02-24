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

      <el-form-item>
        <el-button size="mini" type="primary" @click="">清空</el-button>
        <el-button size="mini" type="primary">查询</el-button>
        <el-button size="mini" type="primary" @click="">批量提现</el-button>
      </el-form-item>
    </el-form>
      <!-- 原生写法 -->
      <el-table
        height="500"
        fit
        stripe
        highlight-current-row
        ref="multipleTable"
        :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        tooltip-effect="dark"
        style="width: 100%"
        v-on:select-all="selectAll"
        v-on:row-click="rowClick"
        v-on:current-change="currentChange"
        @selection-change="handleSelectionChange">
        <!-- 单选框 -->
        <el-table-column fixed type="selection" width="45"> </el-table-column>
        <!-- 索引 -->
        <el-table-column type="index" width="20"></el-table-column>
        <el-table-column label="商家名称">
          <template slot-scope="scope">
            <el-tooltip v-if="isShow" class="item" effect="dark" placement="right">
              <div slot="content">{{scope.row.name}}</div>
              <el-button v-on:click="toggleShow" type="text" style="color:#000">
                {{scope.row.name}}
              </el-button>
            </el-tooltip>
           <div v-else="isShow" v-on:click="toggleShow">{{scope.row.name}}</div>
          </template>
        </el-table-column>

        <el-table-column label="提现金额" >
          <template slot-scope="scope">
            <el-tooltip v-if="isShow"  class="item" effect="dark" placement="right">
              <div slot="content">{{scope.row.amount}}</div>
              <el-button v-on:click="toggleShow" type="text" style="color:#000">
                {{scope.row.amount}}
              </el-button>
            </el-tooltip>
           <div v-else="isShow" v-on:click="toggleShow">{{scope.row.amount}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="提现方式"
          >
          <template slot-scope="scope">
           <el-tooltip v-if="isShow"  class="item" effect="dark" placement="right">
             <div slot="content">{{scope.row.withdrawalWay}}</div>
             <el-button v-on:click="toggleShow" type="text" style="color:#000">
               {{scope.row.withdrawalWay}}
             </el-button>
           </el-tooltip>
          <div v-else="isShow" v-on:click="toggleShow">{{scope.row.withdrawalWay}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          >
          <template slot-scope="scope">
            <el-tooltip v-if="isShow"  class="item" effect="dark" placement="right">
              <div slot="content">{{scope.row.status}}</div>
              <el-button v-on:click="toggleShow" type="text" style="color:#000">
                {{scope.row.status}}
              </el-button>
            </el-tooltip>
           <div v-else="isShow" v-on:click="toggleShow">{{scope.row.status}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="使用用户"
          >
          <template slot-scope="scope">
            <el-tooltip v-if="isShow"  class="item" effect="dark" placement="right">
              <div slot="content">{{scope.row.user}}</div>
              <el-button v-on:click="toggleShow" type="text" style="color:#000">
                {{scope.row.user}}
              </el-button>
            </el-tooltip>
           <div v-else="isShow" v-on:click="toggleShow">{{scope.row.user}}</div>
          </template>
        </el-table-column>
        <el-table-column
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
            <el-button
              @click.native.prevent="deleteRow(scope.$index, data)"
              type="text"
              size="small">
              移除
            </el-button>
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
          layout="total,sizes, prev, pager, next, jumper"
          :total="data.length">
        </el-pagination>
      </div>
  </div>
</template>
<script>
import Vue from "vue"

  export default {
    data() {
      return {
        formInline: {
          merchant: '',
          region: ''
        },
        value5: 0,
        multipleSelection: [],
        // 分页
        currentPage: 1,
        pagesize: 10,
        isShow:true,
        data: this.$store.state.data,
      }
    },
    methods: {
      // 删除当前行
      deleteRow(index, rows) {
         rows.splice(index, 1);
       },
      toggleShow(){
        this.isShow=!this.isShow
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection);
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
      },
      //时间筛选
      filterHandle(value, row, column) {
        const property = column['property'];
        return row [property] === value;
      },
      // 全选
      selectAll(){
        // console.log('selectAll');
      },
      // 当前行发生改变时触发
      currentChange(currentRow, oldCurrentRow){
        console.log(currentRow.__ob__.dep.id);
      },
      // 点击当前行
      rowClick(row, event, column){
      }
    }
  }
</script>
<style scoped>
  .el-form--inline .el-form-item__label {
    float: left !important;
  }
</style>
