<template>
  <n-layout has-sider class="main-wrapper">
    <n-layout-sider
      class="main-left"
      :width="475"
    >
      <main-left />
    </n-layout-sider>
    <n-layout-content class="main-right">
        <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { NLayout, NLayoutSider, NLayoutContent } from "naive-ui";
import MainLeft from "../main-left/index.vue";
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
}
</style>
