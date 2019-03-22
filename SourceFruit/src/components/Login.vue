<template>
  <div class="loginhtml">
      <header>
        <div class="login-img"><img src="../assets/img/denglu-1.gif"></div>
        <div class="login-tupiao">登陆</div>
      </header>
      <section>
        <div class="login-input">
            <div class="login-shouji">
                 <i class="iconfont icon-shoujihao"></i>
                 <input type="text" value="请输入手机号" v-model="phonenum"/>
            </div>
            <div class="login-mima">
                 <i class="iconfont icon-yymima1"></i>
                 <input type="text" value="请输入登陆密码"  v-model="password"/>
            </div>
             
            <button class="login-denglu" @click="tap($event)">登陆</button>
            <p class="login-zhuce" @click="zhuche()">注册</p>
         </div>
      </section>
      <footer>
          <div class="login-foo">copyright<i class="iconfont icon-copyright"></i>橙海阳光</div>
      </footer>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  name: 'Login',
  data(){
    return {
      phonenum:"",
      password:""
     
    }
  },
  methods: {
      tap(e){
          //this.$router.push("/home")
          var _this= this;
          if(/^1(3|4|5|7|8|9)\d{9}$/.test(_this.phonenum)){
             axios({
               method:"post",
               url:"http://localhost:3000/login",
               data:Qs.stringify({phonenum:_this.phonenum,password:_this.password,id:1})
             }).then(function(data){
               sessionStorage.setItem("phonenum",_this.phonenum)
               _this.$router.push("/home")
               
             })
          }else{
            alert("请正确填写手机号或验证码")
            console.log(_this.phonenum)
          }
      },
      zhuche(){
          this.$router.push("/regist")
      }
  },
}    
      
</script>

<style scoped="">
.loginhtml{display: flex;height: 100vh;flex-direction: column;position: relative;}
.login-img img{width: 100%;height:6.80rem;}
.login-tupiao{width: 2.6rem;height: 2.6rem;border-radius:50%;background: #ffffff;
color: #72bb69;position: absolute;left: 4.12rem;top: 5.75rem;font-size: 0.41rem;
line-height: 2.6rem;text-align: center;}
section{flex: 1;}
.login-input{width:8.28rem;margin-left: 1.5rem;}
.login-shouji{width: 8.28rem;height: 0.8rem;margin-top: 0.5rem;}
.login-shouji input{width: 6.88rem;height: 0.8rem;margin-left: 0.2rem;border: 1px solid #ffffff;outline: none;}
.login-mima{width: 8.28rem;height: 0.8rem;margin-top: 0.3rem;}
.login-mima input{width: 6.88rem;height: 0.8rem;margin-left: 0.2rem;border: 1px solid #ffffff;outline: none;}
.login-denglu{width: 8.28rem;background: #69b461;height: 1.3rem;border-radius: 0.5rem;
margin-top: 1.35rem;border: none;}
.login-zhuce{float: right;font-size: 0.33rem;color: #3b393c;text-decoration: underline;}
footer{width: 8.28rem;margin-left: 1.5rem;}
footer .login-foo{font-size: 0.32rem;height: 0.32rem;line-height: 0.32rem;
color: #000000;text-align: center;width: 8.28rem;}
</style>