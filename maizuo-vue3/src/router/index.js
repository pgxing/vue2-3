import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Films from './../views/Films.vue'


const routes = [
  {
    path:'/films',
    component:Films
  },
  {
    path:'/',
    redirect:'films'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
