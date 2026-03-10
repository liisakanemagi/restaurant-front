import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ReservationView from '@/views/ReservationView.vue'
import ErrorView from '@/views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      route: 'homeRoute',
      component: HomeView,
    },

    {
      path: '/reservation',
      route: 'reservationRoute',
      component: ReservationView,
    },

    {
      path: '/error',
      route: 'errorRoute',
      component: ErrorView

    }
  ],
})

export default router
