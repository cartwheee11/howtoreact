<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <nav>👉 kak reagirovat 👈</nav>
  <RouterView />
  <footer>
    © fusionvibes666 2025;
  </footer>
</template>

<style scoped>
nav,
footer {
  font-family: Roboto Mono;
  padding: 15px;
  text-transform: uppercase;
  border-bottom: 1px rgba(112, 112, 112, 0.074) solid;
  text-align: center;
  font-weight: 500
}

footer {
  border: none;
  padding-top: 0px;
  color: rgba(111, 111, 111, 0.433);
  padding-bottom: 30px
}
</style>
