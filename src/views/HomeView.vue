<template>
  <section class="main bg-green">
   <HomeNavbar />
  </section>
  <!-- <TheNavbar /> -->
  <HomeNumber />
  <TheCourses />
</template>



<script>
import HomeNumber from '@/components/HomeNumber.vue';
import HomeNavbar from '@/components/home/homeNavbar.vue';
import TheCourses from '../components/TheCourses.vue'

export default {
  components: { HomeNumber, HomeNavbar, TheCourses,  }
}
</script>