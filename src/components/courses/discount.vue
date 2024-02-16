<template>
  <section class="discount bg-no-repeat my-12 py-8 xl:py-28">
    <div class="container flex items-center justify-end">
      <div class="right flex flex-col justify-end">
        <h1 class="max-w-[550px] text-6xl text-slate-700 font-medium leading-[70px]">
          Скидка 40% до 30 июня
        </h1>
        <p class="max-w-lg pt-5 pb-12 text-base text-slate-700">
          Успейте приобрести курс по выгодной цене! Вы можете забронировать
          место на курсе со скидкой, а остальную сумму оплатить в рассрочку на
          12 или 24 месяца.
        </p>
        <TheButton color="bg-orange max-w-[235px]">Все направления</TheButton>
      </div>
    </div>
  </section>
</template>

<script>
import TheButton from "../TheButton.vue";

export default {
  components: {
    TheButton,
  },
};
</script>
  
<style scoped>
.discount {
  background: url(../../assets/images/скидка.png) no-repeat center / cover;
}

@media (max-width: 470px) {
  .discount {
    height: 400px;
    padding: 30px 0;
  }
}

@media (max-width: 720px) {
  .discount .container .right h1 {
    font-size: 48px;
    line-height: 60px;
  }
}

@media (max-width: 470px) {
  .discount .container .right h1 {
    font-size: 38px;
    line-height: 50px;
  }
}
</style>