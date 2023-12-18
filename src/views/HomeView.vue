<template>
  <HomeNavbar />
  <HomeHero />
  <HomeNumber />
  <TrainingFormat />
</template>

<script>
// import AboutNumber from '@/components/AboutNumber.vue';
import HomeNumber from '@/components/home/HomeNumber.vue';
import HomeNavbar from '@/components/home/homeNavbar.vue';
import TrainingFormat from '@/components/home/TrainingFormat.vue';
import HomeHero from '@/components/home/homeHero.vue';



export default {
  components: { HomeNumber, HomeHero, HomeNavbar, TrainingFormat }
}
</script>