<script setup>
import CardItemProductAndWork from './CardItemProductAndWork.vue'
import { TabletIcon, CarIcon } from 'lucide-vue-next'
import { Images } from '@/constant/productImages.constant'

defineProps({
  title: String,
  description: String,
})

const cards = [
  {
    image: Images.Image9,
    title: 'PONSEL',
    description: 'Jelajahi perangkat foldable, ponsel terbaru dengan Gemini, dan lainnya.',
    link: '#',
    bgColor: 'bg-blue-50',
  },
  {
    icon: TabletIcon,
    title: 'TABLET',
    description:
      'Lakukan multitasking, mainkan game, dan temukan aplikasi baru, semuanya di layar yang lebih besar.',
    link: '#',
    iconColor: 'text-blue-900',
    bgColor: 'bg-green-50',
  },
  {
    icon: CarIcon,
    title: 'AUTO',
    description:
      'Dapatkan rute dengan lancar, berkomunikasi dengan mudah, dan tetap terhibur saat mengemudi di jalan.',
    link: '#',
    iconColor: 'text-blue-500',
    bgColor: 'bg-red-50',
  },
  {
    image: Images.Image10,
    title: 'SMARTWATCH',
    description:
      'Hubungkan ke aplikasi Google, lalu pantau kesehatan dan kebugaran Anda langsung dari pergelangan tangan.',
    link: '#',
    bgColor: 'bg-yellow-50',
  },
]
</script>

<template>
  <section class="py-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
      {{ title }}
    </h2>
    <p class="text-lg text-gray-600 text-center mt-3 mb-10">{{ description }}</p>

    <!-- grid utama -->
    <div class="grid grid-cols-2 grid-rows-1 gap-4">
      <div class="row-span-2">
        <CardItemProductAndWork v-bind="cards[0]" />
      </div>
      <div class="col-start-2 row-start-1">
        <CardItemProductAndWork v-bind="cards[1]" />
      </div>
      <div class="col-start-1 row-start-3">
        <CardItemProductAndWork v-bind="cards[2]" />
      </div>
      <div class="row-span-2 col-start-2 row-start-2">
        <CardItemProductAndWork v-bind="cards[3]" />
      </div>
    </div>
  </section>
</template>
