// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Apod from './views/APOD.vue'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/apod',
    name: 'Apod',
    component: Apod
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
