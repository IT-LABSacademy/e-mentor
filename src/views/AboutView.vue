<template>
  <Motion />
  <CourseNumber />
  <AboutTraining />
  <TheLearn />
  <Accordion />
</template>

<script>
import Motion from '@/components/courses/motion.vue';
import CourseNumber from '@/components/courses/CourseNumber.vue';
import AboutTraining from '@/components/courses/AboutTraining.vue';
import TheLearn from '@/components/home/TheLearn.vue';
import Accordion from '@/components/courses/Accordion.vue';


export default {
  components: { CourseNumber, Motion, AboutTraining, TheLearn, Accordion }
}
</script>