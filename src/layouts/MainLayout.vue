<script setup>
import SmallNavBar from '@/components/SmallNavBar.vue'
import LeftNavBar from '@/components/LeftNavBar.vue'
import CountdownTimer from '@/components/CountdownTimer.vue'
import { weddingInfoStore } from '@/stores/weddingInfo.js'

const details = weddingInfoStore().WEDDING_DETAILS
const formattedShort = new Date(details.date).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
})
</script>

<template>
  <div class="app-layout">
    <!-- Desktop sidebar -->
    <aside class="d-none d-md-flex sidebar">
      <LeftNavBar />
    </aside>

    <!-- Mobile top navbar -->
    <SmallNavBar />

    <!-- Main content -->
    <main class="main-content">
      <!-- Desktop top bar -->
      <nav class="d-none d-md-flex top-bar position-sticky top-0 px-4">
        <div class="w-100 d-flex align-items-center justify-content-end gap-3">
          <span class="top-bar-label">{{ formattedShort }} &middot; {{ details.time }}</span>
          <CountdownTimer />
        </div>
      </nav>

      <!-- Centered page content -->
      <div class="slot-wrapper">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 22%;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.main-content {
  flex: 1;
  min-width: 0;
}

.top-bar {
  background-color: #fff5ee;
  border-bottom: 1px solid #ffd6ba;
  min-height: 52px;
}

.top-bar-label {
  font-size: 0.78rem;
  color: #b63e3e;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: 0.75;
}

.slot-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

@media (max-width: 767px) {
  .main-content {
    padding-top: 72px;
  }
}
</style>
