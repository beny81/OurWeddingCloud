<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { weddingInfoStore } from '@/stores/weddingInfo'

const store = weddingInfoStore()
const weddingDateTime = new Date(`${store.WEDDING_DETAILS.date}T${store.WEDDING_DETAILS.time}:00`)

const diff = ref(weddingDateTime - new Date())
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    diff.value = weddingDateTime - new Date()
    if (diff.value <= 0) clearInterval(timer)
  }, 1000)
})

onUnmounted(() => clearInterval(timer))

const units = computed(() => {
  const d = Math.max(0, diff.value)
  return [
    { value: Math.floor(d / 86400000), label: 'days' },
    { value: Math.floor((d / 3600000) % 24), label: 'hrs' },
    { value: Math.floor((d / 60000) % 60), label: 'min' },
    { value: Math.floor((d / 1000) % 60), label: 'sec' },
  ]
})
</script>

<template>
  <div v-if="diff > 0" class="countdown d-flex gap-2 align-items-center">
    <div v-for="unit in units" :key="unit.label" class="countdown-unit text-center">
      <div class="countdown-value">{{ String(unit.value).padStart(2, '0') }}</div>
      <div class="countdown-label">{{ unit.label }}</div>
    </div>
  </div>
  <span v-else class="fw-bold">&#127881; Wedding time!</span>
</template>

<style scoped>
.countdown-unit {
  background-color: #b63e3e;
  color: white;
  border-radius: 6px;
  padding: 2px 6px;
  min-width: 36px;
}

.countdown-value {
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.2;
}

.countdown-label {
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.85;
}
</style>
