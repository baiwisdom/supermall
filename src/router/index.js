import { createRouter, createWebHistory } from 'vue-router'

const Home = ()=>import('views/home/Home')
const Mine = ()=>import('views/mine/Mine')
const BuyCar = ()=>import('views/buy_car/BuyCar')
const Classify = ()=>import('views/classify/Classify')
const Detail = ()=>import('views/detail/Detail')

const meta = {
  keep_alive: true
}

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    meta
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/buycar',
    component: BuyCar
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
