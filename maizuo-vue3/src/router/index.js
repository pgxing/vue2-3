import { createRouter, createWebHistory } from 'vue-router'
import Center from '@/views/Center'
import Films from '@/views/Films'
import Showing from '@/views/Film/Showing'
import Comingsoon from '@/views/Film/Comingsoon'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
import City from '@/views/City'
import Search from '@/views/Search'


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
    path: '/search',
    component: Search
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

router.beforeEach((to, from, next) => {
  if (to.meta.islogin) {
    next('/login')
  } else {
    next()
  }
})
export default router
