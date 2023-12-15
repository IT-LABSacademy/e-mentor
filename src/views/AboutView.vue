<template>
  <Motion />
  <CourseNumber />
  <AboutTraining />
</template>

<script>
import Motion from '@/components/courses/motion.vue';
import CourseNumber from '@/components/courses/CourseNumber.vue';
import AboutTraining from '@/components/courses/AboutTraining.vue';


export default {
  components: { CourseNumber, Motion, AboutTraining }
}
</script>