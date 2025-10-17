<script setup>
import CtaButton from './CtaButton.vue'
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    required: false,
    default: '',
  },
  imagePosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
  ctaButtonText: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="bg-gray-50 py-12">
    <div class="flex flex-col md:flex-row justify-center items-center gap-10">
      <div :class="[imagePosition === 'left' ? 'order-1' : 'order-2']">
        <img :src="image" alt="Feature Image" class="w-full max-w-md object-contain" />
      </div>

      <div :class="['md:w-1/4', imagePosition === 'left' ? 'order-2' : 'order-1']">
        <h3 class="text-3xl font-semibold mb-4">{{ title }}</h3>
        <p class="text-gray-600 font-medium mb-6">{{ description }}</p>
        <a :href="buttonLink" target="_blank" rel="noopener noreferrer">
          <CtaButton variant="primary">{{ ctaButtonText }}</CtaButton>
        </a>
      </div>
    </div>
  </section>
</template>
