<template>
   <div>
        <div class="change">
            <div class="change-jiantou"><i class="iconfont icon-xiazai6" @click="fanhui"></i><p class="change-firstp">修改密码</p></div> 
              <mt-field class="iconfont icon-shoujihao" placeholder="请输入手机号" v-model="phonenum"></mt-field>
             <mt-field class="iconfont icon-mima" placeholder="请输入原密码" type="password" v-model="passwordjiu"></mt-field>
             <mt-field class="iconfont icon-mima"  placeholder="请输入新密码" type="password" v-model="password"></mt-field>
             
             <button class="change-buttom" @click="xiugai">确定</button>
        </div>
        <footer>
          <div class="login-foo">copyright<i class="iconfont icon-copyright"></i>橙海阳光</div>
        </footer>
    </div>
</template>




<script>
import axios from "axios";
import Qs from "qs";
export default {
    name:"Changepassword",
    data() {
        return {
            password:"",
            passwordjiu:"",
            phonenum:""

        }
    },
    methods: {
        
        fanhui(){
            this.$router.go(-1)
        },
       
        xiugai(){
            var _this = this;
            axios({
                method:"post",
                url:"http://localhost:3000/xiugai",
                data:Qs.stringify({phonenum:_this.phonenum,passwordjiu:_this.passwordjiu,passwordxin:_this.password})
            }).then(function(data){

                if(data.data == 1){
                    alert("xiugaicg")
                    sessionStorage.removeItem("phonenum")
                    _this.$router.push("/login")
                }
                if(data.data == 0){
                    alert("xiugaishibai")
                }
               
                 
            })
        }
    },
}
</script>




<style scoped="">
.change{flex: 1;min-height: 88vh;}
.change-jiantou{padding: 0 0 0 0.5rem;height: 1.3rem;}
.change-firstp{font-size: 0.52rem;color: #000000;line-height: 1.3rem;text-align: center;}
.icon-xiazai6{font-size: 0.53rem;float: left;width: 0.53rem;height: 0.53rem;line-height: 1.3rem;}
.change-buttom{width: 100%;height: 1.34rem;background: #6ab460;color: #ffffff;text-align: center;line-height: 1.34rem;}
footer .login-foo{font-size: 0.32rem;height: 0.32rem;line-height: 0.32rem;
color: #000000;text-align: center;width: 8.28rem;}

</style>


