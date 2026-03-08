import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
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

    // Catch-all route for unknown URLs
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
