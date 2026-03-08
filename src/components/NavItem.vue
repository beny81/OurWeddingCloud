<script setup>
import { onMounted } from 'vue'
import { Tooltip } from 'bootstrap'

// Define props
defineProps({
  to: {
    type: String,
    required: false,
  },
  item: {
    type: String,
    required: false,
  },
})

// Define emits
defineEmits(['click'])

// Tooltip Initialization
onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach((el) => {
    const tooltip = new Tooltip(el, {
      trigger: 'hover ', // Tooltip shows on hover
    })

    el.addEventListener('click', () => {
      tooltip.hide() // Manually hide the tooltip before navigation
    })
  })
})
</script>

<template>
  <li
    @click="$emit('click', $event)"
    class="h5 hoverLink rounded-pill px-1 me-auto py-2 d-none d-md-block d-xl-none"
    :class="{ 'bg-danger': item === 'Logout' }"
    data-bs-toggle="tooltip"
    data-bs-placement="right"
    data-bs-custom-class="custom-tooltip"
    :data-bs-title="item"
  >
    <router-link class="my-link link-light flex" :to="to">
      <svg width="30" height="30">
        <slot />
      </svg>
      <span class="light p-2 d-md-none d-xl-inline">{{ item }}</span>
    </router-link>
  </li>

  <li
    @click="$emit('click', $event)"
    class="h5 hoverLink rounded-pill px-1 me-auto py-2 d-block d-md-none d-xl-block"
    :class="{ 'bg-danger': item === 'Logout' }"
  >
    <router-link class="my-link link-light flex" :to="to">
      <svg width="30" height="30">
        <slot />
      </svg>
      <span class="light p-2 d-md-none d-xl-inline">{{ item }}</span>
    </router-link>
  </li>
</template>
