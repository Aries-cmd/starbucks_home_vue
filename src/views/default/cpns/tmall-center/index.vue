<template>
  <div class="tmall">
    <div>
      <h1>星巴克精选</h1>
      <br>
      <p>在星巴克天猫旗舰店发现更多咖啡心意</p>
    </div>
    <!-- <div >
      <a href="http://starbucks.tmall.com/p/rd796757.htm">
        <div>
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png" alt="" />
          <h4>会员星礼包</h4>
          <p>
            星享卡新升级
            <br>
            更多心意好礼
          </p>
          <a href="">了解更多</a>
        </div>
      </a>
      <a href="https://starbucks.tmall.com/p/rd993825.htm?spm=a1z10.1-b-s.w5001-14489348230.6.MtuIoi">
        <div>
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-02.png" alt="" />
        </div>
      </a>
      <a href="https://starbucks.tmall.com/p/rd103766.htm?spm=a1z10.1-b-s.w5001-14489348230.8.MtuIoi">
        <div>
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-eticket.png" alt="" />
        </div>
      </a>
      <a href="https://starbucks.tmall.com/p/rd103766.htm?spm=a1z10.1-b-s.w5001-14489348230.8.MtuIoi">
        <div>
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-reserve.png" alt="" />
        </div>
      </a>
    </div> -->
    <div class="card">
      <n-card>
        <img
          src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png"
        />
        <div>
          <h4>会员星礼包</h4>
          <p>
            星享卡新升级<br />
            更多心意好礼
          </p>
          <a href="">了解更多</a>
        </div>
      </n-card>
      <n-card>
        <img
          src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png"
        />
        <div>
          <h4>会员星礼包</h4>
          <p>
            星享卡新升级<br />
            更多心意好礼
          </p>
          <a href="">了解更多</a>
        </div>
      </n-card>
      <n-card>
        <img
          src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png"
        />
        <div>
          <h4>会员星礼包</h4>
          <p>
            星享卡新升级<br />
            更多心意好礼
          </p>
          <a href="">了解更多</a>
        </div>
      </n-card>
      <n-card>
        <img
          src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png"
        />
        <div>
          <h4>会员星礼包</h4>
          <p>
            星享卡新升级<br />
            更多心意好礼
          </p>
          <a href="">了解更多</a>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { NCard } from "naive-ui";
</script>

<style scoped>
.tmall {
  width: 100%;
  height: 416px;
  background: #f7f7f7;
  position: relative;
  text-align: center;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center;
  flex-direction: column; */
}
.tmall>div:nth-child(1) {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}
.tmall>div:nth-child(1) p {
  color: #6c6c6c;
}

.card {
  display: flex;
  margin: 0 auto;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}

.n-card {
  width: 162px;
  height: 197px;
  text-align: center;
  margin-right: 20px;
  box-shadow: 0 0 1px #ccc;
  transition: all 0.5s;
}
.n-card:hover {
  box-shadow: 0 0 5px #ccc;
  transform: translate(0, -15px); 
}

.n-card div {
  transform: translate(0, -40px);
  line-height: 30px;
}

img {
  width: 101px;
  height: 72px;
  transform: translate(0, -50px);
}

a {
  color: #ac9b72;
}
</style>
