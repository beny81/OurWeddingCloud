<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { weddingInfoStore } from '@/stores/weddingInfo.js'

const infoStore = weddingInfoStore()
const brides = infoStore.brides
const details = infoStore.WEDDING_DETAILS

const formattedDate = new Date(details.date).toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
</script>

<template>
  <MainLayout>
    <div class="home-page px-4 py-5">
      <!-- Hero -->
      <section class="hero text-center mb-5">
        <p class="hero-eyebrow mb-2">We're getting married</p>
        <h1 class="hero-names mb-3">
          {{ brides[0]?.firstName }} <span class="ampersand">&amp;</span>
          {{ brides[1]?.firstName }}
        </h1>
        <p class="hero-date">{{ formattedDate }}</p>
      </section>

      <!-- Key info cards -->
      <section class="row g-3 mb-5 justify-content-center">
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="info-card text-center p-4">
            <div class="info-icon mb-2">&#128197;</div>
            <h6 class="info-title">Date &amp; Time</h6>
            <p class="info-body mb-0">{{ formattedDate }}</p>
            <p class="info-body mb-0">{{ details.time }} (4:00 PM)</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="info-card text-center p-4">
            <div class="info-icon mb-2">&#128205;</div>
            <h6 class="info-title">Venue</h6>
            <p class="info-body mb-0">{{ details.venueName }}</p>
            <p class="info-body mb-0">{{ details.address }}</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="info-card text-center p-4">
            <div class="info-icon mb-2">&#128084;</div>
            <h6 class="info-title">Dress Code</h6>
            <p class="info-body mb-0">{{ details.dresscode }}</p>
          </div>
        </div>
      </section>

      <!-- Welcome message -->
      <section class="welcome-card p-4 p-md-5 text-center mx-auto">
        <h2 class="welcome-title mb-3">Welcome, dear guests</h2>
        <p class="welcome-text">
          We are beyond excited to celebrate this milestone with the people we love most. Your
          presence means everything to us, and we can't wait to share this day with you.
        </p>
        <p class="welcome-text mb-0">
          Use the navigation to explore the schedule, travel info, meet our wedding party, and more.
          We look forward to seeing you there!
        </p>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped>
.home-page {
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
}

/* Hero */
.hero-eyebrow {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #b63e3e;
  font-weight: 500;
}

.hero-names {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #3a2a2a;
  letter-spacing: 1px;
}

.ampersand {
  color: #b63e3e;
  font-style: italic;
}

.hero-date {
  font-size: 1.1rem;
  color: #6b6b6b;
}

/* Info cards */
.info-card {
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 1px solid #ffd6ba;
  border-radius: 12px;
  height: 100%;
}

.info-icon {
  font-size: 1.8rem;
}

.info-title {
  font-weight: 700;
  color: #b63e3e;
  margin-bottom: 0.5rem;
}

.info-body {
  font-size: 0.9rem;
  color: #5a5a5a;
}

/* Welcome */
.welcome-card {
  background: #fff;
  border: 1px solid #ffd6ba;
  border-radius: 12px;
  max-width: 640px;
}

.welcome-title {
  font-weight: 300;
  color: #3a2a2a;
  font-size: 1.6rem;
}

.welcome-text {
  color: #5a5a5a;
  line-height: 1.8;
}
</style>
