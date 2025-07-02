import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Administradores from '../views/Administradores.vue'
import ReservaConfirmada from '@/views/ReservaConfirmada.vue';
import loginView from '../views/loginView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('../views/loginView.vue'),
    },
     {
      path: '/empleado',
      name: 'empleado',
      component: ()=>import('../views/EmpleadoViews.vue'),
    },
    {
      path: '/crear-empleado',
      name: 'CrearEmpleado',
      component: ()=>import('../views/CrearEmpleado.vue'),
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: () => import('../views/Administradores.vue'),
    },
    {
      path: '/reserva-confirmada',
      name: 'ReservaConfirmada',
      component: () => import('../views/ReservaConfirmada.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
