<template>
  <AboutNumber/>
</template>

<script>
import AboutNumber from '@/components/AboutNumber.vue';

export default {
  components: { AboutNumber }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
