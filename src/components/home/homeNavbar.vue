<template>
  <header>
    <div class="container">

      <!-- MENU -->
      <ul class="hidden sm:flex items-center justify-center gap-4 py-10">
        <li v-for="link in navbarArray" :key="link">
          <router-link :to="link.route" class="text-base font-[R-500] text-light">
            {{ link.name }}
          </router-link>
        </li>
      </ul>

      <!-- Mobile Navbar -->
      <div
        class="mobile-navbar flex sm:hidden items-center justify-between py-4 fixed bg-green w-full z-20 left-0 top-0 px-3">
        <!-- LOGO -->
        <div class="logo">
          <img class="min-[350px]:hidden " src="../../assets/images/logo_Icon.svg" alt="">
          <img class="max-[350px]:hidden " src="../../assets/images/logo-white.svg" alt="">
        </div>

        <!-- BURGER -->
        <div @click="openMenu" class="burger text-light text-2xl w-4 h-4 flex items-center justify-center">
          <i v-if="!isMenuOpen" class="fa-solid fa-bars-staggered"></i>
          <i v-else class="fa-solid fa-xmark text-3xl"></i>
        </div>
      </div>

      <!-- Menu Mobile -->
      <!-- v-if="isMenuOpen" -->
      <div 
      class="mobile-menu fixed top-0 left-0 z-10 bg-black/80 w-full h-full flex items-center justify-center
       transition-all"
       :class="isMenuOpen ? 'translate-y-0' : '-translate-y-[100%]'">
        <ul class="flex items-center justify-center flex-col gap-5 py-10 ">
          <li v-for="link in navbarArray" :key="link">
            <router-link :to="link.route" class="text-lg font-[R-500] text-light">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>



<script>
import navbar from '@/navbar.js'

export default {
  data() {
    return {
      navbarArray: navbar,
      isMenuOpen: false,
    }
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 2px dashed #FA9F42;
  padding-bottom: 8px;
}
</style>