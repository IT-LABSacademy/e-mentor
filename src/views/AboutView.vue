<template>
  <Motion />
  <CourseNumber />
  <AboutTraining />
  <TheLearn />
  <Accordion />
  <Discount />
</template>

<script>
import Motion from '@/components/courses/motion.vue';
import CourseNumber from '@/components/courses/CourseNumber.vue';
import AboutTraining from '@/components/courses/AboutTraining.vue';
import TheLearn from '@/components/home/TheLearn.vue';
import Accordion from '@/components/courses/Accordion.vue';
import Discount from '@/components/courses/discount.vue';


export default {
  components: {
    CourseNumber, Motion, AboutTraining, TheLearn, Accordion, Discount
  }
}
</script>
