import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from '../views/App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: App
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
