<template>
  <div id="app">
    <router-view />
    <footer-guite />
  </div>
</template>

<script>
import FooterGuite from "./components/FooterGuite/FooterGuite.vue";
export default {
  name: "App",
  components: {
    FooterGuite
  }
};
</script>

<style>
</style>
