<script>
// import { mapState } from 'vuex';
import ThreeColumn from '../layouts/ThreeColumn.vue'

export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    ThreeColumn,
  },
}
</script>

<template>
  <ThreeColumn>
    <div>
      <p class="text-center">Nothing yet</p>
      <p class="text-center">Try to refresh</p>
    </div>

    <template #aside> </template>
  </ThreeColumn>
</template>
