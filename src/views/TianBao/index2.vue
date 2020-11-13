<template>
    <div class="main line-hg">
      <div class="div_top">
       <el-select class="leix"  v-model="value" placeholder="项目主管部门">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
 <el-select class="jibie"  v-model="value" placeholder="项目级别">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
     <el-select class="leix"  v-model="value" placeholder="主管科室">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>

       <el-select class="riqi" v-model="value2" placeholder="请选择日期范围">
      <el-option
      v-for="item2 in options2"
      :key="item2.value"
      :label="item2.label"
      :value="item2.value">
    </el-option>
  </el-select>
   <div class="div_er">
  <el-input
  placeholder="模糊搜索"
  v-model="input"
  clearable>
</el-input>
<el-button type="primary" class="sousuo1">搜索</el-button>
<el-button>重置</el-button>
   </div>
  </div>  
      <div class="div_main">
        <el-row class="anniu">
<el-button type="primary" class="">新增</el-button>
<el-button type="danger">批量删除</el-button>
<el-button>通过</el-button>
<el-button>驳回</el-button>
<el-button>提交</el-button>
<el-button>导出</el-button>
</el-row>
<el-table
    class="eltab"
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="序号"
      width="50">
      <template slot-scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="申报时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="90"
      show-overflow-tooltip>
    </el-table-column>

    <el-table-column
      prop="xmname"
      label="项目名称"
      width="160"
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      prop="danwei"
      label="申报单位"
      width="160"
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      prop="type"
      label="计划类别"
      width="160"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">详情</el-button>
            <el-button
          size="mini"
          type="warning"
          @click="handleEdit(scope.$index, scope.row)">公告</el-button>
           <el-button
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
      </div>
      <div class="foot">
        <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
      </div>
    </div>
</template>

<script>
export default {
   data() {
      return {
        tableData: [{
          id:1,
          status:'已提交',
          xmname:'某某科技类项目',
          danwei:'某某某单位',
          type:'一类',
          date: '2020-08-08',
        },
        {
          id:2,
          status:'已提交',
          xmname:'某某科技类项目',
          danwei:'某某某单位',
          type:'一类',
          date: '2020-08-08',
        },
        {
          id:3,
          status:'待提交',
          xmname:'某某科技类项目',
          danwei:'某某某单位',
          type:'一类',
          date: '2020-08-08',
        },
        {
          id:4,
          status:'已提交',
          xmname:'某某科技类项目',
          danwei:'某某某单位',
          type:'二类',
          date: '2020-08-08',
        },
        {
          id:5,
          status:'待提交',
          xmname:'某某科技类项目',
          danwei:'某某某单位',
          type:'一类',
          date: '2020-08-08',
        }
        ],
        multipleSelection: [],
        input: '',
        options: [{
          value: '选项1',
          label: '发改'
          
        }, {
          value: '选项2',
          label: '工信'
        }, {
          value: '选项3',
          label: '科技'
        }, {
          value: '选项4',
          label: '商务'
        }],
        value: '',
        value2: '',
          options2: [{
          value: '选项1',
          label: '2018/08/08-2018/12/08'
          
        }, {
          value: '选项2',
          label: '2019/08/08-2019/11/08'
        }, {
          value: '选项3',
          label: '2019/11/08-2020/01/01'
        }, {
          value: '选项4',
          label: '2020/01/01-2020/11/11'
        }]
      }
    },
    methods: {
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
}
</script>

<style scoped>
  .jibie{
    width: 240px;
    float: left;
    margin: 0 85px;
  }
  .foot{
    margin-top: 15px;
  }
  .anniu{
    float: left;
    margin: 15px 0;
  }
  .div_top{
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(202,210,217);
  }
  .sousuo1{
    margin-left: 85px;
  }
  .leix{
    width: 240px;
    float: left;
  }
  .div_er{
    margin: 20px 0 0 0;
    float: left;
  }
  .riqi{
    float: left;
    width: 240px;
    margin: 20px 85px 0 0;
  }
  .el-input{
    width: 240px;
  }
  .div_top{
    float: left;
  }
  .el-aside[data-v-c05bd2ea] {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 0!important;
  }
  .line-hg{
    line-height: 0!important;
  }
  .el-main{
    padding: 10px;
  }
  .main{  
    width: 1085px;
    height: 545px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 5px;
    padding: 20px;
  }
</style>