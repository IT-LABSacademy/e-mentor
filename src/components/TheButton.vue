<template>
  <button class="btn py-4 px-12 text-white text-base font-medium rounded-tr-3xl rounded-bl-3xl" :class="color">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.btn {
  transition: 0.3s;
  border: 2.5px solid transparent;
}

.btn:hover {
  transform: scale(1.2);
}
</style>