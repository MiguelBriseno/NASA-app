// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Apod from './views/APOD.vue'
import Home from './views/Home.vue'
import Earth from './views/Earth.vue'

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
  },
  {
    path: '/earth',
    name: 'Earth',
    component: Earth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
