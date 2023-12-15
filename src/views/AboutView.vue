<template>
  <Motion/>
  <CourseNumber/>
</template>

<script>
import Motion from '@/components/courses/motion.vue';
import CourseNumber from '../components/courses/CourseNumber.vue';


export default {
  components: { CourseNumber, Motion }
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
