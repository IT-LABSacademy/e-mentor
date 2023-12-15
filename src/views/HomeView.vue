<template>
  <section class="main bg-green">
  <HomeNavbar />
  </section>
  <HomeNumber />
</template>

<script>
// import AboutNumber from '@/components/AboutNumber.vue';
import HomeNumber from '../components/home/HomeNumber.vue';
import HomeNavbar from '@/components/home/homeNavbar.vue';



export default {
  components: { HomeNumber, HomeNavbar, HomeNavbar }
}
</script>