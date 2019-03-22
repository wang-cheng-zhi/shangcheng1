<template>
    <div class="detail" id="box">
        <div class="detail-header">
            <div class="detail-hea">
                <div class="change-jiantou"><i class="iconfont icon-xiazai6" @click="fanhui()"></i><p class="change-firstp">商品详情</p></div> 
                <div class="Indexlunbo">
                    <mt-swipe :auto="4000" class="inner">
                        <mt-swipe-item><img src="../assets/img/shuiguo1.jpg"/></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/img/shuiguo2.jpg"/></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/img/shuiguo5.jpg"/></mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="detail-title">爱媛38号&nbsp;&nbsp;&nbsp;(大果)&nbsp;&nbsp;8斤装&nbsp;&nbsp;&nbsp;&nbsp;果实颗粒饱满多汁</div>
                <div class="detail-price">￥ 78.0</div>
                <ul class="detail-firstul">
                    <li><img src="../assets/img/detail-4.gif"/>有机认证</li>
                    <li><img src="../assets/img/detail-4.gif"/>产品溯源</li>
                    <li><img src="../assets/img/detail-4.gif"/>产地直销</li>
                    <li><img src="../assets/img/detail-4.gif"/>全场包邮</li>
                </ul>
            </div>
            <div class="detail-xiangqing">
                <p class="detail-xiangqingp">商品</p>
                <div class="detail-xiangqingdiv">
                    <p class="detail-xiangqingdiv-firstp">整箱过数</p>
                    <p class="detail-xiangqingdiv-secondp">15粒-18粒(大果)</p>
                    </div>
            </div>
            <div class="detail-zhan">
                <div class="detail-zhanshi">
                    <router-link to="/xiangqing" tag="div">详情</router-link>
                    <router-link to="/pingjia" tag="div">评价</router-link>
                    <router-link to="kepu" tag="div">科普</router-link>
                
                
                </div>
            <router-view></router-view>     
            </div>

        </div>
        
        <div class="detail-foo" v-for="(item,i) in arr" :key="item.id">
            <ul>
                <li><i class="iconfont icon-shouye" @click="tap()"></i><p>首页</p></li>
                <li><i class="iconfont icon-icon-service"></i><p>客服</p></li>
                <li><i class="iconfont icon-gouwuche" @click="gouwuche()"></i><p>购物车</p></li>
            </ul>
            <div class="detail-button" @click="addbtn1(i)">加入购物车</div>
        </div>
    </div>
</template>    
            
                  
                  



<script>
import axios from "axios";
import Qs from "qs";
export default {
    name:"Detail",
    data(){
        return{
            phonenum:sessionStorage.getItem("phonenum"),
            arr:[1]
        }
    },
    methods:{
        fanhui(){
            this.$router.go(-1)
        },
        tap(){
            this.$router.push("/Index")
        },
        gouwuche(){
            this.$router.push("/Shoppingtrolley")
        },
        addbtn1(i){
             var _this = this;
            axios({
                 method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                url:"http://localhost:3000/gouwu1",
                data:Qs.stringify({id:_this.arr[i].id,name:_this.arr[i].name,
                        price:_this.arr[i].price,url:_this.arr[i].url,phonenum:_this.phonenum})
            }).then(function(data){
              if(data.data == 1){
                  alert("加入购物车成功")
                  _this.$router.push("/shoppingtrolley")
              }
            })
        }
    },
}
</script>



<style scoped="">
.detail{background: #f2e9e4;}
.detail-header{flex:1;min-height: 92vh;overflow: auto;}
.detail-hea{background: #ffffff;}
.change-jiantou{padding: 0 0 0 0.5rem;height: 1.3rem;}
.change-firstp{font-size: 0.52rem;color: #000000;line-height: 1.3rem;text-align: center;}
.icon-xiazai6{font-size: 0.53rem;float: left;width: 0.53rem;height: 0.53rem;line-height: 1.3rem;}
.Indexlunbo{height: 6.5rem;}
 .Indexlunbo img{height: 6.5rem;width: 100%;}
.detail-title{font-size: 0.44rem;color: #000000;line-height: 1.3rem;padding: 0 0.75rem 0 0.33rem;
overflow: hidden;height: 1.3rem;}
.detail-price{font-size: 0.44rem;color: #ff0000;padding: 0.33rem;margin-top: 0.9rem;}
.detail-firstul{width: 100%;height: 0.4rem;margin-top: 0.3rem;padding-bottom: 0.3rem;}
.detail-firstul li{width: 25%;font-size: 0.36rem;color: #000000;float: left;line-height: 0.4rem;text-align: center;}
.detail-firstul img{width: 0.37rem;height: 0.41rem;}
.detail-xiangqing{background: #ffffff;margin-top: 0.5rem;padding-left: 0.3rem;}
.detail-xiangqingp{height: 1.26rem;font-size: 0.45rem;color: #000000;line-height: 1.26rem;}
.detail-xiangqingdiv{height: 1.26rem;}
.detail-xiangqingdiv-firstp{font-size: 0.35rem;color: #c0c0c0;line-height: 1.26rem;float: left;}
.detail-xiangqingdiv-secondp{font-size: 0.4rem;color: #000000;float: left;
line-height: 1.26rem;margin-left: 1rem;}
.detail-foo{height: 1.54rem;background: #ffffff;flex: 0;}
.detail-foo ul{width: 6.48rem;height: 1.54rem;float: left;}
.detail-foo li{font-size: 0.35rem;float: left;width: 33.3%;text-align: center;margin-top: 0.4rem;}
.detail-button{float: right;font-size: 0.35rem;width: 4.3rem;height: 1.54rem;background: #6ab361;
line-height: 1.54rem;text-align: center;}
.detail-zhan{background: #ffffff;}
.detail-zhanshi{background: #ffffff;margin-top: 0.3rem;font-size: 0.4rem;height: 1.4rem;line-height: 1.4rem;}
.detail-zhanshi  div{width: 33.3%;color: #000000;float: left;line-height: 1.4rem;text-align: center;} 
.detail-zhanshi  div:hover{color: #7fa37d;border-bottom: 0.09rem solid #7fa37d;}
</style>


