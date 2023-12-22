<template>
  <section class="accordion my-5 xl:my-28">
    <div class="container">
      <h1 class="text-6xl text-dark text-center mt-28 mb-5">Часто задаваемые вопросы</h1>
      <div class="shadow-xl rounded-lg mb-8 " v-for="(item, index) in adnArr" :key="item">
        <h2>
          <button type="button" @click="openAcc(index)"
            class="flex items-center justify-between w-full p-5 rounded-xl gap-3">
            <span class="text-xl text-dark">{{ item.title }}</span>

            <div class="w-8 h-8 border border-green rounded-full border-dashed flex items-center
             justify-center text-green text-xl">
              <i v-if="!item.isOpen" class="fa-solid fa-plus"></i>
              <i v-else class="fa-solid fa-minus"></i>
            </div>
          </button>
        </h2>
        <!-- body -->
        <div class="" v-if="item.isOpen">
          <div class="p-5">
            <p class="mb-2 text-base text-dark">{{ item.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from '../../accordion.js'
export default {

  data() {
    return {
      isOpened: false,
      adnArr: data
    }
  },
  methods: {
    openAcc(index) {
      this.adnArr[index].isOpen = !this.adnArr[index].isOpen
    }
  }

}
</script>