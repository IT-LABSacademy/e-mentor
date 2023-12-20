<template>
  <footer class="footer">
    <div class="container">
      <div class="wrapper flex items-center justify-between">

        <!-- LOGO -->
        <div class="logo mt-20">
          <img class="w-60 h-30" src="../assets/images/logotype.svg" alt="" />
          <p class="max-w-[300px] mt-7 mb-12">
            Образовательная онлайн-платформа для развития и тренировки навыков в сфере
          информационных технологий
        </p>
        <!-- socials -->
        <ul class="socials flex items-start justify-start gap-7">
          <li>
            <a href="#" class="w-6 h-6 text-[22px] text-dark/30">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" class="w-6 h-6 text-[25px] text-dark/30">
              <i class="fa-brands fa-vk"></i>
            </a>
          </li>
          <li>
            <a href="#" class="w-6 h-6 text-[25px] text-dark/30">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      <!-- quickLinks -->
      <ul class="quickLinks flex items-center justify-between ">
        <li class="w-[135px]" v-for="item in footArr" :key="item">
          <ul>
            <h1>{{ item.title }}</h1>
            
            <li v-for="text in item.links" :key="text">
              <a href="">{{ text.link }}</a>
            </li>
          </ul>
        </li>
      </ul>
      
      <div class="email">
        <h1>Возникли вопросы?</h1>
        <p>Напишите нам на почту</p>
        <p>education@ementor.info</p>
      </div>
    </div>
    <div class="w-full h-[1px] bg-dark/30"></div>
      <div class="end text-start text-sm">
        <p>E-Mentor © 2021 Все права защищены</p>
      </div>
    </div>
    
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footArr: [
        {
          title: "Обучение",
          links: [
            {
              link: "Курсы",
            },
            {
              link: "Вебинары",
            },
            {
              link: "Тренажеры",
            },
            {
              link: "Воркшопы",
            },
          ],
        },
        {
          title: "О нас",
          links: [
            {
              link: "Курсы",
            },
            {
              link: "Вебинары",
            },
            {
              link: "Тренажеры",
            },
            {
              link: "Воркшопы",
            },
          ],
        },
        {
          title: "Контакты",
          links: [
            {
              link: "Курсы",
            },
            {
              link: "Вебинары",
            },
            {
              link: "Тренажеры",
            },
            {
              link: "Воркшопы",
            },
          ],
        },
      ],
    };
  },
};
</script>
