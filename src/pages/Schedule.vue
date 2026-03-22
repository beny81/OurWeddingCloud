<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { weddingInfoStore } from '@/stores/weddingInfo.js'

const details = weddingInfoStore().WEDDING_DETAILS

const formattedDate = new Date(details.date).toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

const events = [
  {
    time: '3:30 PM',
    title: 'Guest Arrival & Seating',
    description: 'Please arrive and be seated before the ceremony begins. Ushers will guide you.',
    icon: '🚪',
  },
  {
    time: '4:00 PM',
    title: 'Wedding Ceremony',
    description: 'The ceremony will take place in the main garden. Please silence your phones.',
    icon: '💍',
  },
  {
    time: '5:00 PM',
    title: 'Cocktail Hour',
    description: 'Join us for drinks and hors d\'oeuvres on the terrace while we take photos.',
    icon: '🥂',
  },
  {
    time: '6:30 PM',
    title: 'Reception & Dinner',
    description: 'Dinner will be served in the grand ballroom. Seating is assigned — check your invitation.',
    icon: '🍽️',
  },
  {
    time: '8:00 PM',
    title: 'First Dance & Cake Cutting',
    description: 'Join us as we share our first dance together, followed by the cake cutting.',
    icon: '🎂',
  },
  {
    time: '9:00 PM',
    title: 'Evening Dancing',
    description: 'Dance the night away with us! The bar is open until midnight.',
    icon: '🎶',
  },
]
</script>

<template>
  <MainLayout>
    <div class="schedule-page px-4 py-5">
      <header class="text-center mb-5">
        <p class="page-eyebrow mb-1">Day of</p>
        <h1 class="page-title mb-2">Schedule</h1>
        <p class="page-subtitle">{{ formattedDate }} &mdash; {{ details.venueName }}</p>
      </header>

      <div class="timeline mx-auto">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="timeline-item d-flex gap-3 mb-4"
        >
          <!-- Connector -->
          <div class="timeline-connector d-flex flex-column align-items-center">
            <div class="timeline-dot">{{ event.icon }}</div>
            <div v-if="index < events.length - 1" class="timeline-line"></div>
          </div>

          <!-- Content -->
          <div class="timeline-content pb-4">
            <span class="event-time">{{ event.time }}</span>
            <h5 class="event-title mb-1">{{ event.title }}</h5>
            <p class="event-desc mb-0">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.schedule-page {
  max-width: 700px;
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

.timeline {
  max-width: 580px;
}

.timeline-connector {
  min-width: 48px;
}

.timeline-dot {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 2px solid #ffd6ba;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.timeline-line {
  width: 2px;
  flex: 1;
  background-color: #ffd6ba;
  min-height: 24px;
}

.event-time {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #b63e3e;
}

.event-title {
  font-weight: 600;
  color: #3a2a2a;
  margin-top: 2px;
}

.event-desc {
  font-size: 0.9rem;
  color: #6b6b6b;
  line-height: 1.6;
}
</style>
