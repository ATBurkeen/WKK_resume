import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
import Resume from './views/Resume.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
