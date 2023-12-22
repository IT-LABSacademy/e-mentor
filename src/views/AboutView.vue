<template>
  <Motion />
  <CourseNumber />
  <AboutTraining />
  <TheLearn />
  <discount/>
</template>

<script>
import Motion from '@/components/courses/motion.vue';
import CourseNumber from '@/components/courses/CourseNumber.vue';
import AboutTraining from '@/components/courses/AboutTraining.vue';
import TheLearn from '@/components/home/TheLearn.vue';
import discount from '@/components/courses/discount.vue';


export default {
  components: { CourseNumber, Motion, AboutTraining, TheLearn, discount }
}
</script>