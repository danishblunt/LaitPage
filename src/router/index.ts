import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'FORSIDE',
    component: Home
  },
  {
    path: '/',
    name: 'VÆRELSER',
    component: Home
  },
  {
    path: '/',
    name: 'OM HOTELS',
    component: Home
  },
  {
    path: '/',
    name: 'KONTAKT',
    component: Home
  },
  {
    path: '/',
    name: 'BOOK',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
