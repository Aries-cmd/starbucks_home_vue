<template>
  <div class="header-center">
    <span @click="this.$router.push('/store')">门店</span>
    <span @click="this.$router.push('/account')">我的账户</span>
    <span @click="this.$router.push('/menu')">账单</span>
  </div>
</template>

<script setup>
</script>

<style>
  .header-center {
    font-weight: 800;
  }

  .header-center span {
    display: inline-block;
    margin-right: 30px;
    cursor: pointer;
  }

  .header-center span:nth-child(1) {
    margin-left: 30px;
  }
</style>