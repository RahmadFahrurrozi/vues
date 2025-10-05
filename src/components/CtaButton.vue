<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-blue-500 text-white hover:bg-blue-600'
    case 'secondary':
      return 'bg-blue-100 text-blue-600 hover:shadow-md'
    default:
      return 'bg-blue-500 text-white hover:bg-blue-600'
  }
})
</script>

<template>
  <button
    class="px-8 py-3 bg-blue-100 text-blue-700 font-semibold rounded-full cursor-pointer hover:shadow-md transition duration-300 ease-in-out"
    :class="variantClass"
  >
    <slot></slot>
  </button>
</template>
