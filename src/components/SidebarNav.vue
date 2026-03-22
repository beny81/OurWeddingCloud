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
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

const navIcons = {
  '/': '🏠',
  '/schedule': '📅',
  '/travel': '✈️',
  '/wedding-party': '💐',
  '/gallery': '🖼️',
}

const isActive = (linkPath) => route.path === linkPath
</script>

<template>
  <nav aria-label="Wedding Navigation" class="sidebar-nav h-100 d-flex flex-column">
    <!-- Identity -->
    <div class="identity text-center py-5 px-4">
      <div class="heart mb-3">♥</div>
      <h2 class="bride-name mb-0">{{ brides[0]?.firstName }}</h2>
      <div class="amp">&amp;</div>
      <h2 class="bride-name mb-4">{{ brides[1]?.firstName }}</h2>
      <p class="venue mb-1">{{ WEDDING_DETAILS.venueName }}</p>
      <p class="meta mb-1">{{ formattedDate }} &middot; {{ WEDDING_DETAILS.time }}</p>
      <p class="meta mb-0 small-address">{{ WEDDING_DETAILS.address }}</p>
    </div>

    <!-- Fading divider -->
    <div class="fade-divider mx-4 mb-3"></div>

    <!-- Nav links -->
    <ul class="nav flex-column px-3">
      <li v-for="link in navStore.links" :key="link.id" class="nav-item mb-1">
        <router-link
          :to="link.path"
          class="nav-link d-flex align-items-center gap-3 px-3 py-2 rounded"
          :class="{ 'active-link': isActive(link.path) }"
        >
          <span class="link-icon">{{ navIcons[link.path] }}</span>
          <span>{{ link.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar-nav {
  background-color: #fff5ee;
  border-right: 1px solid #ffd6ba;
}

/* Identity block */
.heart {
  color: #b63e3e;
  font-size: 1.2rem;
  opacity: 0.65;
}

.bride-name {
  font-size: 1.7rem;
  font-weight: 300;
  color: #2e1a1a;
  letter-spacing: 1px;
  line-height: 1.15;
}

.amp {
  font-size: 1.1rem;
  color: #b63e3e;
  font-style: italic;
  font-weight: 300;
  line-height: 1.8;
}

.venue {
  font-size: 0.78rem;
  font-weight: 700;
  color: #5a5a5a;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}

.meta {
  font-size: 0.78rem;
  color: #999;
}

.small-address {
  font-size: 0.73rem;
  color: #bbb;
}

/* Divider */
.fade-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #ffd6ba 40%, #ffd6ba 60%, transparent);
}

/* Nav links */
.nav-link {
  text-decoration: none;
  color: #7a7a7a;
  font-size: 0.9rem;
  transition: color 0.18s ease, background-color 0.18s ease;
}

.nav-link:hover {
  color: #b63e3e;
  background-color: rgba(182, 62, 62, 0.05);
}

.link-icon {
  font-size: 1rem;
  width: 22px;
  text-align: center;
  flex-shrink: 0;
}

.active-link {
  color: #b63e3e;
  font-weight: 700;
  background-color: rgba(182, 62, 62, 0.06);
}
</style>
