<template>
  <HomeNavbar />
  <homeHero />
  <HomeNumber />
  <TheMentors />
  <TrainingFormat />
  <TheCourses />
  <TheRates />
  <TheFooter />

</template>

<script>
import HomeNavbar from '@/components/home/homeNavbar.vue';
import homeHero from '@/components/home/homeHero.vue'
import TheCourses from '@/components/home/TheCourses.vue';
import HomeNumber from '@/components/home/HomeNumber.vue';
import TrainingFormat from '@/components/home/TrainingFormat.vue'
import TheMentors from '@/components/home/TheMentors.vue'
import TheRates from "@/components/home/TheRates.vue";
import TheFooter from '@/components/TheFooter.vue';


export default {
  components: { HomeNumber, HomeNavbar, TheCourses, TrainingFormat, TheMentors, homeHero, TheFooter, TheRates }
}
</script>
