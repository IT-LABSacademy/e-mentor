<template>
  <TheNavbar v-if="$route.path === '/' ? false : true" />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: { TheNavbar }
}
</script>