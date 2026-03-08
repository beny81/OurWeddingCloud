<script setup>
import { useNavigationStore } from '@/stores/navigation.js'
import { weddingInfoStore } from '@/stores/weddingInfo.js'
import { useRoute } from 'vue-router'

const navStore = useNavigationStore()
const infoStore = weddingInfoStore()
const route = useRoute()

const brides = infoStore.brides
const WEDDING_DETAILS = infoStore.WEDDING_DETAILS

const formattedDate = new Date(WEDDING_DETAILS.date).toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

// Compute which link is active
const isActive = (linkPath) => {
  return route.path === linkPath
}
</script>

<template>
  <nav aria-label="Wedding Navigation" class="wedding-nav h-100">
    <!-- Wedding Info Section -->
    <section class="wedding-info p-4 mb-4 rounded shadow-sm bg-light text-center">
      <p class="wedding-title mb-2">
        {{ brides[0]?.firstName }} & {{ brides[1]?.firstName }}'s Wedding
      </p>
      <p class="venue-name mb-1">{{ WEDDING_DETAILS.venueName }}</p>
      <p class="date-time mb-1">{{ formattedDate }} at {{ WEDDING_DETAILS.time }}</p>
      <p class="address mb-0">{{ WEDDING_DETAILS.address }}</p>
    </section>

    <!-- Navigation Links -->
    <ul class="nav flex-column">
      <li v-for="link in navStore.links" :key="link.id" class="nav-item mb-2">
        <router-link
          :to="link.path"
          class="nav-link d-flex align-items-center p-2 rounded hover-bg"
          :class="{ 'active-link': isActive(link.path) }"
        >
          <span class="ms-2">{{ link.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.wedding-info {
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 1px solid #ffd6ba;
}
.wedding-nav {
  background: linear-gradient(145deg, #fff8f0, #ffece0);
}

.wedding-title {
  font-size: 1rem;
  font-weight: 600;
  color: #b63e3e;
}

.venue-name,
.date-time,
.address {
  font-size: 1rem;
  color: #5a5a5a;
}

.nav-link {
  text-decoration: none;
  color: #333;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.nav-link:hover {
  background-color: #ffe6d1;
  color: #b63e3e;
}

.hover-bg {
  cursor: pointer;
}

/* .active-link {
  background-color: #b63e3e;
  color: white;
  font-weight: 600;
} */
.active-link {
  background-color: #ffe6d1; /* soft pastel background */
  color: #b63e3e; /* match your wedding accent */
  font-weight: 600;
  border-radius: 8px; /* subtle rounding for elegance */
}
</style>
