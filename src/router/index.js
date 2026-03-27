import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue'),
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
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/NotFound.vue'),
    },
  ],
})

// After every navigation, reset all scroll locks Bootstrap's ScrollBarHelper may have left behind.
// It sets overflow + paddingRight on body, and paddingRight on .fixed-top/.fixed-bottom elements.
router.afterEach(() => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  document.querySelectorAll('.fixed-top, .fixed-bottom, .sticky-top').forEach((el) => {
    el.style.paddingRight = ''
    el.style.marginRight = ''
  })
})

export default router
