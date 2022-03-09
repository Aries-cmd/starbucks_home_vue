<template>
  <div class="main-left">
    <div class="main-left-header">
      <div class="header-left">
        <avatar />
        <header-center class="animate__animated animate__fadeInDown" v-if="$store.state.menuShow" />
      </div>
      <header-icon />
    </div>
    <div class="main-left-content animate__animated animate__fadeInDown" v-if="$store.state.menuShow">
      <div class="main-left-content-item">
        <h1>心情惬意，来杯咖啡吧 ☕</h1>
        <br />
        <login-icon />
      </div>
    </div>
    <div v-else class="main-left-content2 animate__animated animate__fadeInDown">
      <ul>
        <li><a href="#">门店</a></li>
        <li><a href="#">星享俱乐部</a></li>
        <li><a href="#">菜单</a></li>
        <hr />
        <li><a href="#">星巴克移动应用</a></li>
        <li><a href="#">星礼卡</a></li>
        <li><a href="#">星巴克臻选™</a></li>
        <li><a href="#"> 啡快™ － 在线点 到店取 </a></li>
        <li><a href="#"> 专星送™ </a></li>
        <li><a href="#"> 咖啡星讲堂 </a></li>
        <li><a href="#"> 上海烘焙工坊 </a></li>
        <li><a href="#"> 关于星巴克 </a></li>
        <li><a href="#"> 帮助中心 </a></li>
        <hr />
        <login-icon />
      </ul>
    </div>
  </div>
</template>

<script setup>
import Avatar from "../../components/avatar/index.vue";
import HeaderCenter from "./cpns/header-center/index.vue";
import HeaderIcon from "./cpns/header-icon/index.vue";
import LoginIcon from "../../components/login-icon/index.vue";
</script>

<style scoped>
.main-left {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main-left-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 20px;
  height: 80px;
}

.header-left {
  display: flex;
  align-items: center;
}

.main-left-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-left-content-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 330px;
}

h1 {
  font-size: 1.7rem;
}

ul {
  list-style: none;
  font-size: 1.25em;
  font-weight: bold;
}

.main-left-content2 {
  width: 350px;
  margin-top: 100px;
  margin-left: 100px;
  line-height: 40px;
}
</style>
