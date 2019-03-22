<template>
   <div class="loginhtml">
      <header>
        <div class="login-img"><img src="../assets/img/denglu-1.gif"></div>
        <div class="login-tupiao">登陆</div>
      </header>
      <section>
        <div class="login-input">
            <!-- <div class="login-shouji">
                <i class="iconfont icon-shoujihao"></i>
                <input type="text" value="请输入手机号"  v-model="phonenumber"  />
            </div>
            <div class="login-mima">
                <i class="iconfont icon-yymima1"></i>
                <input type="text" value="请输入注册密码" v-model="password"/>
            </div>
            <div class="login-mima">
                <i class="iconfont icon-yymima1"></i>
                <input type="text" value="请再次输入注册密码" v-model="password"  />
            </div>
            <div class="login-mima">
                <i class="iconfont icon-yymima1"></i>
                <input type="text" value="请输入验证码" v-model="yzm"  />
            </div>-->
          <mt-field class="iconfont icon-shoujihao" placeholder="请输入手机号" v-model="phonenum"></mt-field>
         <mt-field class="iconfont icon-yymima1"  placeholder="请输入密码" type="password" v-model="password"></mt-field>

         <mt-field class="iconfont icon-shoujihao" placeholder="请输入验证码" type="text" v-model="yzm">
           <input type="button" :value="val" class="regist-fs"  @click="send($event)"/>
        </mt-field>
        <div class="proto">
			<input type="checkbox"  :checked="status" id="sele"/>
			<span>阅读并同意</span>
			   <span class="pro" @click="xieyi()">《产品服务协议》</span>
		  </div>


            <button class="login-zhuce" @click="tap()">注册</button>
            <p class="login-denglu" @click="denglu()">登陆</p>
         </div>




      </section>
      <footer>
          <div class="login-foo">copyright<i class="iconfont icon-copyright"></i>橙海阳光</div>
      </footer>
  </div>
</template>

<script>
import axios from 'axios';
import Qs from "qs";
export default {
  name: 'Regist',
  data(){
      return{
        phonenum:"",
        password:"",
        yzm:"",
        val:"发送验证码",
        countdown:60,
        status:false
      }
  },
  methods: {
      tap(){
          // this.$router.push("/login")
          var _this = this;

        axios({

          method:"post",
          headers:{"Content-Type":"application/x-www-form-urlencoded"},
          url:"http://localhost:3000/regist",
          data:Qs.stringify({phonenum:_this.phonenum,id:2,
          yzm:_this.yzm,password:_this.password})
        }).then(function(data){
              alert(data.data)
              _this.$router.push("/login")
        })
      },
     denglu(){
          this.$router.push("/login")
      },
      send(e){

         var _this = this
         clearInterval(_this.timer)
         if(/^1(3|4|5|7|8|9)\d{9}$/.test(_this.phonenum)){
              this.timer= setInterval(function(){
                if(_this.countdown <= 0){
                    e.target.disabled = false
						        e.target.style = "";
				            _this.val="发送验证码";
				           _this.countdown = 60;
						       clearInterval(_this.timer)
                }else{
                   e.target.disabled = true;
						       e.target.style = "border-color:#aaa;color:#aaa;"
				           _this.val="重新发送(" + _this.countdown + ")";
				           _this.countdown--;
                }
              },1000)
          if(e.target.disabled==false){
            axios({
              method:"post",
              headers:{"Content-Type":"application/x-www-form-urlencoded"},
              url:"http://localhost:3000/regist",
              data:Qs.stringify({phonenum:_this.phonenum,id:1})
            }).then(function(data){
              console.log(data.data)
            })
          }
        }else{
          alert("请正确填写手机号")
          console.log(_this.phonenum)
        }
      }
  },
  xieyi(){

  }
}

</script>

<style scoped="">
.loginhtml{display: flex;height: 100vh;flex-direction: column;position: relative;}
.login-img img{width: 100%;height:6.80rem;}
.login-tupiao{width: 2.6rem;height: 2.6rem;border-radius:50%;background: #ffffff;
color: #72bb69;position: absolute;left: 4.12rem;top: 5.75rem;font-size: 0.41rem;
line-height: 2.6rem;text-align: center;}
section{flex: 1;}
.login-input{width:8.28rem;margin-left: 1.5rem;margin-top: 1.5rem;}
.regist-fs{font-size: 0.4rem;width: 2.5rem;height: 0.8rem;}
.login-zhuce{width: 8.28rem;background: #69b461;height: 1.3rem;border-radius: 0.5rem;
margin-top: 1.35rem;border: none;}
.login-denglu{float: right;font-size: 0.33rem;color: #3b393c;text-decoration: underline;}
footer{width: 8.28rem;margin-left: 1.5rem;}
footer .login-foo{font-size: 0.32rem;height: 0.32rem;line-height: 0.32rem;
color: #000000;text-align: center;width: 8.28rem;}


.proto{width:7rem;height:0.6rem;margin:0 auto;font-size:0.28rem;display:flex;align-items:center;}
.proto input{margin-right:0.1rem;-webkit-appearance:none;width:0.31rem;height:0.3rem;
		background:url(../assets/img/check.jpg) no-repeat left top;background-size:cover;}
.proto input:checked{background-position-x:-0.31rem;}
.pro{color:#0069D9;}
</style>









