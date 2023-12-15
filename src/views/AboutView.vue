<template>
  <AboutNumber/>
  <section class="bg-green">
    <AboutTraining />
  </section>
</template>

<script>
import AboutNumber from '@/components/AboutNumber.vue';
import AboutTraining from '@/components/AboutTraining.vue';

export default {
  components: { AboutNumber , AboutTraining}
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
