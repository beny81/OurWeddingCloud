<script>
// import { mapState } from 'vuex';
import MainLayout from '../layouts/MainLayout.vue'

export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    MainLayout,
  },
}
</script>

<template>
  <MainLayout>
    <div>
      <p class="text-center">Thank you for being part of our community!</p>
    </div>

    <template #aside> </template>
  </MainLayout>
</template>
