<template>
  <header class="header py-[15px]">
    <div class="container">
      <nav class="flex items-center justify-between">
        <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logotype.svg" alt="#">
        </router-link>
        </div>

        <ul class="flex items-center justify-between gap-10">
          <li v-for="link in navbarArray" :key="link">
            <router-link :to="link.route" class="text-base font-[R-500] text-dark">
              {{ link.name }}
            </router-link>
          </li>
          <i class="fa-solid fa-bars"></i>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
// import navbarArray from '../navbar.js'
import navbar from '@/navbar.js'

export default {
  data() {
    return {
      navbarArray: navbar
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  padding: 20px 0;
}


nav ul {
  display: flex;
  gap: 40px;
  margin-left: 100px;
}

nav ul i {
  margin-top: 6px;
  display: none;
}
@media (max-width: 1115px) {
  nav ul li {
    display: none;
  }

  nav ul i {
    display: flex;
  }
}
  
.router-link-exact-active {
  border-bottom: 2px dashed #FA9F42;
  padding-bottom: 8px;
}
</style>