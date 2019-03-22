<template>
    <div class="shop">
       <ul class="shop-ul">
           <li class="shop-li">
               <div class="shop-checkboxdan"><input type="checkbox"/></div>
               <div class="shop-img"><img src="../assets/img/gouwuche-1.gif"/></div>
               <div class="shop-detail">
                   <div class="shop-detail1">
                       <h2>爱媛38号(大果)8斤装果实颗粒饱满多汁</h2>
                       <button class="shop-shanchu">X</button>
                   </div>
                   <div class="shop-jiuprice">￥49.00</div>
                   <div class="shop-detail2">
                        <div class="shop-xinprice">￥49.00</div>
                        <div class="shop-jiajian">
                            <div class="shop-jian">-</div>
                            <div class="shop-shuliang">1</div>
                            <div class="shop-jia">+</div>
                        </div>
                   </div>
                   <div class="shop-zongdanprice">小计&nbsp;&nbsp;&nbsp;&nbsp;￥49.00</div>
               </div>
           </li>
        </ul>
        <div class="shop-foo">
            <div class="shop-quamxz">
               <input type="checkbox"/>全选
            </div>
            <div class="shop-shopping">
                <div class="shop-shopzongjia"><span class="shop-shopzongjiaspan">合计：</span><span class="shop-shopzongjiap">￥ 49.9元</span></div>
                <p class="shop-spzongshu">共1件商品</p>
            </div>    
            <div>
                <div class="shopjiesss">结算</div>
            </div>
        </div>
    </div>
</template>         
               
          
           
<script>
import axios from "axios";
import Qs from "qs";
export default {
    name:"Shoppingtrolley",
    data(){
        return{
            
            phonenum:sessionStorage.getItem("phonenum")
            
        }
    },
    methods: {
        
    },
    mounted(i){
         var _this = this;
        console.log(_this.phonenum)
       axios({
            method:"post",
             headers:{"Content-Type":"application/x-www-form-urlencoded"},
             url:"http://localhost:3000/shopping"
             //data:Qs.stringify({phonenum:_this.phonenum})
        }).then(function(data){
            // if(data.data ===1){
            //    _this.arr = data.data
            //     // _this.arr = data.data
            //     console.log(data.data) 
            // }
        })     
            
           
           
    }

}        
        
    
</script>
    

<style scoped="">
.shop{background-color: #f2e8e9;}
.shop-ul{width: 100%;background: #f2e8e9;padding:0.3rem 0;min-height:85.5vh}
.shop-li{padding: 0.6rem 0.3rem 0.4rem 0.5rem;height: 3.82rem;background: #ffffff;margin-top: 0.3rem;
display:flex;justify-content: space-between;}
.shop-checkboxdan{width: 1.1rem;height: 3.82rem;}
.shop-img{width: 2.72rem;height: 3.82rem;}
.shop-img img{width: 2.72rem;height: 2.20rem;}
.shop-detail{width: 6.19rem;}
.shop-detail1{height: 0.51rem;}
.shop-detail1 h2{overflow: hidden;color: #2f2f2d;font-size: 0.4rem;float: left;}
.shop-shanchu{float:right;}
.shop-jiuprice{height: 0.5rem;margin-top: 0.6rem;color: #b2b2b2;text-decoration: line-through;
font-size: 0.26rem;line-height: 0.5rem;}
.shop-detail2{display: flex;justify-content: space-between;}
.shop-xinprice{height: 0.66rem;font-size: 0.32rem;color: #ec0726;line-height: 0.66rem;}
.shop-jiajian{height: 0.66rem;float: right;}
.shop-jian{height: 0.64rem;border: 1px solid #cecece;float: left;font-size: 0.2rem;width: 1.16rem;
line-height: 0.64rem;text-align: center;color: #000000;}
.shop-shuliang{height: 0.64rem;border: 1px solid #cecece;float: left;font-size: 0.2rem;width: 1.16rem;
line-height: 0.64rem;text-align: center;color: #000000;}
.shop-jia{height: 0.64rem;border: 1px solid #cecece;float: left;font-size: 0.2rem;width: 1.16rem;
line-height: 0.64rem;text-align: center;color: #000000;}
.shop-zongdanprice{font-size: 0.34rem;color: #000000;margin-top: 1.13rem;float: right;}



.shop-foo{width: 100%;background: #ffffff;height: 1.5rem;display: flex;justify-content: space-between;
border: 1px solid #cecece;}
.shop-quamxz{font-size: 0.38rem;color:#000000;float: left;line-height: 1.5rem;}

.shop-shopping{width: 5rem;height: 1.5rem;}
.shop-shopzongjia{height: 0.75rem;font-size: 0.34rem;}
.shop-shopzongjiaspan{height: 1.2rem;float: left;}
.shop-shopzongjiap{display: block;width: 2.24rem;float: right;color: #ff0000;}
.shop-spzongshu{height: 0.75rem;font-size: 0.34rem;line-height: 0.75rem;float: right;}
.shopjiesss{width: 2.7rem;height: 1.5rem;background: #6ab45d;font-size: 0.44rem;
color: #ffffff;line-height: 1.5rem;text-align: center;}

</style>
