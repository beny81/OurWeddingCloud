<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { weddingInfoStore } from '@/stores/weddingInfo.js'

const details = weddingInfoStore().WEDDING_DETAILS

const hotels = [
  {
    name: 'The Grand Miami Hotel',
    distance: '0.5 miles from venue',
    note: 'Use code WEDDING2026 for 15% off',
    stars: 5,
  },
  {
    name: 'Ocean View Inn',
    distance: '1.2 miles from venue',
    note: 'Complimentary breakfast included',
    stars: 4,
  },
  {
    name: 'Sunset Suites',
    distance: '2.0 miles from venue',
    note: 'Shuttle service to venue available',
    stars: 4,
  },
]
</script>

<template>
  <MainLayout>
    <div class="travel-page px-4 py-5">
      <header class="text-center mb-5">
        <p class="page-eyebrow mb-1">Getting here</p>
        <h1 class="page-title mb-2">Travel</h1>
        <p class="page-subtitle">Everything you need to plan your trip</p>
      </header>

      <!-- Venue -->
      <section class="mb-5">
        <h4 class="section-title mb-3">&#128205; Venue</h4>
        <div class="info-card p-4">
          <h5 class="venue-name mb-1">{{ details.venueName }}</h5>
          <p class="venue-address mb-3">{{ details.address }}</p>
          <p class="mb-2 text-muted" style="font-size: 0.9rem">
            Parking is available on-site at no cost. Valet service will be provided from 3:00 PM.
          </p>
        </div>
      </section>

      <!-- Nearby airports -->
      <section class="mb-5">
        <h4 class="section-title mb-3">&#9992;&#65039; Nearby Airports</h4>
        <div class="row g-3">
          <div class="col-12 col-sm-6">
            <div class="info-card p-4 h-100">
              <h6 class="fw-bold mb-1">Miami International Airport (MIA)</h6>
              <p class="text-muted mb-0" style="font-size: 0.9rem">~8 miles from venue &mdash; approx. 20 min by car</p>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="info-card p-4 h-100">
              <h6 class="fw-bold mb-1">Fort Lauderdale Airport (FLL)</h6>
              <p class="text-muted mb-0" style="font-size: 0.9rem">~30 miles from venue &mdash; approx. 40 min by car</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Hotels -->
      <section class="mb-5">
        <h4 class="section-title mb-3">&#127968; Recommended Hotels</h4>
        <div class="row g-3">
          <div v-for="hotel in hotels" :key="hotel.name" class="col-12 col-md-6 col-lg-4">
            <div class="hotel-card p-4 h-100">
              <div class="hotel-stars mb-1">
                <span v-for="n in hotel.stars" :key="n">&#11088;</span>
              </div>
              <h6 class="fw-bold mb-1">{{ hotel.name }}</h6>
              <p class="hotel-distance mb-2">{{ hotel.distance }}</p>
              <p class="hotel-note mb-0">{{ hotel.note }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Rideshare -->
      <section>
        <h4 class="section-title mb-3">&#128663; Getting Around</h4>
        <div class="info-card p-4">
          <p class="mb-2" style="font-size: 0.9rem; color: #5a5a5a;">
            We recommend using <strong>Uber</strong> or <strong>Lyft</strong> for the evening so
            everyone can enjoy the celebration worry-free. The venue address for your rideshare app:
          </p>
          <p class="fw-bold mb-0" style="color: #b63e3e;">{{ details.address }}</p>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped>
.travel-page {
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

.section-title {
  font-weight: 600;
  color: #3a2a2a;
  font-size: 1.1rem;
}

.info-card {
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 1px solid #ffd6ba;
  border-radius: 12px;
}

.venue-name {
  font-weight: 700;
  color: #3a2a2a;
}

.venue-address {
  color: #6b6b6b;
  font-size: 0.9rem;
}

.hotel-card {
  background: #fff;
  border: 1px solid #ffd6ba;
  border-radius: 12px;
}

.hotel-stars {
  font-size: 0.7rem;
}

.hotel-distance {
  font-size: 0.8rem;
  color: #b63e3e;
  font-weight: 500;
}

.hotel-note {
  font-size: 0.85rem;
  color: #6b6b6b;
  font-style: italic;
}
</style>
