<template>
  <section class="main bg-green">
   <HomeNavbar />
  </section>
  <!-- <TheNavbar /> -->
  <HomeNumber />
  <TheCourses />
  <HomeNumber />
  <TrainingFormat />
</template>

<script>
// import AboutNumber from '@/components/AboutNumber.vue';
import HomeNumber from '../components/home/HomeNumber.vue';
import HomeNavbar from '@/components/home/homeNavbar.vue';
import TheCourses from '../components/TheCourses.vue';
import TrainingFormat from '../components/home/TrainingFormat.vue'


export default {
  components:{HomeNumber, HomeNavbar, TheCourses, TrainingFormat}
}


</script>