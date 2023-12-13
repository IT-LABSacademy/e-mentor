<template>
  <header class="header">
    <div class="container">
      <nav>
        <div class="logo">
          <img src="@/assets/images/logotype.svg" alt="#">
        </div>

        <ul>
          <li v-for="link in 7" :key="link">
            <router-link to="#">
              Платформа
            </router-link>
          </li>
          <i class="fa-solid fa-bars"></i>
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
  
</style>