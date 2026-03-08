<script setup>
import NavItem from '@/components/NavItem.vue'
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
          {{ brides[0]?.firstName }} & {{ brides[1]?.firstName }}'s Wedding
        </h6>
        <div class="text-gray">
          <CountdownTimer />
        </div>
      </div>

      <!-- Spacer for balance -->
      <div class="nav-spacer"></div>

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
          <ul class="navbar-nav flex-column px-0">
            <NavItem />
          </ul>
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

.navbar-brand {
  font-weight: 500;
}

.nav-link {
  padding: 0.5rem 1rem;
}

.leftNavBar {
  width: 60%;
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 1px solid #ffd6ba;
}

.text-gray {
  color: gray;
  font-size: 0.8rem;
}
</style>
