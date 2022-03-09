<template>
  <div class="promotion">
    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/tmall-2020-06-29-zh.jpg" alt="">
    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/starbucks-design-studio-web-china.jpg" alt="">
    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/starbucks-design-studio-web-china.jpg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.promotion {
  background: #f7f7f7;
  height: 261px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

img {
  width: 337px;
  height: 213px;
  transition: all 0.5s;
}
img:hover {
  box-shadow: 0 0 5px #000;
  transform: translate(0, -15px); 
}
</style>