<template>
    <div class="main line-hg">
      <div class="div_top">
       <el-select class="leix"  v-model="value" placeholder="请选择项目类型">
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


  <el-input
  placeholder="模糊搜索"
  v-model="input"
  clearable>
</el-input>
<el-button type="primary" class="sousuo1">搜索</el-button>
<el-button>重置</el-button>
  </div>  
      <div class="div_main">
        <el-row class="anniu">
<el-button type="primary" class="">新增</el-button>
<el-button type="danger">批量删除</el-button>
<el-button>重置密码</el-button>
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
      prop="name"
      label="姓名"
      width="140">
    </el-table-column>
    <el-table-column
      prop="iphone"
      label="手机号（登录账号）"
      width="220"
      show-overflow-tooltip>
    </el-table-column>

    <el-table-column
      prop="sex"
      label="性别"
      width="140"
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      prop="gsname"
      label="公司名称"
      width="140"
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      prop="juese"
      label="角色"
      width="140"
      show-overflow-tooltip>
    </el-table-column>
        <el-table-column label="操作">
      <template slot-scope="scope">
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
          name:'大马猴',
          iphone:'13278570090',
          sex:'男',
          gsname: '某某子公司',
          juese:'超级管理员'
        },
        {
          id:2,
          name:'大马猴',
          iphone:'13278570090',
          sex:'男',
          gsname: '某某子公司',
          juese:'超级管理员'
        },
        {
          id:3,
          name:'大马猴',
          iphone:'13278570090',
          sex:'男',
          gsname: '某某子公司',
          juese:'超级管理员'
        },
        {
          id:4,
          name:'大马猴',
          iphone:'13278570090',
          sex:'男',
          gsname: '某某子公司',
          juese:'超级管理员'
        },
        {
          id:5,
          name:'大马猴',
          iphone:'13278570090',
          sex:'男',
          gsname: '某某子公司',
          juese:'超级管理员'
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
    margin-left: 10px;
  }
  .leix{
    width: 240px;
  }
  .riqi{
    margin: 0 85px;
    width: 240px;
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