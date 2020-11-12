<template>
    <div class="main">
              <div class="h4text">
                <h4>早上好,尊敬的超级管理员</h4>
              </div>
              <div class="img_top line-hg">
                <img src="../../assets/statics/imgs/1.png">
                <img src="../../assets/statics/imgs/2.png">
                <img src="../../assets/statics/imgs/3.png">
                <img src="../../assets/statics/imgs/4.png">
              </div>
              <div class="zhong line-hg">
                  <ul class="ulcontent">
                    <li>待处理项目</li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                  </ul>
                  <ul class="ulcontent">
                    <li>待处理项目</li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                    <li>某某某项目<span>子公司一</span><a href="#">审核</a></li>
                  </ul>
              </div>
              <div class="fot"></div>
          </div>
</template>
<style scoped>
    .h4text{
    width: 160px;
    height: 30px;
  }
  .h4text h4{
    font-weight: 700;
    color: #2DA9FA;
    font-size: 14px;
    height: 20px;
    line-height: 16px;
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
    width: 1070px;
    height: 760px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 5px;
    padding: 20px;
  }
   .sou2{
    cursor: pointer;
    color: white;
  }
  .fot{
    margin-top: 440px;
    height: 300px;
    background: url('../../assets/statics/imgs/5.png')no-repeat;
  }
  .ulcontent{
    margin-top: 20px;
    float: left;
  }
  .ulcontent:nth-of-type(2){
    margin-top: 20px;
    margin-left: 30px;
  }
  .ulcontent li:first-child{
    background: rgba(238, 247, 254, 1);
  }
  .ulcontent li{
    font-size: 14px;
    width: 470px;
    color: #333;
    text-align: left;
    line-height: 1!important;
    list-style: none;
    padding: 18px 20px;
    border-bottom: 1px solid rgba(196, 205, 213, 1);
  }
  .ulcontent li span{
    margin: 0 142px;
  }
  .ulcontent li a{
        color: #FF9800;
        text-decoration: none;
  }
  .ulcontent li:hover{
    background: rgba(238, 247, 254, 1);
  }

  .img_top{
    float: left;
  }
  .img_top img{
    margin: 0 14px;
    line-height: 2px;
  }
  .img_top img:first-child{
    margin: 0 14px 0 0;
  }
</style>