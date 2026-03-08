import { ref } from 'vue'
import { defineStore } from 'pinia'

export const weddingInfoStore = defineStore('info', () => {
  const brides = ref([
    { id: 1, firstName: 'Romeo', lastName: 'Montague', nickName: 'Ro' },
    { id: 2, firstName: 'Juliet', lastName: 'Capulet', nickName: 'Jul' },
  ])

  const WEDDING_DETAILS = {
    venueName: 'Sunset Garden',
    address: '123 Ocean Drive, Miami, FL',
    date: '2026-06-20',
    time: '16:00', // 4:00 PM
  }

  return { brides, WEDDING_DETAILS }
})
