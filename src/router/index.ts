import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/pages/HomePage.vue'
import About from '@/views/pages/About.vue'
import Skills from '@/views/pages/Skills.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage ,
    },
    {
      path:'/about',
      name:'about',
      component: About
    },
    {
      path:'/skills',
      name:'skills',
      component: Skills
    }
  ],
})

export default router