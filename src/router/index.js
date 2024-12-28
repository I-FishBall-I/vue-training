import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pageComponents/home.vue'
import shop from '@/pageComponents/shop.vue'
import subscription from '@/pageComponents/subscription.vue'
import About from '@/pageComponents/about.vue'
import Contact from '@/pageComponents/contact.vue'
import pay from '@/uiComponents/pay.vue'
import login from '@/pageComponents/login.vue'

import Swal from 'sweetalert2'
import { useCartState } from '@/uiComponents/state'

export const createMyRouter = function () {
  const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/shop',
        name: 'shop',
        component: shop,
        children: [
          {
            path: 'productPage/:id',
            name: 'productPage',
            component: () => import(`../productPage/productPage.vue`)
          }
        ]
      },
      {
        path: '/subscription',
        name: 'subscription',
        component: subscription,
        children: [
          {
            path: 'subscriptionProduct/:id',
            name: 'subscriptionProduct',
            component: () => import(`../productPage/subscriptionProduct.vue`)
          }
        ]
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      {
        path: '/pay',
        name: 'pay',
        component: pay,
        beforeEnter: (to, from, next) => {
          if(sessionStorage.getItem('name') == 'admin'){
            next()
          }else{
            const store = useCartState()
            store.showCart=false
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: '請先登入',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              next({name:'login'})
            })
          }
        }
      },
      {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        name: '404',
        path: '/:catchAll(.*)',
        component: () => import(`../pageComponents/errorPage.vue`)
      }
    ]
  })
  return router
}
