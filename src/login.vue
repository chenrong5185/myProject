<template>
  <div @click="handle">登录页面</div>
</template>

<script>
import {
  getAllAndroidPlugins,
  getConfigsByProductId,
  addNewAndroidPlugin
} from "./utils/api";
export default {
  created() {
    this.handle();
  },
  methods: {
    handle() {
      getAllAndroidPlugins().then(res => {
        console.log(123);
      });
    }
  }
};
</script>
