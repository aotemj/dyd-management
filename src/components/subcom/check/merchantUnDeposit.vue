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

    <!-- 简单封装写法 -->
    <el-table
     :data="data"
     style="width: 100%" >
     <template v-for="column in columns">
        <el-table-column  :prop="column.prop" :label="column.label" :formatter="column.formatter">
          <template scope="scope">
            <el-tooltip v-if="isShow"  class="item" effect="dark" placement="right">
              <div slot="content">{{scope.row.name}}</div>
              <el-button v-on:click="toggleShow" type="text" style="color:#000">
                {{scope.row.name}}
              </el-button>
            </el-tooltip>
            <div v-else="isShow" v-on:click="toggleShow">{{scope.row.name}}</div>
          </template>
        </el-table-column>
        <!--   <el-table-column v-else :prop="column.prop" :label="column.label" :width="column.width" :formatter="column.formatter">
          </el-table-column> -->
      </template>
     <!-- <el-table-column
       prop="name"
       label="姓名"
       width="180">
     </el-table-column> -->
    <!--  <el-table-column
       prop="address"
       label="地址">
     </el-table-column> -->
   </el-table>

    <!-- egrid写法 -->
    <!-- <egrid
      max-height="500"
      column-type="selection"
      :data="data"
      :columns="columns"
      :columns-schema="columnsSchema"
      :columns-props="columnsProps"
      :columns-handler="columnsHandler"
      @selection-change="selectionChange"
      :filter-method="filterHandle"
    >
    </egrid> -->

      <!-- 原生写法 -->
      <!--  <el-table
      max-height="500"
      highlight-current-row
      ref="multipleTable"
      :data="tableData"
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
       :row-class-name="active"
      >
        <template slot-scope="scope">
          <el-tooltip v-if="isShow"  class="item" effect="dark" placement="right">
            <div slot="content">{{scope.row.name}}</div>
            <el-button v-on:click="toggleShow" type="text" style="color:#000">
              {{scope.row.name}}
            </el-button>
          </el-tooltip>
         <div v-else="isShow" v-on:click="toggleShow">{{scope.row.name}}</div>
        </template>
      </el-table-column>

      <el-table-column
        label="提现金额"
        width="">
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
        width="">
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
        width="">
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
        width="">
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
        :filters="[{text:'2015-06-01',value:'2015-06-01'},{text:'2016-05-03',value:'2016-05-03'}]"
        :filter-method="filterHandle"
        width="">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small" class="active">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
      </el-table> -->
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
import Btn from '../../egridDemo/cell-btn.vue'
import Editor from '../../egridDemo/cell-editor.vue'
import Vue from "vue"

  export default {
    data() {
      return {
        formInline: {
          merchant: '',
          region: ''
        },
        value5: 0,
        tableData: [
          {
            date: '2016-01-03',//提现时间
            name: '扬州茶楼',//商家名称
            address: '扬州市浦江东路',//商家地址
            amount:'222.20',//提现金额
            withdrawalWay:'自提',//提现方式
            status:'正常',//状态
            user:'小明',//使用用户
          },
          {
            date: '2016-12-31',//提现时间
            name: '重庆鱼火锅',//商家名称
            address: '重庆市苑北路1号附4号',//商家地址
            amount:'810.90',//提现金额
            withdrawalWay:'自提',//提现方式
            status:'正常',//状态
            user:'小红',//使用用户
          }
        ],
        multipleSelection: [],
        // 分页
        currentPage: 1,
        pagesize: 10,
        isShow:true,
        data: this.$store.state.data,
        columns: this.$store.state.columns,
        // columnsProps 用于定义 columns 公共的属性
        columnsProps: {
          width: 'auto',
          sortable: true,
          // 定义表格列如何渲染
          component: Editor
        },

        // columnsSchema 可以用来单独定义 columns 的某一列，这里的设置会覆盖 columnsProps 的配置属性
        columnsSchema: {
          '日期':{
            filters:[
              {text: '2016-05-01', value: '2016-05-01'},
              {text: '2016-05-02', value: '2016-05-02'},
              {text: '2016-05-03', value: '2016-05-03'},
              {text: '2016-05-04', value: '2016-05-04'}
            ],
            // filter-method:'filterHandle'
          },
          '地址': {
            width: 'auto',
            // propsHandler 可用于转换传给自定义组件的 props 这里将 props 变成了 address
            propsHandler ({ col, row }) {
              return { address: row[col.prop] }
            },
            // 这里的 props 是 address
            component: Vue.extend({
              props: ['address'],
              render (h) {
                return h('span', {
                  // style: { color: '#20A0FF' }
                }, this.address)
              }
            })
          }
        }


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
      },
      //时间筛选
      filterHandle(value, row, column) {
        const property = column['property'];
        return row [property] === value;
      },
      //
       // columnsHandler 可用于在现有的 columns 进行操作，对 columns 进行增删改，这里新增了操作列
      columnsHandler (cols) {
        return cols.concat({
          label: '操作',
          align: 'left',
          component: Btn,
          // listeners 可用于监听自定义组件内部 $emit 出的事件
          listeners: {
            'row-edit' (row) {
              console.log('row-edit', row)
            }
          }
        })
      },
      //数据
      selectionChange (rows) {
        console.log('selected', rows)
      }
    }
  }
</script>
<style scoped>
  .el-form--inline .el-form-item__label {
    float: left !important;
  }
</style>
