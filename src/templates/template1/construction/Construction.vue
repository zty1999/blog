<template>
  <div id="construction" ref="construction">
    <div class="cloud  animate__animated animate__pulse  animate__infinite  animate__slower ">
      <img src="@/assets/img/cloud.png" alt="Spark Site">
    </div>
    <div class="cloud pos1 fliped  animate__animated animate__pulse  animate__infinite  animate__slower">
      <img src="@/assets/img/cloud.png" alt="Spark Site">
    </div>
    <div class="cloud pos2  animate__animated animate__pulse  animate__infinite  animate__slower">
      <img src="@/assets/img/cloud.png" alt="Spark Site">
    </div>
    <div class="cloud pos3 fliped  animate__animated animate__pulse  animate__infinite  animate__slower">
      <img src="@/assets/img/cloud.png" alt="Spark Site">
    </div>
    <div class="container">

      <!-- <img src="@/assets/img/logo.png" alt="Spark Site Logo"> -->
      <br>
      <br>
      <h2 class="subtitle">This website is under construction!</h2>
      <br>
      <br>
      <p class="copyright">Design by Spark All rights reserved 赣ICP备2021006795号</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const construction = ref() as Ref<HTMLElement>
console.log(construction);

</script>
<style lang="scss" scoped>
/* construction */
#construction {
  text-align: center;
  background: url(@/assets/img/main-bg-compressor.jpg) no-repeat center top;
  background-attachment: relative;
  background-position: center center;
  box-sizing: border;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}

#construction>.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 50px;
}



#construction h1 {
  margin-top: 60px;
  margin-bottom: 40px;
  color: #fff;
  font-size: 45px;
  font-weight: 900;
  letter-spacing: -1px;
}


/* cloud */

.cloud {
  position: fixed;
  bottom: 40px;
  left: 20px;
}

.cloud.fliped img {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}

.cloud.pos1 {
  right: 20px;
  left: auto;
  bottom: 70px;
}

.cloud.pos1 img {
  width: 100px;
}

.cloud.pos2 {
  bottom: 150px;
  right: 50px;
  left: auto;
}

.cloud.pos2 img {
  width: 150px;
}

.cloud.pos3 {
  bottom: 200px;
  left: 120px;
}

.cloud.pos3 img {
  width: 180px;
}



/* content */
h2.subtitle {
  color: #fff;
  font-size: 24px;
}

p.copyright {
  margin-top: 50px;
  color: #fff;
  text-align: center;
}
</style>
