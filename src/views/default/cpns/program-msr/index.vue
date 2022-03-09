<template>
  <div class="program-msr">
    <div>
      <h3>星享俱乐部</h3>
      <br>
      <p>
        开启您的星享之旅，星星越多、会员等级越高、<br/>好礼越丰富。<a
          href="https://www.starbucks.com.cn/account/starbucks-rewards"
          >了解更多 ›</a
        >
      </p>
      <br>
      <n-button type="primary" round ghost @click="this.$router.push('register')">注册</n-button>
      <n-button type="primary" round ghost @click="this.$router.push('account')">登录</n-button>
    </div>
    <div>
      <img
        src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo-msr-20210601.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { NButton } from "naive-ui"
</script>

<style scoped>
.program-msr {
  height: 249px;
  /* background: lightblue; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
a {
  color: #c2a661;
}
button {
  margin-right: 5px;
}
</style>
