<template>
  <TheNavbar />

  <section class="rates bg-no-repeat my-12 py-20">
    <div class="container flex items-center justify-end">
      <div class="right flex flex-col justify-end">
        <h1
          class="max-w-[550px] text-6xl text-slate-700 font-medium leading-[70px]"
        >
          Присоединяйтесь к E-Mentor сейчас
        </h1>
        <p class="max-w-lg pt-5 pb-12 text-base text-slate-700">
          Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы
          подарим вам дополнительные лекции по любому направлению бесплатно!
        </p>
        <TheButton color="bg-orange max-w-[235px] h-[56px]"
          >Все направления</TheButton
        >
      </div>
    </div>
  </section>
</template>

<style>
.rates {
  background-image: url(../../assets/images/e-mentorBg.png);
}

@media (max-width: 470px) {
  .rates {
    height: 400px;
    padding: 30px 0;
  }
}

@media (max-width: 720px) {
  .rates .container .right h1 {
    font-size: 48px;
    line-height: 60px;
  }
}

@media (max-width: 470px) {
  .rates .container .right h1 {
    font-size: 38px;
    line-height: 50px;
  }
}
</style>

<script>
import TheButton from "../TheButton.vue";

export default {
  components: {
    TheButton,
  },
};
</script>
