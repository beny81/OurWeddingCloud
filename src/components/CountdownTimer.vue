<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { weddingInfoStore } from '@/stores/weddingInfo'

const store = weddingInfoStore()

const countdown = ref('')
let timer = null

// Determine which date/time to use
const weddingDateTime = ref(
  new Date(`${store.WEDDING_DETAILS.date}T${store.WEDDING_DETAILS.time}:00`),
)

const updateCountdown = () => {
  const now = new Date()
  const diff = weddingDateTime.value - now
  if (diff <= 0) {
    countdown.value = 'Wedding time!'
    clearInterval(timer)
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <p class="fw-bold">Time left :{{ countdown }}</p>
</template>
