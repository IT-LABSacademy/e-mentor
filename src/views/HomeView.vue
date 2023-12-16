<template>
  <section class="main bg-green">
   <HomeNavbar />
  </section>
  <HomeNumber />
  <TheCourses />
  <HomeNumber />
  <TrainingFormat />
  <TheMentorsVue />
  <TheLearn />
</template>

<script>
import HomeNumber from '../components/home/HomeNumber.vue';
import HomeNavbar from '@/components/home/homeNavbar.vue';
import TheCourses from '../components/TheCourses.vue';
import TrainingFormat from '../components/home/TrainingFormat.vue'
import TheMentorsVue from '../components/TheMentors.vue'
import TheLearn from '@/components/home/TheLearn.vue';

export default {
  components:{HomeNumber, HomeNavbar, TheCourses, TrainingFormat, TheMentorsVue, TheLearn}
}


</script>