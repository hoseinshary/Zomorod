import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/ShowPrice',
    name: 'ShowPrice',
    component: () => import('../views/ShowPrice.vue')
  },
  {
    path: '/MainChart',
    name: 'MainChart',
    component: () => import('../views/MainChart.vue')
  },
  {
    path: '/ShowPrice2',
    name: 'ShowPrice2',
    component: () => import('../views/ShowPrice2.vue')
  },
  {
    path: '/ShowPrice3',
    name: 'ShowPrice3',
    component: () => import('../views/ShowPrice3.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
