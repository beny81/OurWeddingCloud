<script>
// import AppNavigation from "../components/AppNavigation.vue";
// import SmallAppNavigation from "../components/SmallAppNavigation.vue";
// import SmallNavbar from "../components/SmallNavbar.vue";

// import AppLogo from "../components/AppLogo.vue";

export default {
  components: {
    // AppNavigation,
    // SmallAppNavigation,
    // AppLogo,
    // SmallNavbar,
  },
}
</script>

<template>
  <div class="container-fluid my-1">
    <div class="row pt-0">
      <header
        class="ms-1 d-none d-md-block col-md-1 col-lg-2 col-xl-3 sticky-top my-2"
        style="z-index: 2000"
      >
        <!-- <AppNavigation /> -->
      </header>
      <header
        class="ms-1 d-block d-md-none col-7 position-fixed top-0 start-0"
        style="z-index: 2000"
      >
        <!-- <SmallAppNavigation /> -->
      </header>
      <!-- <footer
        class="ms-1 d-block d-md-none  position-fixed end-0 start-0 "
        style="z-index: 2000;"
      >
        <SmallNavbar/>
      </footer> -->

      <main class="px-0 mt-2 mb-5 col">
        <slot />
      </main>
      <footer class="d-block d-md-none position-fixed bottom-0 start-0 w-100">
        <!-- <SmallNavbar /> -->
      </footer>

      <aside class="col-3 d-none d-lg-block text-center" style="max-height: 98vh; overflow-y: auto">
        <slot name="aside" />
      </aside>
    </div>
  </div>
</template>
