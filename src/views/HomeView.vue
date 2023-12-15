<template>
  <section class="main bg-green">
  <HomeNavbar />
  </section>
  <HomeNumber /> 
  <section class="main bg-green">
    <TrainingFormat />
  </section>
</template>

<script>
import HomeNumber from '@/components/HomeNumber.vue';
import HomeNavbar from '@/components/home/homeNavbar.vue';
import TrainingFormat from '@/components/home/TrainingFormat.vue';



export default {
  components: { HomeNumber, HomeNavbar, TrainingFormat, HomeNavbar }
}
</script>