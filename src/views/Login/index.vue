<template>
    <div id="main">
        <header>
            <div class="head">
                <h1>项目管理平台</h1>
            </div>
        </header>
        <section>
            <div class="div-section">
                <div class="div-img">
                    <img class="u70_img" src="../../assets/statics/imgs/u70.png">
                </div>
                <div class="div-login">
                    <div class="div-login2">
                        <div class="u66_text">
                            <p><span>平台登录</span></p>
                        </div>
                        <div class="user" :class="{active2:flag}">
                            <span :class="{active:flag}">账号</span><input type="text" v-model="user" placeholder="默认 admin" @focus="in_focus(0)" @blur="in_blur(0)">
                        </div>
                        <div class="pwd" :class="{active2:flag1}">
                            <span :class="{active:flag1}">密码</span><input type="password" v-model="pwd" placeholder="默认 123456" @focus="in_focus(1)" @blur="in_blur(1)">
                        </div>
                         <div class="yzm" :class="{active2:flag2}">
                            <span :class="{active:flag2}">验证码</span><input type="password" v-model="yzm" placeholder="默认 666" @focus="in_focus(2)" @blur="in_blur(2)">
                        </div>
                        <div class="but" :plain="true" @click="login" >
                             <el-button class="but2">登录</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
     data:function () { 
            return{
                flag:false,
                flag1:false,
                flag2:false,
                pwd:'',
                user:'',
                yzm:''
            }
         },
    methods: {
        in_focus(num){
            if(num==0){
            this.flag=true;
            }else if(num==1){
            this.flag1=true;
            }else{
            this.flag2=true;
            }
        },
        in_blur(num){
            if(num==0){
            this.flag=false;
            }else if(num==1){
            this.flag1=false;
            }else{
            this.flag2=false;
            }
        }, 
        login(){
            if(this.user==''){
                 this.$message.error('用户名不能为空!');
            }else if(this.pwd==''){
                 this.$message.error('密码不能为空!');
            }else if(this.yzm==''){
                 this.$message.error('验证码不能为空!');
            }else if(this.user!='admin'||this.pwd!='123456'){
                 this.$message.error('用户名或密码错误!');
            }else if(this.yzm!='666'){
                 this.$message.error('验证码错误!');
            }else{
                this.$router.push({
                    path:'/index/shouye'
                });
            }
        }
    },
}
</script>
<style scoped>
    .active{
        color: rgb(45,169,250)!important;
    }
    .active2{
        border-color: rgba(45, 169, 250, 1)!important;
       
    }
    header{
        height: 80px;
    }
    .head{
        border-width: 0px;
        width: 1349px;
        height: 80px;
        background-color: rgba(45, 169, 250, 1);
        border: none;
        border-radius: 0px;
    }
    .head h1{
        color: white;
        font-weight: 400;
        font-size: 28px;
        position: absolute;
        left: 75px;
        top: 22px;
    }
    section{
    position: absolute;
    left: 0px;
    top: 185px;
    width: 1349px;
    height: 499px;
    border-width: 0px;
    }
    .div-section{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1349px;
    height: 499px;
    background-color: rgba(238, 247, 254, 1);
    }
    .div-img{
         border-width: 0px;
         position: absolute;
         left: 42px;
         top: 46px;
         width: 790px;
         height: 380px;  
    }
    .u70_img{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 790px;
    height: 380px;
    }
    .div-login{
    position: absolute;
    left: 911px;
    top: 46px;
    width: 345px;
    height: 380px;
    }
    .div-login2{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 345px;
    height: 380px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    }
    .div-login2>div{
       padding: 20px;
    }

    .u66_text{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 65px;
    }
    .u66_text p span{
        font-size: 16px;
        color: #2DA9FA;
    }
    .user{
        width: 260px;
        margin-left: 20px;
        margin-top: 70px;
        border-bottom: 1px solid rgba(228, 228, 228, 1);
    }
    .user input{
        width: 200px;
        margin-left: 45px;
        height: 40px;
        border:none;
        outline: none;
        position: absolute;
        top: 70px;

    }
    .user span{
        position: absolute;
        left: 20px;
        top: 80px;
        color: #666666;
        font-size: 14px;
    }
    .pwd{
        width: 260px;
        margin-left: 20px;
        margin-top: 40px;
        border-bottom: 1px solid rgba(228, 228, 228, 1);
    }
    .pwd input{
        width: 200px;
        margin-left: 45px;
        height: 40px;
        border:none;
        outline: none;
        position: absolute;
        top: 150px;

    }
    .pwd span{
        position: absolute;
        left: 20px;
        top: 160px;
        color: #666666;
        font-size: 14px;
    }
       .user span{
        position: absolute;
        left: 20px;
        top: 80px;
        color: #666666;
        font-size: 14px;
    }
    .yzm{
        width: 260px;
        margin-left: 20px;
        margin-top: 40px;
        border-bottom: 1px solid rgba(228, 228, 228, 1);
    }
    input::placeholder{
       color: rgb(153, 153, 153);
}
    .yzm input{
        width: 200px;
        margin-left: 45px;
        height: 40px;
        border:none;
        outline: none;
        position: absolute;
        top: 230px;

    }
    .yzm span{
        position: absolute;
        left: 20px;
        top: 240px;
        color: #666666;
        font-size: 14px;
    }
    .but{
    cursor: pointer;
    width: 260px;
    background-color: rgba(45, 169, 250, 1);
    border: none;
    border-radius: 3px;
    margin-left: 20px;
    margin-top: 50px;
    height: 0px;
    text-align: center;
    }
    .but2{
        border: none;
        outline: none;
        text-align: center;
        background: transparent;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        position: absolute;
        bottom: 16px;
        left: 140px;
    }
    .but2:focus{
        background: transparent;
    }

</style>