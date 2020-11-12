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
      prop="name"
      label="项目名称"
      width="160">
    </el-table-column>
    <el-table-column
      prop="type"
      label="项目类型"
      width="100"
      show-overflow-tooltip>
    </el-table-column>

    <el-table-column
      prop="date"
      label="项目发布日期"
      width="160"
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      prop="miaoshu"
      label="项目描述"
      width="320"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
          name:'申报国家外贸基地通知',
          type:'发改',
          date: '2020-08-08',
          miaoshu:'1、发文单位：省商务厅 2、文件名称：申报国家外贸基地 3、文件要求：见附件（项目管理信息系统内下载） 4、上报时间：请于10月10日下班前发送至战略发展部'
        }, {
           id:2,
          name:'关于举办创新创业大赛',
          type:'工信',
          date: '2020-08-08',
          miaoshu:'1、发文单位：省科技厅 2、文件名称：关于举办创新创业大赛 3、文件要求：见附件（项目管理信息系统内下载，参赛企业必需通过科技型中小企业评价） 4、上报时间：请于10月30日完成网络申报。'
        }
        , {
           id:3,
          name:'关于举办创新创业大赛',
          type:'工信',
          date: '2020-08-08',
          miaoshu:'1、发文单位：省科技厅 2、文件名称：关于举办创新创业大赛 3、文件要求：见附件（项目管理信息系统内下载，参赛企业必需通过科技型中小企业评价） 4、上报时间：请于10月30日完成网络申报。'
        }
        , {
           id:4,
          name:'关于举办创新创业大赛',
          type:'工信',
          date: '2020-08-08',
          miaoshu:'1、发文单位：省科技厅 2、文件名称：关于举办创新创业大赛 3、文件要求：见附件（项目管理信息系统内下载，参赛企业必需通过科技型中小企业评价） 4、上报时间：请于10月30日完成网络申报。'
        }
        , {
           id:5,
          name:'关于举办创新创业大赛',
          type:'工信',
          date: '2020-08-08',
          miaoshu:'1、发文单位：省科技厅 2、文件名称：关于举办创新创业大赛 3、文件要求：见附件（项目管理信息系统内下载，参赛企业必需通过科技型中小企业评价） 4、上报时间：请于10月30日完成网络申报。'
        }
         , {
           id:6,
          name:'关于举办创新创业大赛',
          type:'工信',
          date: '2020-08-08',
          miaoshu:'1、发文单位：省科技厅 2、文件名称：关于举办创新创业大赛 3、文件要求：见附件（项目管理信息系统内下载，参赛企业必需通过科技型中小企业评价） 4、上报时间：请于10月30日完成网络申报。'
        }],
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