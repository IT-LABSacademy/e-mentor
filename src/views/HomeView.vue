<template>
  <HomeNavbar />
  <homeHero />
  <HomeNumber />
  <TheMentors />
  <TrainingFormat />
  <TheCourses />
  <!-- <TheLearn /> -->
</template>

<script>
import HomeNavbar from '@/components/home/homeNavbar.vue';
import homeHero from '@/components/home/homeHero.vue'
import TheCourses from '@/components/home/TheCourses.vue';
import HomeNumber from '@/components/home/HomeNumber.vue';
import TrainingFormat from '@/components/home/TrainingFormat.vue'
import TheMentors from '@/components/home/TheMentors.vue'
// import TheLearn from '@/components/home/TheLearn.vue';

export default {
  components: { HomeNumber, HomeNavbar, TheCourses, TrainingFormat, TheMentors, homeHero }
}
</script>

