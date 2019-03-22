<template>
    <div class="personal">
        <div class="personal-hea">
            <h2 class="personal-title">我的
            <i class="iconfont icon-setting-preferences-gear-office-application-structure-define-process-fbaaebdf " @click="xiugaimima()"></i>
            </h2>
            <div class="personal-wode">
                <div class="personal-wodeshang">
                    <img src="../assets/img/personal-2.gif"/>
                    <h3>{{title}}</h3>
                    <div class="personal-wodeshangdiv">一级会员</div>
                </div>
                <div class="personal-wodexia">
                    <div class="personalfirstddiv"><p class="personalfirstp">剩余积分</p><p class="personalsecondp">0.00</p></div>
                    <div class="personalseconddiv">明细></div>
                    <div class="personalthireddiv">
                        <p class="personalthiredp">会员折扣</p><p class="personalfourthp">无</p>
                        <span class="personalfirstdspan">折</span></div>
                    <div class="personalfourteddiv">充值></div>
                </div>
            </div>
        </div>
        <div class="personal-section">
            <div class="personal-daohang">
                <div class="personal-daohangdiv">
                    <i class="iconfont  icon-dingdan"></i>
                    <p class="personal-daohangp">我的订单</p>
                    <div class="personal-daohangfirstdiv">全部订单></div>
                </div>
                <ul class="personal-firstul">
                    <li><i class="iconfont icon-gerenzhongxindingdandaifukuan"></i><p>待付款</p></li>
                    <li><i class="iconfont icon-daifahuo"></i><p>待发货</p></li>
                    <li><i class="iconfont icon-daifahuo1 "></i><p>待收获</p></li>
                    <li><i class="iconfont icon-daipingjia"></i><p>待评价</p></li>
                </ul>
            </div>
            <div class="personal-list">   
                <ul class="personal-secondul">
                    <li>
                        <i class="iconfont icon-wodeyouhuijuan"></i>
                        <p class="personal-secondulp">优惠卷</p>
                        <div class="personal-secondulseconddiv">  >  </div>
                    </li>
                     <li>
                        <i class="iconfont icon-dashaxiaoqudizhi01 "></i>
                        <p class="personal-secondulp">我的地址</p>
                        <div class="personal-secondulseconddiv">  >  </div>
                    </li>
                    <li>
                        <i class="iconfont icon-fapiao"></i>
                        <p class="personal-secondulp">我的发票</p>
                        <div class="personal-secondulseconddiv">  >  </div>
                    </li>
                     <li>
                        <i class="iconfont icon-shouji"></i>
                        <p class="personal-secondulp">手机绑定</p>
                        <div class="personal-secondulseconddiv">  >  </div>
                    </li>
                    <li @click="tuichu()">
                        <i class="iconfont icon-shouji"></i>
                        <p class="personal-secondulp">退出登陆</p>
                        <div class="personal-secondulseconddiv">  >  </div>
                    </li>
                    <li>
                        <i class="iconfont icon-shuye"></i>
                        <p class="personal-secondulp">关于源途</p>
                        <div class="personal-secondulfourthdiv">原产地 好水果</div>
                        <div class="personal-secondulseconddiv">  >  </div>
                    </li>
                    <li>
                        <i class="iconfont icon-icon-service"></i>
                        <p class="personal-secondulp">客服电话 null</p>
                        <div class="personal-secondulthireddiv">服务时间9：00-21：00</div>
                        <div class="personal-secondulseconddiv">  >  </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template> 
                            
                       
    




<script>
export default {
    name:"Personal",
    data(){
        return{
            title:sessionStorage.getItem("phonenum")
        }
    },
    methods: {
        xiugaimima(){
            this.$router.push("/Changepassword")
        },
        tuichu(){
            var _this = this;
            sessionStorage.removeItem("phonenum",_this.phonenum)
            this.$router.push("/Login")
        }
    },
}




//     db.fruit.insert({"name":"品润智利进口牛油果大果10个装 水果新鲜鳄梨应季单果110-140g", "price":110.00, "url" : "../static/fruit/fruit4", "class" : 4,id:10011}) 
</script>



<style scoped="">
.personal{background-color: #eaeaea;height: 100vh;}
.personal-hea{height: 4.08rem;width: 100%;background:#030102;position: relative;margin-bottom: 1.8rem;}
.personal-title{height: 1.5rem;font-size: 0.5rem;color:#ffffff;line-height: 1.5rem;text-align: center;}
.personal-title i{position: absolute;right: 0.63rem;top: 0.2rem}

.personal-wode{width: 9.25rem;height: 3.48rem;padding: 0 0.34rem 0.65rem 0.63rem;
margin-left: 0.3rem;background: #ffffff;}
.personal-wodeshang{height: 1.56rem;position: relative;}
.personal-wodeshang img{width: 1.71rem;height: 1.74rem;position: absolute;top: -0.47rem;left: 0;}
.personal-wodeshang h3{font-size: 0.36rem;text-align: center;line-height: 1.56rem;color: #b9b085;}
.personal-wodeshangdiv{width: 1.63rem;height: 0.57rem;background: #bca27d;color: #ffffff;
border-radius: 0.2rem;font-size: 0.34rem;line-height: 0.57rem;text-align: center;
position: absolute;right: 1.2rem;top: 0.5rem;}
.personal-wodexia{height: 1.92rem;display: flex;justify-content: space-between;}
.personalfirstddiv{height: 1.92em;}
.personalfirstp{font-size: 0.35rem;color: #323232;height: 0.99rem;line-height: 0.99rem;}
.personalsecondp{font-size: 0.43rem;color: #9c884b;height:0.92rem;line-height: 0.92rem;}
.personalseconddiv{color: #b6b09a;font-size: 0.33rem;height: 0.99rem;line-height: 0.99rem;}
.personalthireddiv{height: 1.92rem;}
.personalthiredp{font-size: 0.34rem;color: #353535;height: 0.99rem;line-height: 0.99rem;}
.personalfourthp{font-size: 0.54rem;color: #a27d49;float: left;height:0.92rem;line-height: 0.92rem;}
.personalfirstdspan{font-size: 0.35rem;color: #3b3b3b;float: right;height:0.92rem;line-height: 0.92rem;}
.personalfourteddiv{font-size: 0.34rem;color: #b5a583;height: 0.99rem;line-height: 0.99rem;}

.personal-section{width: 100%}
.personal-daohang{padding: 0 0.54rem 0 0.66rem;width: 9.62rem;height: 3.96rem;background: #ffffff;}
.personal-daohangdiv{height: 1.8rem;border-bottom: 1px solid #cecece;}
.icon-dingdan{color: #c3a57f;float: left;margin-top: 0.6rem;}
.personal-daohangp{font-size: 0.4rem;color: #3d3d3d;float: left;line-height: 1.8rem;margin-left: 0.52rem;}
.personal-daohangfirstdiv{font-size: 0.33rem;color: #bdbdbd;float: right;line-height: 1.8rem;}

.personal-firstul{width: 9.62rem;height: 2.1rem;}
.personal-firstul li{font-size: 0.36rem;width: 25%;float: left;text-align: center;margin-top: 0.44rem;}
.icon-gerenzhongxindingdandaifukuan,.icon-daifahuo,.icon-daifahuo1,.icon-daipingjia{width: 0.78rem;height: 0.78rem;}



.personal-list{width: 100%;margin-top: 0.3rem;}
.personal-secondul{padding: 0 0.54rem 0 0.66rem;width: 9.62rem;background: #ffffff;}
.personal-secondul li{height: 1.8rem;border-bottom: 1px solid #cecece;}
.icon-wodeyouhuijuan,.icon-dashaxiaoqudizhi01,.icon-fapiao,.icon-shouji,.icon-shuye,.icon-icon-service{float: left;color: #c4a77d;line-height: 1.8rem;width: 0.78rem;height: 0.78rem;}
.personal-secondulp{font-size: 0.4rem;color: #2e2e2e;float: left;margin-left: 0.5rem;line-height: 1.8rem;}
.personal-secondulseconddiv{font-size: 0.5rem;float: right;line-height: 1.8rem;}
.personal-secondulthireddiv{font-size: 0.33rem;color: #c2c2c2;float: left;margin-left: 2rem;line-height: 1.8rem;}
.personal-secondulfourthdiv{font-size: 0.33rem;color: #c2c2c2;float: left;margin-left: 4.2rem;line-height: 1.8rem;}
</style>

