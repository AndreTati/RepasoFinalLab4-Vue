import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nuestros-autos',
    name: 'Nuestros-Autos',
    component: () => import('../views/NuestrosAutos.vue')
  },
  {
    path: '/busqueda/:parametro',
    name: 'Nuestros-Autos',
    component: () => import('../views/NuestrosAutos.vue')
  },
  {
    path: '/detalle/:id',
    name:'Detalle-Auto',
    component: () => import('../views/DetalleAuto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
