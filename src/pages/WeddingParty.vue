<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { weddingInfoStore } from '@/stores/weddingInfo.js'

const brides = weddingInfoStore().brides

const party = [
  {
    name: 'Benvolio Montague',
    role: 'Best Man',
    side: brides[0]?.firstName,
    initials: 'BM',
    bio: 'Cousin and lifelong companion. Always ready with a joke to lighten the mood.',
  },
  {
    name: 'Mercutio',
    role: 'Groomsman',
    side: brides[0]?.firstName,
    initials: 'ME',
    bio: 'The life of every party. Known for his unforgettable speeches.',
  },
  {
    name: 'Paris',
    role: 'Groomsman',
    side: brides[0]?.firstName,
    initials: 'PA',
    bio: 'A loyal friend who has been there through it all.',
  },
  {
    name: 'Rosaline Capulet',
    role: 'Maid of Honor',
    side: brides[1]?.firstName,
    initials: 'RC',
    bio: 'Best friend and confidante. The one who always knows the right thing to say.',
  },
  {
    name: 'The Nurse',
    role: 'Bridesmaid',
    side: brides[1]?.firstName,
    initials: 'TN',
    bio: 'A trusted friend who has been by her side since childhood.',
  },
  {
    name: 'Tybalt Capulet',
    role: 'Bridesmaid',
    side: brides[1]?.firstName,
    initials: 'TC',
    bio: 'Family first. A fierce protector with a warm heart underneath.',
  },
]
</script>

<template>
  <MainLayout>
    <div class="party-page px-4 py-5">
      <header class="text-center mb-5">
        <p class="page-eyebrow mb-1">Meet the</p>
        <h1 class="page-title mb-2">Wedding Party</h1>
        <p class="page-subtitle">The incredible people standing by our side</p>
      </header>

      <!-- Group by side -->
      <div v-for="bride in brides" :key="bride.id" class="mb-5">
        <h4 class="side-title text-center mb-4">{{ bride.firstName }}'s Side</h4>
        <div class="row g-4 justify-content-center">
          <div
            v-for="member in party.filter((m) => m.side === bride.firstName)"
            :key="member.name"
            class="col-12 col-sm-6 col-lg-4"
          >
            <div class="member-card text-center p-4 h-100">
              <div class="member-avatar mx-auto mb-3">{{ member.initials }}</div>
              <h6 class="member-name mb-1">{{ member.name }}</h6>
              <span class="member-role">{{ member.role }}</span>
              <p class="member-bio mt-3 mb-0">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.party-page {
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

.side-title {
  font-weight: 300;
  font-size: 1.4rem;
  color: #3a2a2a;
  border-bottom: 1px solid #ffd6ba;
  padding-bottom: 0.5rem;
}

.member-card {
  background: #fff;
  border: 1px solid #ffd6ba;
  border-radius: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.member-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(182, 62, 62, 0.1);
}

.member-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #b63e3e, #e07070);
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-name {
  font-weight: 700;
  color: #3a2a2a;
}

.member-role {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #b63e3e;
  font-weight: 600;
}

.member-bio {
  font-size: 0.88rem;
  color: #6b6b6b;
  line-height: 1.6;
}
</style>
