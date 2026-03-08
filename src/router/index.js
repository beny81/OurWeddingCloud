import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue'),
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: () => import('../pages/Schedule.vue'),
    },
    {
      path: '/travel',
      name: 'Travel',
      component: () => import('../pages/Travel.vue'),
    },
    {
      path: '/wedding-party',
      name: 'Wedding Party',
      component: () => import('../pages/WeddingParty.vue'),
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import('../pages/Gallery.vue'),
    },
  ],
})

export default router
