<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      class="login-form"
      autocomplete="on"
      label-position="left"
      :model="loginForm"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <!-- <svg-icon icon-class="user" /> -->
        </span>
        <el-input
          ref="username"
          placeholder="请输入账号"
          name="username"
          type="text"
          tabindex="1"
          :model="loginForm.username"
        />
      </el-form-item>
      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item>
          <span class="svg-container">
            <!-- <svg-icon icon-class="password" /> -->
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            :model="loginForm.password"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            autocomplete="on"
          />
          <span class="show-pwd">
            <!-- <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            /> -->
          </span>
        </el-form-item>
      </el-tooltip>
      <el-button type="primary" style="width:100%;margin-bottom:30px;"
        >登录</el-button
      >
      <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>
        <el-button
          class="thirdparty-button"
          type="primary"
          @click="showDialog = true"
        >
          Or connect with
        </el-button>
      </div>
    </el-form>
    <el-dialog title="Or connect with">
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      capsTooltip: false,
      passwordType: "password"
    };
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>
<style lang="less" scoped>
@bg: #283443;
@light_gray: #fff;
@cursor: #fff;
@dark_gray: #889aa4;

@supports (-webkit-mask: none) and (not (cater-color: @cursor)) {
  .login-container .el-input input {
    color: @cursor;
  }
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: @bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: @dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: @light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: @dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
