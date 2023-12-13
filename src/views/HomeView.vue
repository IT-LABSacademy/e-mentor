<template>
  <TheNavbar />
  <HomeNumber />
</template>

<script>
import HomeNumber from '@/components/HomeNumber.vue';
import TheNavbar from '@/components/TheNavbar.vue';


export default {
  components: { TheNavbar, HomeNumber }
}
</script>