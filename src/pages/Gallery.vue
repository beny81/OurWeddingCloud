<script setup>
import MainLayout from '@/layouts/MainLayout.vue'

// Placeholder slots — replace src with real image URLs as photos become available
const photos = Array.from({ length: 9 }, (_, i) => ({ id: i + 1, src: null, alt: `Photo ${i + 1}` }))
</script>

<template>
  <MainLayout>
    <div class="gallery-page px-4 py-5">
      <header class="text-center mb-5">
        <p class="page-eyebrow mb-1">Our</p>
        <h1 class="page-title mb-2">Gallery</h1>
        <p class="page-subtitle">Photos will be shared here after the wedding</p>
      </header>

      <!-- Coming soon banner -->
      <div class="coming-soon text-center p-5 mb-5 mx-auto">
        <div class="coming-soon-icon mb-3">&#128247;</div>
        <h4 class="mb-2">Photos Coming Soon</h4>
        <p class="mb-0 text-muted">
          Check back after June 20, 2026 — we'll post our favourite moments here.
        </p>
      </div>

      <!-- Placeholder grid -->
      <div class="row g-3">
        <div v-for="photo in photos" :key="photo.id" class="col-6 col-md-4">
          <div class="photo-placeholder d-flex align-items-center justify-content-center">
            <span class="placeholder-icon">&#128431;</span>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.gallery-page {
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
}

.page-eyebrow {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #b63e3e;
  font-weight: 500;
}

.page-title {
  font-size: 2.2rem;
  font-weight: 300;
  color: #3a2a2a;
}

.page-subtitle {
  color: #6b6b6b;
}

.coming-soon {
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 1px solid #ffd6ba;
  border-radius: 14px;
  max-width: 480px;
}

.coming-soon-icon {
  font-size: 3rem;
}

.photo-placeholder {
  aspect-ratio: 1;
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 1px dashed #ffd6ba;
  border-radius: 10px;
}

.placeholder-icon {
  font-size: 2rem;
  opacity: 0.4;
}
</style>
