import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      route: 'homeRoute',
      component: 'HomeView',
    },

    {
      path: '/reservation',
      route: 'reservationRoute',
      component: 'ReservationView'
    },
  ],
})

export default router
