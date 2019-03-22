<template>
    <div class="Indexhtml">
        <div class="Indexhtml-tou">
            <input type="text" value="请搜索商品"/>
            <div class="Indexlunbo">
               <mt-swipe :auto="4000" class="inner">
		          <mt-swipe-item><img src="../assets/img/shuiguo1.jpg"/></mt-swipe-item>
		          <mt-swipe-item><img src="../assets/img/shuiguo2.jpg"/></mt-swipe-item>
		         <mt-swipe-item><img src="../assets/img/shuiguo5.jpg"/></mt-swipe-item>
		       </mt-swipe>
			</div>
                 
                  
            <div class="index-daohang">
                <ul class="index-ul">
                    <li @click="tuijian"><img src="../assets/img/shouye-1.gif"/><p>推荐</p></li>
                    <li @click="mihoutao"><img src="../assets/img/shouye-2.gif"/><p>猕猴桃</p></li>
                    <li @click="ganju"><img src="../assets/img/shouye-3.gif"/><p>柑橘</p></li>
                    <li @click="pingguo"><img src="../assets/img/shouye-4.gif"/><p>苹果</p></li>
                    <li @click="caomei"><img src="../assets/img/shouye-5.gif"/><p>草莓</p></li>
                </ul>
            </div>    
        </div>    
        <div class="index-section">
            <div class="index-sec"><img src="../assets/img/shouye-6.gif"/></div>
            <div class="index-tui">
                <div class="index-left"></div>
                <div class="index-zhongjian">优惠推荐</div>
                <div class="index-right"></div>
            </div>
            <ul class="index-secondul"  >
                <li class="index-li" @click="detail()"  v-for="(item,i) in arr" :key="item.id">
                    <div class="index-li-left"> 
                     <img :src='item.url | glq(item.url)'/>
                    </div>
                    <div class="index-li-right">
                        <h2>{{item.name}}</h2>
                        <div class="firstp">浦江.四川</div>
                        <div class="secondp">源产地</div>
                        <div class="thiredp">￥{{item.price}}元</div>
                        <div class="firstdiv"><p class="fourthp">￥{{item.price}}元</p><button @click.stop="addbtn(i)"><i class="iconfont icon-jiahao"></i></button></div>
                    </div>
                </li>
            </ul>     
            

            
        </div>
    </div>
</template>

            




<script>
import axios from "axios";
import Qs from "qs";
export default {
    name:"Index",
    data(){
        return{
            arr:[],
            phonenum:sessionStorage.getItem("phonenum")

        }
    },
    methods: {
        detail(){
            this.$router.push("/Detail")
        },
        tuijian(){
            var _this = this;
            axios({
                method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                url:"http://localhost:3000/index"
                // data:Qs.stringify({class:0})
            }).then(function(data){
                _this.arr = data.data
                //console.log(data.data)
                console.log(data.data)
            })
        },
        mihoutao(){
            var _this = this;
            axios({
                method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                url:"http://localhost:3000/index",
                data:Qs.stringify({class:5})
            }).then(function(data){
                _this.arr = data.data
                //console.log(data.data)
                console.log(data.data)
            })
        },
        ganju(){
            var _this = this;
            axios({
                method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                url:"http://localhost:3000/index",
                data:Qs.stringify({class:1})
            }).then(function(data){
                _this.arr = data.data
                //console.log(data.data)
                console.log(data.data)
            })
        },
        pingguo(){
             var _this = this;
            axios({
                method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                url:"http://localhost:3000/index",
                data:Qs.stringify({class:4})
            }).then(function(data){
                _this.arr = data.data
                //console.log(data.data)
                console.log(data.data)
            })
        },
        caomei(){
             var _this = this;
            axios({
                method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                url:"http://localhost:3000/index",
                data:Qs.stringify({class:6})
            }).then(function(data){
                _this.arr = data.data
                //console.log(data.data)
                console.log(data.data)
            })
        },
        addbtn(i){
            var _this = this;
            axios({
                 method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                url:"http://localhost:3000/gouwu",
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
    mounted() {
         var _this = this;
            axios({
                method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                url:"http://localhost:3000/index"
                // data:Qs.stringify({class:0})
            }).then(function(data){
                _this.arr = data.data
                //console.log(data.data)
                console.log(data.data)
            })
    }
}
</script>



<style scoped="">
    .Indexhtml{display: flex;flex-direction: column;}
    .Indexhtml-tou{position: relative;}
    .Indexhtml-tou input{width: 10.22rem;border: 1px solid #cecece;height: 0.96rem;
    margin-left: 0.3rem;background: #ffffff;line-height: 0.96rem;position: absolute;top: 1.17em;left: 0.05rem;z-index: 1;}
    .Indexlunbo{height: 6.5rem;}
    .Indexlunbo img{height: 6.5rem;width: 100%;}
    .index-daohang{height: 2.94rem;}
    .index-ul{width: 100%;height: 2.85rem;}
    .index-ul li{float: left;font-size: 0.34rem;width: 20%;}
    .index-ul li:hover{border-bottom: 0.09rem solid #c2a57b;}
    .index-ul p{font-size: 0.34rem;color: #404040;text-align: center;}
    .index-ul img{width: 1.48rem;height: 1.48rem;padding-top: 0.74rem;padding-left: 0.33rem;}

    .index-section{background: #efeae4;padding:0 0.3rem;}
    .index-sec{height: 2.84rem;padding-top:0.28rem}
    .index-sec img{height: 2.84rem;width: 10.2rem;}

    .index-tui{display: flex;font-size: 0.31rem;justify-content: space-between;align-items: center;height: 1.20rem;width:10.2rem}
    .index-left{height: 0.03rem;width: 3.4rem;background-color: #c2a57b;}
    .index-zhongjian{color: #c2a57b;line-height: 1.2rem;}
    .index-right{height: 0.03rem;width: 3.4rem;background-color: #c2a57b;}

    .index-secondul{width: 10.2rem;}
    .index-li{padding: 0.6rem;background: #ffffff;width: 9.02rem;height: 3.62rem;margin-bottom: 0.2rem;}
    .index-li-left{float: left;width: 3.62rem;height: 3.62rem;}
    .index-li img{width: 3.62rem;height: 3.62rem;float: left;}
    .index-li-right{float: right;width: 5.05rem;height: 3.62rem;}
    .index-li-right h2{font-size: 0.38rem;float: right;overflow: hidden;height: 1.09rem;width: 5.05rem;}
    .firstp{font-size: 0.42rem;line-height: 0.46rem;color: #84a77f;width: 5.05rem;}
    .secondp{font-size: 0.33rem;line-height: 0.67rem;width: 5.05rem;color: #b7b7b5;}
    .thiredp{font-size: 0.24rem;line-height: 0.6rem;width: 5.05rem;color: #b7b7b5;text-decoration: line-through;}
    .firstdiv{height: 0.66rem;width: 5.05rem;display: flex;justify-content: space-between;}
    .fourthp{font-size: 0.38rem;float: left;color: #2d2d2d;}
    .firstdiv  i{float: right;}
</style>
