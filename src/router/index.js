import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import('../pages/Home.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../pages/Home.vue'),
      // meta: { requiresAuth: true },
    },
  ],
})

export default router
