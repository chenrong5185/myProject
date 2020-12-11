<template>
  <div @click="handle">登录页面</div>
</template>

<script>
export default {
  created() {
    this.handle();
  },
  methods: {
    handle() {
      this.$http.getAllAndroidPlugins().then(res => {
        console.log(123);
      });
    }
  }
};
</script>
