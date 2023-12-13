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
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
// import navbarArray from '../navbar.js'
export default {
  data() {
    return {}
  }
}
</script>