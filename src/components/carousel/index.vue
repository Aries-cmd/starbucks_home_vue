<template>
  <n-carousel
    show-arrow
    autoplay
    dot-placement="top"
    draggable
    :show-dots="false"
  >
    <img
      class="carousel-img"
      src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/default_banner/banner1.png"
    />
    <img
      class="carousel-img"
      src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/club_upgrade/banner.jpg"
    />
  </n-carousel>
</template>

<script setup>
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { NCarousel } from "naive-ui";
</script>

<style>
.carousel-img {
  width: 100%;
  height: 519px;
}

.n-carousel__arrow-group div:nth-child(1) {
  display: none;
}

.n-carousel__arrow-group div:nth-child(2) {
  width: 50px;
  height: 50px;
  margin-top: 200px;
}
</style>
