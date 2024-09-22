import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pageComponents/home.vue'
import Shop from '../pageComponents/shop.vue'
import subscription from '../pageComponents/subscription.vue'
import About from '../pageComponents/about.vue'
import Contact from '../pageComponents/contact.vue'
import productPage from '../productPage/productPage.vue'
import subscriptionProduct from '../productPage/subscriptionProduct.vue'

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
      component: Shop
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: subscription
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
      path: '/productPage',
      name: 'productPage',
      component: productPage,
      props: route => ({ id: route.query.id })
    },
    {
      path: '/subscriptionProduct:id',
      name: 'subscriptionProduct',
      component: subscriptionProduct
    },
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: () => import(`../pageComponents/errorPage.vue`)
    }
  ]
})

export default router
