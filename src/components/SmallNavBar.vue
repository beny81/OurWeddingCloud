<script setup>
import SidebarNav from '@/components/SidebarNav.vue'
import CountdownTimer from './CountdownTimer.vue'
import { weddingInfoStore } from '@/stores/weddingInfo.js'

const infoStore = weddingInfoStore()
const brides = infoStore.brides
</script>

<template>
  <nav class="navbar fixed-top d-lg-none">
    <div class="container-fluid nav-wrapper">
      <!-- Mobile menu button -->
      <button
        class="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Couple + countdown -->
      <div class="couple-info text-center">
        <h6 class="fw-bold m-0">
          {{ brides[0]?.firstName }} &amp; {{ brides[1]?.firstName }}'s Wedding
        </h6>
        <div class="text-gray d-flex justify-content-center">
          <CountdownTimer />
        </div>
      </div>

      <!-- Monogram badge -->
      <div class="monogram" aria-hidden="true">
        {{ brides[0]?.firstName?.charAt(0) }}&amp;{{ brides[1]?.firstName?.charAt(0) }}
      </div>

      <!-- Offcanvas menu -->
      <div class="offcanvas offcanvas-start leftNavBar" tabindex="-1" id="offcanvasNavbar">
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body p-0">
          <SidebarNav />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #ffe6d1;
  color: #b63e3e;
}

.leftNavBar {
  width: 70%;
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 1px solid #ffd6ba;
}

.text-gray {
  color: gray;
  font-size: 0.75rem;
}

.monogram {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #b63e3e;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}
</style>
