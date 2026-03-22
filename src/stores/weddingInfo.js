import { ref } from 'vue'
import { defineStore } from 'pinia'
import weddingConfig from '@/config/wedding.json'

export const weddingInfoStore = defineStore('info', () => {
  const brides = ref(weddingConfig.couple)

  const WEDDING_DETAILS = {
    venueName: weddingConfig.venue.name,
    address: weddingConfig.venue.address,
    date: weddingConfig.date,
    time: weddingConfig.time,
    dresscode: weddingConfig.dresscode,
  }

  return { brides, WEDDING_DETAILS }
})
