<script setup>
import { Link2Icon } from 'lucide-vue-next'

defineProps({
  image: String,
  icon: Object,
  title: String,
  description: String,
  link: String,
  bgColor: {
    type: String,
    default: 'bg-white',
  },
  iconColor: {
    type: String,
    default: 'text-blue-300',
  },
})
</script>

<template>
  <a :href="link">
    <div
      class="rounded-xl flex justify-center items-center flex-col p-6 shadow-sm transition hover:shadow-md"
      :class="bgColor"
    >
      <div class="flex justify-center mb-3">
        <img v-if="image" :src="image" :alt="title" class="w-1/2 rounded-md object-cover" />
        <component v-else :is="icon" :class="[iconColor, 'size-7']" />
      </div>

      <h4 class="text-sm text-center font-semibold uppercase tracking-wide text-gray-700">
        {{ title }}
      </h4>

      <p class="text-gray-700 text-sm mt-2 text-center">{{ description }}</p>

      <a :href="link" target="_blank" class="inline-flex items-center mt-3 text-blue-500">
        <Link2Icon class="size-4 mr-1" />
      </a>
    </div>
  </a>
</template>
