<template>
  <div class="home">
   <div class="content">
    <div class="profile">
      <h2 class="title">Spark</h2>
      <div class="avatar">
        <img src="http://www.laixiangran.cn/CDN/custom/img/bg1.jpg" alt="" class="avatar-img">
      </div>
    <div class="desc">一路向前</div>
    
    </div>
    <div class="category">
      <div class="item boke">博客</div>
      <div class="item laboratory">实验室</div>
    </div>
   </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const value = ref('');
    return {
      value,
    };
  }
});
</script>
<style lang="scss">
body {
  font-size: 16px;
  color: #fff;
  background-color: rgba(0,0,0,.8);
  background-image: url(http://www.laixiangran.cn/CDN/custom/img/bg1.jpg);
}
.content {
  position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
}
.title {
  color:#ffffff;
  
}
.avatar {
  width: 100px;
  height: 100px;
  margin:0 auto;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.desc {
  color:grey;
}
.category {
  display: flex;
  justify-content: space-evenly;
  margin:100px 0;
  .item {
    width: 200px;
    padding:10px;
    border: 1px solid #fff;
    border-radius: 20px;
  }
}
</style>