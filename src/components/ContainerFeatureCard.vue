<script setup>
import FeatureCard from './FeatureCard.vue'
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  cards: { type: Array, required: true },
})
</script>
<template>
  <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-semibold md:text-4xl text-center text-gray-900">
      {{ title }}
    </h2>
    <p class="text-lg text-gray-600 text-center mt-3 mb-10" v-if="description">
      {{ description }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8">
      <div class="md:col-span-2 md:row-span-2">
        <FeatureCard
          :title="cards[0].title"
          :description="cards[0].description"
          :image="cards[0].image"
          :link="cards[0].link"
          size="large"
        />
      </div>

      <FeatureCard
        v-for="(card, index) in cards.slice(1)"
        :key="index"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :link="card.link"
        size="small"
      />
    </div>
  </section>
</template>
