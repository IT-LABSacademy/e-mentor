<template>
  <TheNavbar />

  <section class="discount bg-no-repeat my-12 py-20">
    <div class="container flex items-center justify-end">
      <div class="right flex flex-col justify-end">
        <h1
          class="max-w-[550px] text-6xl text-slate-700 font-medium leading-[70px]"
        >
          Скидка 40% до 30 июня
        </h1>
        <p class="max-w-lg pt-5 pb-12 text-base text-slate-700">
          Успейте приобрести курс по выгодной цене! Вы можете забронировать
          место на курсе со скидкой, а остальную сумму оплатить в рассрочку на
          12 или 24 месяца.
        </p>
        <button
          class="w-56 h-14 rounded-bl-3xl rounded-tr-3xl text-slate-100 bg-orange-400"
        >
          Купить курс
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.discount {
  background-image: url(../assets/images/скидка.png);
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

.discount .container .right button:hover {
  background: #10b582;
  border-radius: 20px 0;
  transition: 1s;
}

@media (max-width: 470px) {
  .discount .container .right button {
    width: 200px;
    height: 45px;
  }
}
</style>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: { TheNavbar },
};
</script>
