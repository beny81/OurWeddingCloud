<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="not-found px-4 py-5 text-center">
      <p class="not-found-code mb-2">404</p>
      <h1 class="not-found-title mb-3">Page not found</h1>
      <p class="not-found-body mb-4">
        This page doesn't exist. Head back home to find what you're looking for.
      </p>
      <router-link to="/" class="btn-home">Back to Home</router-link>
    </div>
  </MainLayout>
</template>

<style scoped>
.not-found {
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px !important;
}

.not-found-code {
  font-size: 5rem;
  font-weight: 200;
  color: #ffd6ba;
  line-height: 1;
}

.not-found-title {
  font-weight: 300;
  color: #3a2a2a;
  font-size: 1.8rem;
}

.not-found-body {
  color: #6b6b6b;
}

.btn-home {
  display: inline-block;
  padding: 0.6rem 1.8rem;
  background-color: #b63e3e;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
}

.btn-home:hover {
  background-color: #9a3333;
  color: white;
}
</style>
