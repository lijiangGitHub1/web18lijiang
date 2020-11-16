<template>
    <div id="main">
     <el-container>
     <el-header>
         <div class="div_left">
             企业项目管理平台
         </div>
         <div class="div_right">
             <i class="el-icon-s-fold"></i>
             <router-link tag="i" to="/index/shouye" class="el-icon-s-home"></router-link>
             <i class="el-icon-monitor"></i>
             <i class="el-icon-refresh-right" @click="shuaxin"></i>
             <div class="date">
                 {{date|filtersdata}}
             </div>
         </div>
     </el-header>
     <el-container>
     <el-aside width="220px">
    <el-col :span="24" style="background-color: rgb(84, 92, 100);">
    <br/>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div class="sou">
                <input type="text"><i class="el-icon-search sou2"></i>
      </div>
      <el-menu-item index="1">
        <template slot="title">
          <router-link tag="div" to="/index/shouye"><i class="el-icon-location"></i>首页</router-link>
        </template>
      </el-menu-item>
      <el-submenu index="2">
          <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link tag="div" to="/index/rizhi">操作日志</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="div" to="/index/juese">角色管理</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag="div" to="/index/quanxian">权限管理</router-link></el-menu-item>
          <el-menu-item index="1-4"><router-link tag="div" to="/index/qiye">企业管理</router-link></el-menu-item>
          <el-submenu index="1-5">
              <template slot="title">
              <span slot="title">基础维护</span>
              </template>
              <el-menu-item-group>
          <el-menu-item index="1-5-1"><router-link tag="div" to="/index/gongsi">公司维护</router-link></el-menu-item>
          <el-menu-item index="1-5-2"><router-link tag="div" to="/index/keshi">科室维护</router-link></el-menu-item>
          <el-menu-item index="1-5-3"><router-link tag="div" to="/index/zhichi">支持方式</router-link></el-menu-item>
          <el-menu-item index="1-5-4"><router-link tag="div" to="/index/zhuguan">主管部门</router-link></el-menu-item>
              </el-menu-item-group>
              </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
          <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">公告发布</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1"><router-link tag="div" to="/index/xiangmu">项目发布</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link tag="div" to="/index/tongzhi">通知发布</router-link></el-menu-item>
          <el-menu-item index="3-3"><router-link tag="div" to="/index/cankao">参考材料</router-link></el-menu-item>
        </el-menu-item-group>        
      </el-submenu>
      <el-submenu index="4">
          <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">项目填报</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="4-1"><router-link tag="div" to="/index/zijin">资金类填报</router-link></el-menu-item>
          <el-menu-item index="4-2"><router-link tag="div" to="/index/keji">科技类填报</router-link></el-menu-item>
          <el-menu-item index="4-3"><router-link tag="div" to="/index/rongyu">荣誉类填报</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
          <template slot="title">
        <i class="el-icon-eleme"></i>
        <span slot="title">进度管理</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="5-1"><router-link tag="div" to="/index/zjjindu">资金类进度</router-link></el-menu-item>
          <el-menu-item index="5-2"><router-link tag="div" to="/index/kjjindu">科技类进度</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
          <template slot="title">
        <i class="el-icon-folder-checked"></i>
        <span slot="title">验收管理</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="6-1"><router-link tag="div" to="/index/zjyanshou">资金类验收</router-link></el-menu-item>
          <el-menu-item index="6-2"><router-link tag="div" to="/index/kjyanshou">科技类验收</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="7">
          <template slot="title">
        <i class="el-icon-s-order"></i>
        <span slot="title">项目档案</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="7-1"><router-link tag="div" to="/index/wenjian">项目文件</router-link></el-menu-item>
          <el-menu-item index="7-2"><router-link tag="div" to="/index/baogao">审计报告</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="8">
          <template slot="title">
        <router-link tag="div" to="/index/zonglan">
        <i class="el-icon-platform-eleme"></i>
        <span slot="title"></span>
        项目总览
        </router-link>
          </template>
      </el-menu-item>

      <el-menu-item index="9">
          <template slot="title">
            <router-link tag="div" to="/index/huishou">
        <i class="el-icon-delete"></i>
        <span slot="title"></span>
        回收站</router-link>
          </template>
      </el-menu-item>
    </el-menu>
  </el-col>
     </el-aside>
     <el-main>
         <keep-alive>
           <router-view></router-view>
         </keep-alive>
     </el-main>
     </el-container>
</el-container>
    </div>
</template>
<script>
  var datatime = function(str) {
            return str >= 10 ? str : '0' + str;
        }
export default {
     data(){
               return{
                    date: new Date(),
            }
     },
      methods: {
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      shuaxin(){
        this.$router.go(0);
      }
            },
            filters: {
                filtersdata: function(val) {
                    var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
                    var date = new Date(val);
                    var year = date.getFullYear();
                    var yue = datatime(date.getMonth() + 1);
                    var day = datatime(date.getDate());
                    var shi = datatime(date.getHours());
                    var min = datatime(date.getMinutes());
                    var we=date.getDay();
                    var we2=week[we];
                    var s = datatime(date.getSeconds());
                    return year + '年' + yue + '月' + day + '日  '+we2+'  '+ shi + ':' + min + ':' + s
                }
            },
            created() {
                var this2 = this;
                setInterval(function() {
                    this2.date = new Date();
                })
            }
}
</script>
<style scoped>  
  .sou2{
    cursor: pointer;
    color: white;
  }
 
  .el-col ul{
  height: 606px;
  }
  .sou{
    margin-top: 5px;
  }
  .sou input{
    width:176px;height:24px;border-radius:5px;margin-left:6px;
    outline: none;
  }

  .date{
        font-size: 14px;
        float: right;
  }
  .div_left{
        float: left;
        width: 220px;
        border-right:1px solid white;
        color: white;
        font-weight: 700;
        text-align: center;
  }
  .div_right{
        float: left;
        width: 600px;
        color: white;
        font-size: 22px;
  }
  .div_right i{
        margin: 0 10px;
        cursor: pointer;
  }
  .el-header, .el-footer {
      background-color: rgba(45, 169, 250, 1);
    color: #333;
    line-height: 50px;
    height: 50px!important;
    padding: 0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  section{
      height: 606px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-aside[data-v-c05bd2ea] {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 0!important;
  }

  .el-main{
    padding: 10px;
  }
 
</style>