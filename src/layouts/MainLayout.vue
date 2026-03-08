<script>
import SmallNavBar from '@/components/SmallNavBar.vue'
import LeftNavBar from '@/components/LeftNavBar.vue'
import CountdownTimer from '@/components/CountdownTimer.vue'

export default {
  components: {
    LeftNavBar,
    SmallNavBar,
    CountdownTimer,
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="row pt-0">
      <header class="ms-0 d-none d-md-block sidebar sticky-top top-0 start-0 h-100 px-0">
        <LeftNavBar />
      </header>
      <header class="d-block d-md-none">
        <small-nav-bar />
      </header>

      <!-- <footer
        class="ms-1 d-block d-md-none  position-fixed end-0 start-0 "
        style="z-index: 2000;"
      >
        <SmallNavbar/>
      </footer> -->

      <main class="col d-none d-md-block px-0 main-content">
        <nav class="navbar position-sticky top-0 w-100 mb-2 px-0">
          <div class="container-fluid justify-content-end">
            <CountdownTimer />
          </div>
        </nav>

        <slot />
      </main>

      <main class="d-block d-md-none">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
nav {
  background-color: #ffe6d1; /* soft pastel background */
  color: #b63e3e; /* match your wedding accent */
}
.sidebar {
  width: 22%;
  position: fixed;
}
.main-content {
  margin-left: 22%;
}
</style>
