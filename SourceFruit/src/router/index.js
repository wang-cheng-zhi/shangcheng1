import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Shoppingtrolley from '@/components/Shoppingtrolley'
import Personal from '@/components/Personal'
import Changepassword from '@/components/Changepassword'
import Detail from "@/components/Detail"
import Pingjia from "@/components/Pingjia"
import Xiangqing from "@/components/Xiangqing"
import Kepu from "@/components/Kepu"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
       redirect:"/home"
    },
    {
      path:"/home",
      redirect:"/index",
      component:Home,
      children:[
        {
          path:"/index",
          component:Index
        },
        {
          path:"/shoppingtrolley",
          component:Shoppingtrolley
        },
        {
          path:"/personal",
          component:Personal,
        }


    ]
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/regist",
      component:Regist
    },
    {
      path:"/detail",
      redirect:"/xiangqing",
      component:Detail,
      children:[
        {
          path:"/xiangqing",
          component:Xiangqing,
        },
        {
          path:"/pingjia",
          component:Pingjia,
        },
        {
          path:"/kepu",
          component:Kepu,
        },
      ]
    },
    {
      path:"/changepassword",
      component:Changepassword,
    }
  ]
})
