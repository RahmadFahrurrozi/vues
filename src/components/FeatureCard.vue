<script setup>
import { SquareArrowOutUpRightIcon } from 'lucide-vue-next'

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
  link: {
    type: String,
    required: true,
    default: '/',
  },
  size: {
    type: String,
    default: 'small',
  },
})
</script>

<template>
  <a :href="link" class="block h-full transition-shadow duration-300 hover:shadow-md rounded-3xl">
    <div class="rounded-3xl border border-gray-200 p-6 flex flex-col h-full">
      <img
        :src="image"
        alt="Feature Image"
        class="rounded-2xl w-full object-cover"
        :class="{ 'h-48': size === 'small', 'h-64 sm:h-full': size === 'large' }"
      />
      <div class="pt-4 flex flex-col gap-2 justify-between flex-grow">
        <div>
          <h3 class="text-xl font-bold">{{ title }}</h3>
          <p class="text-base fo text-gray-500 mt-1">{{ description }}</p>
        </div>
        <div class="flex justify-end pt-3">
          <SquareArrowOutUpRightIcon class="size-5 text-blue-600" />
        </div>
      </div>
    </div>
  </a>
</template>
