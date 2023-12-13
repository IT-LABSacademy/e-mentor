<template>
  <section class="main bg-green">
  <HomeNavbar />
  </section>
  <HomeNumber />
</template>

<script>
import HomeNumber from '@/components/HomeNumber.vue';
import HomeNavbar from '@/components/home/homeNavbar.vue';



export default {
  components: { HomeNumber, HomeNavbar, HomeNavbar }
}
</script>