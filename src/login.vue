<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">管理系统</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          autocomplete="on"
        />
      </el-form-item>
      <el-button
        type="primary"
        style="width:100%;margin-bottom:30px;border-radius: 25px;"
        @clik.native.prevent="handleLoginForm"
        >登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validateUsername(value)) {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能少于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword
          }
        ]
      },
      capsTooltip: false,
      passwordType: "password"
    };
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    handleLoginForm() {
      alert(1);
    }
  }
};
</script>
<style lang="less" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  color: #ffff;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.login-form {
  width: 398px;
  margin: 160px auto; /* 上下间距160px，左右自动居中*/
  //   background: linear-gradient(9deg, #251436, #6b314a);
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}
/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  //   background: #331837;
  background: linear-gradient(9deg, #331837, #aa4e4f);
}
/* 标题 */
.title {
  color: #303133;
  text-align: center;
  margin-bottom: 20px;
}
/deep/.el-input__inner {
  margin-left: 0;
}
/deep/.el-form-item {
  margin-left: 0;
}
</style>
