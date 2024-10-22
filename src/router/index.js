import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pageComponents/home.vue'
import shop from '@/pageComponents/shop.vue'
import subscription from '@/pageComponents/subscription.vue'
import About from '@/pageComponents/about.vue'
import Contact from '@/pageComponents/contact.vue'
import pay from '@/uiComponents/pay.vue'
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
        component: pay
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
