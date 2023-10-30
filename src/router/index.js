import { createRouter, createWebHashHistory } from 'vue-router'
import AppMain from '@/components/appMain/AppMain.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppMain
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
