import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JadwalView from '../views/JadwalView.vue'
import TodoView from '@/views/TodoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jadwal',
      name: 'jadwal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: JadwalView,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: TodoView
    }
  ]
})

export default router
