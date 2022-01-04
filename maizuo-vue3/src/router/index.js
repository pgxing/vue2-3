import { createRouter, createWebHistory } from 'vue-router'
import Films from './../views/Films.vue'
import Showing from '@/views/Film/Showing'
import Comingsoon from '@/views/Film/Comingsoon'


const routes = [
  {
    path: '/films',
    component: Films,
    children: [
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '/films/showing',
        component: Showing
      },
      {
        path: '/films',
        redirect: '/films/showing'
      }
    ]
  },
  {
    path: '/',
    redirect: '/films'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
