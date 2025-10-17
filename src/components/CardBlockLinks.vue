<script setup>
import { ArrowRight } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    default: '#',
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a :href="link">
    <div
      class="flex border border-gray-200 rounded-md max-w-sm cursor-pointer hover:shadow-md transition duration-300 ease-in-out"
    >
      <div class="w-[420px] flex flex-col justify-around pl-4">
        <h3 class="text-gray-800 font-semibold">
          {{ title }}
        </h3>
        <a :href="link">
          <ArrowRight class="w-6 h-6 text-blue-500" />
        </a>
      </div>
      <div class="w-1/2">
        <img :src="image" alt="image" class="rounded-e-md object-cover h-48 w-full" />
      </div>
    </div>
  </a>
</template>
