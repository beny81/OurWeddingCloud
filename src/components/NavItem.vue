<script setup>
import { useNavigationStore } from '@/stores/navigation.js'
const store = useNavigationStore()
</script>

<template>
  <li v-for="link in store.links" :key="link.id">
    <router-link :to="link.path" class="nav-link d-flex align-items-center">
      <span class="ms-2">{{ link.name }}</span>
    </router-link>
  </li>
</template>
