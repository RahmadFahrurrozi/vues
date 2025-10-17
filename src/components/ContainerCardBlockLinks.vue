<script setup>
import CardBlockLinks from './CardBlockLinks.vue'
import { Images } from '@/constant/images.constant'

const link =
  'https://support.google.com/?utm_source=about.google&utm_medium=referral&utm_campaign=productspage'

const CardBlockLinksData = [
  {
    title: 'Dukungan Product',
    link: link,
    image: Images.Image1,
  },
  {
    title: 'Google Store',
    link: link,
    image: Images.Image2,
  },
  {
    title: 'Akun Google Anda',
    link: link,
    image: Images.Image3,
  },
]
</script>

<template>
  <div class="flex flex-col gap-10 items-center justify-center sm:flex-row sm:gap-20 pt-6 sm:pt-12">
    <CardBlockLinks v-for="card in CardBlockLinksData" :key="card.title" v-bind="card" />
  </div>
</template>
