import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login.vue'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: Login
    },
    {
        path: "/msite",
      component: Msite
    },
    {
      path: "/order",
      component: Order
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/seach",
      component: Search
    }

  ]
})
