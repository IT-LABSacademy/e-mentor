<template>
  <section class="hero bg-green text-white py-10 md:pb-28 md:pt-10">
    <div class="container flex items-center justify-between flex-wrap">
      <!-- left -->
      <div class="left order-2 sm:order-none">
        <!-- socials -->
        <ul class="socials flex flex-col items-start justify-center gap-7">
          <li>
            <a href="#" class="w-6 h-6 text-[22px]">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" class="w-6 h-6 text-[25px]">
              <i class="fa-brands fa-vk"></i>
            </a>
          </li>
          <li>
            <a href="#" class="w-6 h-6 text-[25px]">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </ul>
        <!-- image-block -->
        <div class="image-block hidden xl:block">
          <img class="relative z-10 w-full h-full object-cover" src="@/assets/images/home-left.png" alt="#">
        </div>
      </div>

      <!-- center -->
      <div class="center text-center">
        <!-- logo -->
        <div class="logo justify-center hidden md:flex">
          <img src="../../assets/images/logo-white.svg" alt="#">
        </div>

        <h1 class="text-6xl leading-[70px] max-w-xl mx-auto font-medium mt-10">Образовательная онлайн-платформа</h1>
        <p class="text-base max-w-sm mx-auto mt-5 mb-14">Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и
          многим другим направлениям</p>

        <TheButton color="bg-orange">Все направления</TheButton>
      </div>

      <!-- right -->
      <div class="right flex flex-col justify-between items-end gap-16">
        <!-- image-block -->
        <div class="image-block hidden lg:block">
          <img class="relative z-10 w-full h-full object-cover" src="@/assets/images/home-right.png" alt="#">
        </div>

        <!-- to-bottom -->
        <div class="to-bottom flex gap-3 items-center justify-start -rotate-90
        hidden lg:block">
          <i class="fa-solid fa-arrow-left-long"></i>
          <p>Листайте вниз</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import TheButton from '../TheButton.vue';

export default {
  components: {
    TheButton,
  },
}
</script>

<style scoped>
.hero .container .left .image-block {
  position: relative;
  margin-top: 100px;
}

.hero .container .left .image-block::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 30px;
  top: -30px;
  border: 2px dashed white;
  border-radius: 0 120px 0 0;
}

.hero .container .right .image-block {
  position: relative;
  margin-bottom: 100px;
}

.hero .container .right .image-block::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: -30px;
  top: -30px;
  border: 2px dashed white;
  border-radius: 120px 0 0 0;
}
</style>