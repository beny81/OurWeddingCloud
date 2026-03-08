import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const links = ref([
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Schedule', path: '/schedule' },
    { id: 3, name: 'Travel', path: '/travel' },
    { id: 4, name: 'Wedding Party', path: '/wedding-party' },
    { id: 5, name: 'Gallery', path: '/gallery' },
  ])

  return { links }
})
