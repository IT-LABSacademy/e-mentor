<template>
  <section class="main bg-green">
   <HomeNavbar />
  </section>

  <homeHero />
  <TheCourses />
  <HomeNumber />
  <TrainingFormat />
  <TheMentors />
  <TheLearn />
</template>

<script>
import homeHero from '@/components/home/homeHero.vue'
import HomeNumber from '../components/home/HomeNumber.vue';
import HomeNavbar from '@/components/home/homeNavbar.vue';
import TheCourses from '../components/TheCourses.vue';
import TrainingFormat from '../components/home/TrainingFormat.vue'
import TheLearn from '@/components/home/TheLearn.vue';
import TheMentors from '@/components/TheMentors.vue'

export default {
  components:{HomeNumber, HomeNavbar, TheCourses, TrainingFormat, TheLearn, TheMentors, homeHero}
}
</script>

