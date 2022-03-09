<template>
  <div class="coffeehouse">
    <div>
      <h2>1912 派克街 | 咖啡星讲堂</h2>
      <br>
      <p>了解更多星巴克咖啡文化</p>
      <br>
    </div>
    <div class="card">
      <n-card>
        <template #cover>
          <img
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
          />
        </template>
        <span>咖啡知识</span>
        <p>
          咖啡的起源与种植
        </p>
      </n-card>
       <n-card>
        <template #cover>
          <img
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
          />
        </template>
        <span>咖啡知识</span>
        <p>
          咖啡的起源与种植
        </p>
      </n-card>
       <n-card>
        <template #cover>
          <img
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
          />
        </template>
        <span>咖啡知识</span>
        <p>
          咖啡的起源与种植
        </p>
      </n-card>
    </div>
    <p>
      <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/icpicon.png" alt="">
      沪公网安备 31010402000253号 | 沪ICP备17003747号
    </p>
  </div>
</template>

<script setup>
import { NCard } from "naive-ui";
</script>

<style scoped>
.coffeehouse {
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.card {
  display: flex;
}

.n-card {
  width: 290px;
  height: 255px;
  text-align: center;
  position: relative;
  margin-right: 10px;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.5s;
}
.n-card:hover {
  transform: translate(0, -10px);
  box-shadow: 0 0 10px #ccc;
}

.n-card p {
  margin-top: 10px;
  font-size: 20px;
}

.n-card span {
  position: absolute;
  left: 0;
  top: 5px;
  background: #c2a661;
  color: #fff;
  padding: 3px;
}

.coffeehouse>p {
  position: absolute;
  bottom: 2px;
}

.coffeehouse>p>img {
  width: 10px;
  height: 10px;
}
</style>
