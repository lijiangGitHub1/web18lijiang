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
      label="操作时间"
      width="220">
    </el-table-column>
    <el-table-column
      prop="name"
      label="操作人"
      width="140"
      show-overflow-tooltip>
    </el-table-column>

    <el-table-column
      prop="gongneng"
      label="操作功能"
      width="140"
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      prop="miaoshu"
      label="描述"
      width="320"
      show-overflow-tooltip>
    </el-table-column>
       <el-table-column
      prop="ip"
      label="ip"
      width="126"
      show-overflow-tooltip>
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
          name:'小胖',
          type:'发改',
          gongneng:'项目填报',
          date: '2020-08-08  09:25:04',
          miaoshu:'点击了填报按钮',
          ip:'198.126.1.1'
        },
        {
          id:2,
          name:'小胖',
          type:'发改',
          gongneng:'项目填报',
          date: '2020-08-08  09:25:04',
          miaoshu:'点击了填报按钮',
          ip:'198.126.1.1'
        },
        {
          id:3,
          name:'小胖',
          type:'发改',
          gongneng:'项目填报',
          date: '2020-08-08  09:25:04',
          miaoshu:'点击了填报按钮',
          ip:'198.126.1.1'
        },
        {
          id:4,
          name:'小胖',
          type:'发改',
          gongneng:'项目填报',
          date: '2020-08-08  09:25:04',
          miaoshu:'点击了填报按钮',
          ip:'198.126.1.1'
        },
        {
          id:5,
          name:'小胖',
          type:'发改',
          gongneng:'项目填报',
          date: '2020-08-08  09:25:04',
          miaoshu:'点击了填报按钮',
          ip:'198.126.1.1'
        },
        {
          id:6,
          name:'小胖',
          type:'发改',
          gongneng:'项目填报',
          date: '2020-08-08  09:25:04',
          miaoshu:'点击了填报按钮',
          ip:'198.126.1.1'
        },{
          id:7,
          name:'小胖',
          type:'发改',
          gongneng:'项目填报',
          date: '2020-08-08  09:25:04',
          miaoshu:'点击了填报按钮',
          ip:'198.126.1.1'
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