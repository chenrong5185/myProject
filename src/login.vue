<template>
  <div @click="handle">登录页面</div>
</template>

<script>
export default {
  created() {
    // this.handle();
  },
  methods: {
    handle() {
      this.$http.getName().then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>
