<template>
    <div class="main line-hg" @>
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
<el-button type="primary" class="" @click="add">新增</el-button>
<el-button type="danger">批量删除</el-button>
</el-row>
<el-table
    class="eltab"
    ref="multipleTable"
    :data="data"
    tooltip-effect="dark"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="序号"
      width="180">
      <template slot-scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
      <el-table-column
      prop="name"
      label="角色"
      width="180"
      show-overflow-tooltip>
    </el-table-column>
       <el-table-column
      prop="state"
      label="描述"
      width="450"
      show-overflow-tooltip>
    </el-table-column>
        <el-table-column label="操作">
      <template slot-scope="scope">
           <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
      <div style="display:none;">
        {{$route.params.content}}
        {{$route.params.content2}}
      </div>
    </div>
</template>

<script>
var height=479;
var flag=0;
var id=201412101228;
export default {
  beforeUpdate() {
    flag++;
    id+=0.5;
    if(this.$route.params.content!=undefined&&this.$route.params.content2!=undefined&&this.$route.params.content!=''&&this.$route.params.content2!=''&&flag!=667){
       this.data.push({'id':id,'name':this.$route.params.content,'state':this.$route.params.content2});
        height+=53;
        document.getElementsByClassName("main")[0].style.height=height+'px';
    }
  },
  created() {
    this.axios.get('http://yapi.dapengjiaoyu.com/mock/380/order').then((res)=>{
      var array=[];
      for(var i=6;i<12;i++){
        array.push(res.data.data[i]);
      }
      this.data=array;
    });
  },
   data() {
      return {
        data:[],
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
         this.$router.push({
          path:'/index/update'
        });
      },
      handleDelete(index, row) {
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
           this.data.splice(index,1);
           flag=666;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

      },
      add(){
        this.$router.push({
          path:'/index/add'
        });
      }
    },
}
</script>

<style scoped>
.el-table .cell {
  text-align: center!important;
}
  .foot{
    margin-top: 15px;
  }
  .anniu{
    float: left;
    margin: 15px 0;
  }
  .div_top{
    text-align:left;
    width:100%;
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