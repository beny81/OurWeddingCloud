<script>
import NavItem from '@/components/NavItem.vue'
import CountdownTimer from './CountdownTimer.vue'

export default {
  components: {
    NavItem,
    CountdownTimer,
  },
}
</script>

<template>
  <nav class="navbar fixed-top d-lg-none">
    <div class="container-fluid">
      <!-- Toggler for mobile -->
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

      <!-- Brand -->
      <!-- <a class="navbar-brand ms-2" href="#">S & Q</a> -->
      <CountdownTimer />

      <!-- Offcanvas menu -->
      <div class="offcanvas offcanvas-start leftNavBar" tabindex="-1" id="offcanvasNavbar">
        <div class="offcanvas-header">
          <!-- <h5 class="offcanvas-title">S & Q wedding</h5> -->

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body p-0">
          <ul class="navbar-nav flex-column px-0">
            <nav-item />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  background-color: #ffe6d1; /* soft pastel background */
  color: #b63e3e; /* match your wedding accent */
}
.navbar-brand {
  font-weight: 500; /* less bold for lighter feel */
}
.nav-link {
  padding: 0.5rem 1rem;
}
.leftNavBar {
  width: 60%; /* narrower width */
  background: linear-gradient(145deg, #fff8f0, #ffece0);
  border: 1px solid #ffd6ba;
}
</style>
