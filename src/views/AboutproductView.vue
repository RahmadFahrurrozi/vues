<script setup>
import ContainerCardBlockLinks from '@/components/ContainerCardBlockLinks.vue'
import HeroSection from '@/components/HeroSection.vue'
import MarQueeLogos from '@/components/MarQueeLogos.vue'
import CtaButton from '@/components/CtaButton.vue'
import ContainerFeatureCard from '@/components/ContainerFeatureCard.vue'
import CtaFeatureSection from '@/components/CtaFeatureSection.vue'
import ProductAndWork from '@/components/ProductAndWork.vue'
import { Images } from '@/constant/images.constant'
import { FEATURE_CARD_DATA1 } from '@/constant/featureCard.constant'
import { FEATURE_SECTION_LINK } from '@/constant/featureLinkSection.constant'
</script>

<template>
  <section>
    <HeroSection />
    <MarQueeLogos />
    <ContainerCardBlockLinks />
    <div class="flex justify-center py-12">
      <CtaButton variant="secondary">Lewati ke produk kami</CtaButton>
    </div>
    <CtaFeatureSection
      title="Cara kerja Google Penelusuran"
      description="Ketahui detail cara kerja Penelusuran, mulai dari teknologi yang kami buat hingga pendekatan yang kami terapkan."
      :image="Images.Image4"
      cta-button-text="Pelajari lebih lanjut"
      :button-link="FEATURE_SECTION_LINK.SEARCH"
    />
    <ContainerFeatureCard
      title="Cara baru untuk belajar, menjelajah, dan berkreasi"
      description="Ketahui detail cara kerja Penelusuran, mulai dari teknologi yang kami buat hingga pendekatan yang kami terapkan."
      :cards="FEATURE_CARD_DATA1"
    />
    <CtaFeatureSection
      title="Chat dengan Gemini"
      description="Mulai menulis, membuat rencana, dan belajar dengan asisten berteknologi AI."
      :image="Images.Image8"
      image-position="right"
      cta-button-text="Tanyakan"
      :button-link="FEATURE_SECTION_LINK.GEMINI"
    />
    <ProductAndWork />
  </section>
</template>
