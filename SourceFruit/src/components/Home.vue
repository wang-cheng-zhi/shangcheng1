<template>
  <div class="homehtml" id="box">
      
      <section>
          <router-view></router-view>
      </section>
      <footer>
          <router-link tag="span" to="/index"><i class="iconfont icon-shouye"></i><br/><p>首页</p></router-link>
          <router-link tag="span" to="/shoppingtrolley"><i class="iconfont icon-gouwuche"></i><br/><p>购物车</p></router-link>
          <router-link tag="span" to="/personal"><i class="iconfont icon-geren"></i><br/><p>个人</p></router-link>
      </footer>
  </div> 
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped="">
.router-link-active{color:#6ab460;}
.homehtml{display: flex;flex-direction: column;}

section{flex: 1;overflow: auto;}
footer{height: 1.9rem;}
footer span{float: left;width: 33.3%;text-align: center;}
footer p{font-size: 0.33rem;}
.icon-shouye,.icon-gouwuche,.icon-geren{font-size: 0.67rem;}
</style>