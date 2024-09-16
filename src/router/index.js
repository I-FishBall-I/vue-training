import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/shop.vue')
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: () => import('../views/subscription.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
      path: '/productPage',
      name: 'productPage',
      component: () => import('../views/productPage.vue')
    },
    {
      path: '/subscriptionProduct',
      name: 'subscriptionProduct',
      component: () => import('../views/subscriptionProduct.vue')
    }
  ]
})

export default router
