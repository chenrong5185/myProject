<template>
  <div id="app">
    <router-view />
    <login />
  </div>
</template>

<script>
import login from "./login";
import Login from "./login.vue";
export default {
  name: "App",
  components: {
    login
  }
};
</script>

<style></style>
