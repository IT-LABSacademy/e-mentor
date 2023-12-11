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
          <li v-for="link in 7" :key="link">
            <router-link to="about" class="text-base font-[R-500] text-dark">
              Платформа
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 2px dashed #FA9F42;
  padding-bottom: 8px;
}
</style>