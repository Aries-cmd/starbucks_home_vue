<template>
  <n-avatar :src="src" round @click="routeClick" class="avatar" />
</template>

<script setup>
import { NAvatar } from "naive-ui";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const src = ref(
  "https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo.svg"
);

const routeClick = () => {
  router.push("/home");
};
</script>

<style>
.avatar {
  cursor: pointer;
}
</style>
