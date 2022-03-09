<template>
  <div class="login-icon">
    <div class="login-icon-left" @click="accountClick">
      <n-icon size="30" color="green">
        <person-circle-outline />
      </n-icon>
      <span style="color: green">登录</span>
    </div>
    <n-button type="success" round ghost size="small" @click="registerClick"> 注册 </n-button>
  </div>
</template>

<script setup>
import { NIcon, NButton } from "naive-ui";
import { PersonCircleOutline } from "@vicons/ionicons5";
import { useRouter } from "vue-router"

const router = useRouter()

const registerClick = () => {
  router.push("/register")
}
const accountClick = () => {
  router.push("/account")
}
</script>

<style>
.login-icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}

.login-icon-left {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
