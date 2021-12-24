import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Center from '@/views/Center'
// import Cinemas from '@/views/Cinemas'
import Films from '@/views/Films'
import Showing from '@/views/Film/Showing'
import Comingsoon from '@/views/Film/Comingsoon'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
import City from '@/views/City'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/center',
    component: Center,
    meta: {
      islogin: true
    }
  },
  {
    path: '/cinemas',
    component: () => import('@/views/Cinemas')
  },
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
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.islogin) {
    next('/login')
  } else {
    next()
  }
})

export default router
