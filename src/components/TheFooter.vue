<template>
  <footer class="footer mt-5 md:mt-10 xl:mt-24">
    <div class="footer-top pt-5 xl:pt-20 pb-5 xl:pb-12 border-y border-dark/10">
      <div
        class="container flex items-center justify-between flex-wrap gap-8">
        <!-- LOGO -->
        <div class="logo">
          <img src="../assets/images/logotype.svg" alt="" />
          <p class="max-w-[300px]">
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
        <ul class="quickLinks flex items-center justify-between flex-wrap gap-7">
          <li class="md:w-[170px]" v-for="item in footArr" :key="item">
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
    </div>

    <div class="footer-bottom py-7">
      <div class="container flex items-center justify-center xl:justify-between flex-wrap">
        <p class="text-dark text-base">E-Mentor © 2021 Все права защищены</p>

        <div class="oferta flex items-center justify-center flex-wrap gap-7">
          <a class="text-dark text-base" href="#">Политика обработки персональных данных</a>
          <a class="text-dark text-base" href="#">Публичная оферта</a>
        </div>
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
