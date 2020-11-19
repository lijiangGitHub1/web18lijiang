<template>
  <div class="main line-hg">
    <div class="div_top">
      <h5>权限</h5>
    </div>
    <div class="div_content">
        <div class="div_left">
           <div><span>权限名称：</span><input type="text" v-model="content" placeholder="请输入权限名称"></div>
        <div><span class="piaoshu">描述：</span>
        <textarea name="" id="textare" v-model="content2" placeholder="请对权限进行描述"></textarea>
        </div>
        </div>
       <div class="div_right">
          <span>权限选择：</span>
          <div class="check">
          <input type="checkbox"> 系统管理<br/>
          <input type="checkbox"> 基础维护<br/>
          <input type="checkbox"> 公告发布<br/>
          <input type="checkbox"> 项目总览<br/>
          <input type="checkbox"> 进度管理<br/>
          </div>
       </div>
    </div>
    <div class="div_foot">
         <el-row class="anniu">
<el-button type="primary" @click="save">保存</el-button>
<el-button @click="fanhui">返回</el-button>
</el-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content:'',
      content2:''
    }
  },
  methods: {
    fanhui(){
     this.$router.go(-1); 
    },
    save(){
      this.$router.push({
        path:'/index/addquanxian',
        name:'addquanxian',
        params:{
          content:this.content,
          content2:this.content2
        }
      });
    }
  },
};
</script>

<style scoped>
.div_foot{
  margin: 0 auto;
  width: 180px;
}
.check{
    width: 579px;
    height: 374px;
    overflow: auto;
    overflow-x: hidden;
    background-image: none;
}
.piaoshu{
  position: absolute;
  top:250px;
  left:358px;
}
#textare:focus{
    border:1px solid rgba(45, 169, 250, 1);
}
#textare{
    text-indent: 5px;
    width: 242px;
    height: 156px;
    font-weight: 400;
    font-size: 13px;
    text-decoration: none;
    color: #666666;
    text-align: left;
    border:1px solid rgba(196, 205, 213, 1);
    outline-style: none;
    border-radius: 4px;
    margin-left: 70px;
    margin-top: 30px;
}
.div_left input:focus{
    border:1px solid rgba(45, 169, 250, 1);
}
.div_left input{
    color: #666666;
    text-indent: 5px;
    width: 239px;
    height: 36px;
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    text-align: left;
    outline-style: none;
    border:1px solid rgba(196, 205, 213, 1);
    border-radius: 4px;
}
.div_content{
  margin-top:80px;
  font-size: 14px;
  padding: 0 80px;
}
.div_left{
  float: left;
}
.div_right{
  float: right;
}
.content {
  width: 80%;
  margin: 80px auto 0 auto;
}

.el-table .cell {
  text-align: center !important;
}
.foot {
  margin-top: 15px;
}
.anniu {
  float: left;
  margin: 15px 0;
}
.div_top {
  text-align: left;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(202, 210, 217);
}
.sousuo1 {
  margin-left: 10px;
}
.leix {
  width: 240px;
}
.riqi {
  margin: 0 85px;
  width: 240px;
}
.el-input {
  width: 240px;
}
.div_top {
  float: left;
}
.el-aside[data-v-c05bd2ea] {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 0 !important;
}
.line-hg {
  line-height: 0 !important;
}
.el-main {
  padding: 10px;
}
.main {
  width: 1085px;
  height: 545px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 5px;
  padding: 20px;
}
</style>