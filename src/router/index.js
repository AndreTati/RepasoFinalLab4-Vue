import Vue from 'vue'
import VueRouter from 'vue-router'
import GrillaArticulos from '../views/GrillaArticulos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GrillaArticulos
  },
  {
    path: '/codigo/:parametro',
    name: 'Home',
    component: GrillaArticulos
  },
  {
    path: '/denominacion/:parametro',
    name: 'Home',
    component: GrillaArticulos
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detalle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
